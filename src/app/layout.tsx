import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { SITE_URL } from "@/constants/navigation";

const ppNeueMontreal = localFont({
    src: "../../public/fonts/PPNeueMontreal-Medium.woff2",
    display: "swap",
    weight: "500",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Dmytro Yefymov — Frontend Developer",
        template: "%s | Dmytro Yefymov",
    },
    description:
        "Frontend developer from Ukraine with experience in React, Vue.js, Next.js, and TypeScript. Building modern web applications.",
    keywords: [
        "Frontend Developer",
        "React",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Dmytro Yefymov",
    ],
    authors: [{ name: "Dmytro Yefymov" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: "Dmytro Yefymov Portfolio",
        title: "Dmytro Yefymov — Frontend Developer",
        description:
            "Frontend developer from Ukraine with experience in React, Vue.js, Next.js, and TypeScript.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dmytro Yefymov — Frontend Developer",
        description:
            "Frontend developer from Ukraine with experience in React, Vue.js, Next.js, and TypeScript.",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: "/favicon/favicon.svg", type: "image/svg+xml" },
            {
                url: "/favicon/favicon-96x96.png",
                type: "image/png",
                sizes: "96x96",
            },
            { url: "/favicon/favicon.ico", sizes: "32x32" },
        ],
        apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={ppNeueMontreal.className}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

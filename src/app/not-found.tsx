import Link from "next/link";

export default function NotFound() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                gap: "1rem",
            }}
        >
            <h1>404</h1>
            <p>Page not found.</p>
            <Link href="/">Go home</Link>
        </main>
    );
}

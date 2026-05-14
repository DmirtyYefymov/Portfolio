export type NavItem = {
    label: string;
    to: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Contact", to: "contact" },
];

export type SocialLink = {
    label: string;
    href: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/YefymovDmytro",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dmytro-yefymov-frontend-developer/",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/dmytro_yefymov",
    },
];

export const CONTACT_EMAIL = "hello.dmytro.yefymov@gmail.com";
export const SITE_URL = "https://dmytroyefymov.netlify.app/";
export const SITE_NAME = "Dmytro Yefymov";

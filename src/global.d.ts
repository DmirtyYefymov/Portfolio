declare module "*.jpeg" {
    import type { StaticImageData } from "next/image";
    const content: StaticImageData;
    export default content;
}

declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.css" {
    const classes: { [className: string]: string };
    export default classes;
}

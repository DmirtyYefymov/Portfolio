import nextConfig from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = [
    ...nextConfig,
    prettier,
    {
        settings: {
            react: { version: "18" },
        },
        rules: {
            "react/no-unescaped-entities": "off",
            "@next/next/no-img-element": "error",
        },
    },
];

export default eslintConfig;

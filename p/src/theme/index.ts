import { ThemeConfig, extendTheme } from "@chakra-ui/react";

import { BrandPalette, MutedTealPalette, CharcoalPalette } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "as",
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const fonts = {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
};

const colors = {
    brand: BrandPalette,
    primary: {
        ...MutedTealPalette,
    },
    gray: {
        ...CharcoalPalette,
    },
};

export const bgLight = BrandPalette.mainBg;
export const bgDark = BrandPalette.mainBg;
export const NavbarHeight = "80px";

export const theme = extendTheme({
    config,
    colors,
    fonts,
    components,
    styles: {
        global: {
            "html, body": {
                bg: BrandPalette.mainBg,
                color: BrandPalette.primaryText,
                scrollBehavior: "smooth",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            },
            "::selection": {
                bg: "rgba(59, 130, 246, 0.35)",
                color: "#FFFFFF",
            },
        },
    },
});

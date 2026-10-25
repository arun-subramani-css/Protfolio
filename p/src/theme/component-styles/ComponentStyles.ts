import { ComponentStyleConfig } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";

const TextStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 400,
        color: BrandPalette.primaryText,
        lineHeight: 1.65,
    },
};

const ContainerStyles: ComponentStyleConfig = {
    baseStyle: {
        maxW: "container.xl",
        px: { base: 5, md: 8, lg: 12 },
    },
};

const ButtonStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 600,
        borderRadius: "md",
        transition: "all 0.2s ease-in-out",
        _focus: {
            boxShadow: `0 0 0 2px ${BrandPalette.accentBlue}`,
        },
    },
    variants: {
        // Primary Call to Action: off-white background with dark text
        solid: {
            bg: BrandPalette.primaryText,
            color: BrandPalette.mainBg,
            _hover: {
                bg: BrandPalette.white,
                transform: "translateY(-1px)",
                _disabled: {
                    bg: BrandPalette.primaryText,
                },
            },
            _active: {
                bg: BrandPalette.lightGray,
                transform: "translateY(0)",
            },
        },
        // Secondary / Elevated Surface button
        secondary: {
            bg: BrandPalette.elevatedBg,
            color: BrandPalette.primaryText,
            border: `1px solid ${BrandPalette.border}`,
            _hover: {
                bg: BrandPalette.darkGray,
                borderColor: BrandPalette.mediumGray,
                transform: "translateY(-1px)",
            },
            _active: {
                bg: BrandPalette.cardBg,
                transform: "translateY(0)",
            },
        },
        outline: {
            bg: "transparent",
            color: BrandPalette.primaryText,
            border: `1px solid ${BrandPalette.border}`,
            _hover: {
                bg: BrandPalette.elevatedBg,
                borderColor: BrandPalette.mediumGray,
            },
        },
        ghost: {
            bg: "transparent",
            color: BrandPalette.primaryText,
            _hover: {
                bg: BrandPalette.elevatedBg,
            },
        },
        icon: {
            bg: "transparent",
            color: BrandPalette.secondaryText,
            _hover: {
                bg: BrandPalette.elevatedBg,
                color: BrandPalette.primaryText,
            },
            _active: {
                bg: BrandPalette.darkGray,
            },
        },
    },
    defaultProps: {
        variant: "solid",
    },
};

const LinkStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 500,
        color: BrandPalette.accentBlue,
        transition: "color 0.2s ease",
        _hover: {
            textDecoration: "underline",
            color: BrandPalette.accentBlueHover,
        },
    },
};

export const components = {
    Text: { ...TextStyles },
    Container: { ...ContainerStyles },
    Link: { ...LinkStyles },
    Button: { ...ButtonStyles },
};

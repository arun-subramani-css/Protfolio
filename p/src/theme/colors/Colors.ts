import { ColorHues } from "@chakra-ui/react";

/**
 * Complete Portfolio Color Palette
 *
 * Base Colors:
 * - Main background: #0B0B0B (Overall website background and main page canvas)
 * - Section and card backgrounds: #141414 (Project cards, experience cards, skill cards, and content sections)
 * - Elevated surfaces and hover states: #1C1C1C (Dropdown menus, popovers, hover backgrounds, secondary panels)
 * - Borders and dividers: #2B2B2B (Card outlines, input borders, navigation separators, and section dividers)
 *
 * Text Colors:
 * - Primary text: #F5F5F5 (Main headings, page titles, project names, navigation labels)
 * - Secondary text: #A3A3A3 (Paragraphs, project descriptions, supporting information)
 * - Muted text: #737373 (Dates, captions, inactive labels, subtle metadata)
 *
 * Accent Colors:
 * - Blue accent: #3B82F6 (Primary interactive highlights, links, active nav, web dev tags)
 * - Purple accent: #A855F7 (AI/ML projects, SmartSpeak highlights, advanced technology tags)
 * - Green accent: #10B981 (Success states, completed projects, availability, verified status)
 * - Amber accent: #F59E0B (Important highlights, featured projects, warnings, priority tags)
 * - Pink accent: #EC4899 (Creative projects, design-related highlights, UI/UX tags)
 *
 * Additional Supporting Colors:
 * - White: #FFFFFF
 * - Black: #000000
 * - Dark gray: #202020
 * - Medium gray: #383838
 * - Light gray: #D4D4D4
 */

export const BrandPalette = {
    // Base Colors
    mainBg: "#0B0B0B",
    cardBg: "#141414",
    elevatedBg: "#1C1C1C",
    border: "#2B2B2B",

    // Text Colors
    primaryText: "#F5F5F5",
    secondaryText: "#A3A3A3",
    mutedText: "#737373",

    // Accent Colors
    accentBlue: "#3B82F6",
    accentBlueHover: "#2563EB",
    accentPurple: "#A855F7",
    accentPurpleHover: "#9333EA",
    accentGreen: "#10B981",
    accentGreenHover: "#059669",
    accentAmber: "#F59E0B",
    accentAmberHover: "#D97706",
    accentPink: "#EC4899",
    accentPinkHover: "#DB2777",

    // Additional Supporting Colors
    white: "#FFFFFF",
    black: "#000000",
    darkGray: "#202020",
    mediumGray: "#383838",
    lightGray: "#D4D4D4",

    // Aliases mapped to new dark tokens for seamless component compatibility
    warmOffWhite: "#0B0B0B",    // Maps to main background
    charcoal: "#F5F5F5",        // Maps to primary text
    mutedTeal: "#3B82F6",       // Maps to primary blue accent
    mutedTealHover: "#2563EB",  // Maps to blue hover
    softSage: "#1C1C1C",        // Maps to elevated surfaces
    softSageHover: "#202020",   // Maps to dark gray hover
    stoneNeutral: "#1C1C1C",    // Maps to elevated surfaces
    stoneBorder: "#2B2B2B",     // Maps to borders and dividers
    cardBorder: "#2B2B2B",      // Maps to borders and dividers
};

export const AccentBluePalette: ColorHues = {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6", // Primary blue accent
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
};

export const DarkSurfacePalette: ColorHues = {
    50: "#F5F5F5",
    100: "#E5E5E5",
    200: "#D4D4D4",
    300: "#A3A3A3",
    400: "#737373",
    500: "#383838",
    600: "#2B2B2B",
    700: "#202020",
    800: "#141414",
    900: "#0B0B0B",
};

export const MutedTealPalette: ColorHues = AccentBluePalette;
export const CharcoalPalette: ColorHues = DarkSurfacePalette;
export const PrimaryColors: ColorHues = AccentBluePalette;
export const PrimaryDarkColors: ColorHues = DarkSurfacePalette;

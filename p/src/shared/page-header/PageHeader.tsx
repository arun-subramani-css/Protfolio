import { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";

interface Props {
    id?: string;
    eyebrow?: string;
    label?: string; // backwards compatibility
    title?: string;
    description?: string;
    align?: "left" | "center";
}

export const PageHeader: FC<Props> = ({
    id,
    eyebrow,
    label,
    title,
    description,
    align = "left",
}) => {
    const mainTitle = title || label || "";

    return (
        <Box id={id} pt={{ base: 16, md: 24 }} pb={{ base: 8, md: 12 }} textAlign={align}>
            {eyebrow && (
                <Text
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.14em"
                    textTransform="uppercase"
                    color={BrandPalette.mutedTeal}
                    mb="2"
                >
                    {eyebrow}
                </Text>
            )}
            <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="700"
                letterSpacing="-0.02em"
                color={BrandPalette.charcoal}
                lineHeight="1.2"
            >
                {mainTitle}
            </Heading>
            {description && (
                <Text
                    mt="3"
                    fontSize={{ base: "md", md: "lg" }}
                    color={BrandPalette.secondaryText}
                    maxW="720px"
                    mx={align === "center" ? "auto" : undefined}
                    lineHeight="1.65"
                >
                    {description}
                </Text>
            )}
        </Box>
    );
};

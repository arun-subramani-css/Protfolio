import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";

interface Props {
    text: {
        mobile: string;
        desktop: string;
    };
    onClick?: () => void;
}

export const LogoType: FC<Props> = ({ text, onClick }) => {
    return (
        <Box
            onClick={onClick}
            cursor="pointer"
            role="button"
            aria-label="Navigate to top"
            transition="opacity 0.2s ease"
            _hover={{ opacity: 0.75 }}
        >
            <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="700"
                letterSpacing="0.16em"
                textTransform="uppercase"
                color={BrandPalette.charcoal}
            >
                {text.desktop}
            </Text>
        </Box>
    );
};

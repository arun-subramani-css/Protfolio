import { FC } from "react";
import { Box, Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";
import {
    LandingPageId,
    WorkPageId,
    AboutPageId,
    ContactPageId,
} from "utils/useScroll";

export const Footer: FC = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            as="footer"
            borderTop={`1px solid ${BrandPalette.border}`}
            py={{ base: 10, md: 14 }}
            mt={{ base: 12, md: 20 }}
            bg={BrandPalette.mainBg}
        >
            <Container maxW="container.xl" p="0">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ base: "flex-start", md: "center" }}
                    gap="6"
                    mb="8"
                >
                    <Box>
                        <Text
                            fontSize="sm"
                            fontWeight="700"
                            letterSpacing="0.12em"
                            textTransform="uppercase"
                            color={BrandPalette.primaryText}
                        >
                            Arun Subramani
                        </Text>
                        <Text fontSize="xs" color={BrandPalette.accentBlue} fontWeight="500" mt="1">
                            Product Thinking · Analytics · UI/UX Design
                        </Text>
                    </Box>

                    {/* Quick navigation links */}
                    <HStack spacing="6" wrap="wrap">
                        <Button
                            variant="link"
                            fontSize="xs"
                            fontWeight="500"
                            color={BrandPalette.secondaryText}
                            _hover={{ color: BrandPalette.accentBlue }}
                            onClick={() => scrollTo(LandingPageId)}
                        >
                            Home
                        </Button>
                        <Button
                            variant="link"
                            fontSize="xs"
                            fontWeight="500"
                            color={BrandPalette.secondaryText}
                            _hover={{ color: BrandPalette.mutedTeal }}
                            onClick={() => scrollTo(WorkPageId)}
                        >
                            Work
                        </Button>
                        <Button
                            variant="link"
                            fontSize="xs"
                            fontWeight="500"
                            color={BrandPalette.secondaryText}
                            _hover={{ color: BrandPalette.mutedTeal }}
                            onClick={() => scrollTo(AboutPageId)}
                        >
                            About
                        </Button>
                        <Button
                            variant="link"
                            fontSize="xs"
                            fontWeight="500"
                            color={BrandPalette.secondaryText}
                            _hover={{ color: BrandPalette.mutedTeal }}
                            onClick={() => scrollTo(ContactPageId)}
                        >
                            Contact
                        </Button>
                    </HStack>
                </Flex>

                <Flex
                    direction={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ base: "flex-start", sm: "center" }}
                    gap="2"
                    pt="6"
                    borderTop={`1px solid ${BrandPalette.stoneBorder}`}
                    fontSize="xs"
                    color={BrandPalette.mutedText}
                >
                    <Text>Designed and built with care by Arun Subramani.</Text>
                    <Text>© 2026 Arun Subramani. All rights reserved.</Text>
                </Flex>
            </Container>
        </Box>
    );
};

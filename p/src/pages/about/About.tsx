import { FC } from "react";
import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { BrandPalette } from "theme/colors/Colors";

export const About: FC = () => {
    return (
        <Box id="about" py="4">
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 8, md: 12 }}
                alignItems={{ base: "flex-start", md: "center" }}
            >
                {/* Genuine Profile Picture */}
                <Box
                    flex={{ base: "none", md: "0.35" }}
                    maxW={{ base: "240px", md: "300px" }}
                    borderRadius="2xl"
                    overflow="hidden"
                    border={`1px solid ${BrandPalette.stoneBorder}`}
                    bg={BrandPalette.stoneNeutral}
                    boxShadow="0 4px 20px rgba(36, 37, 34, 0.05)"
                >
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture} />
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG} />
                        <Image
                            src={configs.common.mainPicture}
                            alt="Arun Subramani"
                            w="100%"
                            h="auto"
                            objectFit="cover"
                        />
                    </picture>
                </Box>

                {/* Editorial Bio */}
                <Stack flex={{ base: "1", md: "0.65" }} spacing="4">
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color={BrandPalette.charcoal}
                        lineHeight="1.75"
                    >
                        Hi, I'm Arun Subramani, a Computer Engineering student from Tamil Nadu, India, interested in the intersection of product management, analytics, design, and technology.
                    </Text>

                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color={BrandPalette.secondaryText}
                        lineHeight="1.7"
                    >
                        I enjoy exploring how digital products solve real problems, how users interact with interfaces, and how data can help inform better product decisions.
                    </Text>

                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color={BrandPalette.secondaryText}
                        lineHeight="1.7"
                    >
                        My experience spans web development, e-commerce platforms, analytics-oriented applications, and engineering projects. These experiences have helped me appreciate both the technical side of building products and the importance of making them useful and accessible to people.
                    </Text>

                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color={BrandPalette.secondaryText}
                        lineHeight="1.7"
                    >
                        I'm continuing to develop my skills in product thinking, product analytics, and UI/UX design, with the goal of contributing to products that balance user needs, business objectives, and technical feasibility.
                    </Text>

                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color={BrandPalette.secondaryText}
                        lineHeight="1.7"
                        fontStyle="italic"
                    >
                        Outside technology, I enjoy badminton, swimming, and cooking. I'm always open to exchanging ideas, exploring new products, and learning from others.
                    </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

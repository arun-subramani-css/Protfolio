import { FC } from "react";
import { Box, Flex, Heading, Image, Text, Button, Link } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { BrandPalette } from "theme/colors/Colors";
import { GitHubIcon } from "utils/Icons";

interface Props {
    id: string;
    title: string;
    github?: string;
    tags: string[];
    description: string;
    image: string;
    jpg?: string;
}

export const OtherProjectCard: FC<Props> = ({
    id,
    title,
    github,
    tags,
    description,
    image,
}) => {
    return (
        <Box
            id={`engineering-${id}`}
            bg={BrandPalette.cardBg}
            border={`1px solid ${BrandPalette.cardBorder}`}
            borderRadius="xl"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="all 0.2s ease"
            _hover={{
                borderColor: BrandPalette.mutedTeal,
                transform: "translateY(-2px)",
                boxShadow: "0 4px 16px rgba(36, 37, 34, 0.04)",
            }}
        >
            <Box>
                {/* Thumbnail Header */}
                <Box
                    h="160px"
                    w="100%"
                    bg={BrandPalette.stoneNeutral}
                    overflow="hidden"
                    borderBottom={`1px solid ${BrandPalette.stoneBorder}`}
                >
                    <Image
                        src={image}
                        alt={`${title} Preview`}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        loading="lazy"
                    />
                </Box>

                {/* Body Content */}
                <Box p={{ base: 5, md: 6 }}>
                    <Heading
                        as="h4"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="700"
                        color={BrandPalette.charcoal}
                        mb="2"
                        lineHeight="1.3"
                    >
                        {title}
                    </Heading>

                    <Text
                        fontSize="xs"
                        color={BrandPalette.secondaryText}
                        lineHeight="1.6"
                        mb="4"
                    >
                        {description}
                    </Text>

                    <Box mb="2">
                        <Tags id={id} tags={tags} variant="tech" size="2xs" />
                    </Box>
                </Box>
            </Box>

            {/* Footer with GitHub link */}
            {github && (
                <Box
                    px={{ base: 5, md: 6 }}
                    pb={{ base: 5, md: 6 }}
                    pt="2"
                    borderTop={`1px solid ${BrandPalette.stoneBorder}`}
                >
                    <Flex justifyContent="flex-end">
                        <Button
                            as={Link}
                            href={github}
                            isExternal
                            size="xs"
                            variant="secondary"
                            leftIcon={<GitHubIcon />}
                            _hover={{ textDecoration: "none" }}
                        >
                            View Repository
                        </Button>
                    </Flex>
                </Box>
            )}
        </Box>
    );
};

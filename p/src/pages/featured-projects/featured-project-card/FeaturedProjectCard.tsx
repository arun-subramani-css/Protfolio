import { FC } from "react";
import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Button,
    HStack,
    Link,
} from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { BrandPalette } from "theme/colors/Colors";
import { GitHubIcon } from "utils/Icons";
import { ProjectItem } from "../case-study/ProjectCaseStudyModal";

export enum ImagePosition {
    Right,
    Left,
}

interface Props extends ProjectItem {
    imagePosition: ImagePosition;
    onOpenCaseStudy: (project: ProjectItem) => void;
}

export const FeaturedProjectCard: FC<Props> = (props) => {
    const {
        id,
        title,
        subtitle,
        description,
        categories,
        tags,
        productPerspective,
        github,
        demo,
        image,
        imagePosition,
        onOpenCaseStudy,
    } = props;

    const isImageRight = imagePosition === ImagePosition.Right;

    return (
        <Box
            id={`project-${id}`}
            bg={BrandPalette.cardBg}
            border={`1px solid ${BrandPalette.cardBorder}`}
            borderRadius="xl"
            p={{ base: 5, md: 8 }}
            mb={{ base: 8, md: 12 }}
            transition="all 0.25s ease"
            _hover={{
                borderColor: BrandPalette.mutedTeal,
                boxShadow: "0 6px 24px rgba(36, 37, 34, 0.05)",
            }}
        >
            <Flex
                direction={{
                    base: "column",
                    lg: isImageRight ? "row" : "row-reverse",
                }}
                alignItems="center"
                justifyContent="space-between"
                gap={{ base: 6, lg: 10 }}
            >
                {/* Text Content Column */}
                <Box flex={{ base: "1", lg: "0.55" }} w="100%">
                    {categories && categories.length > 0 && (
                        <Box mb="2">
                            <Tags id={`${id}-cats`} tags={categories} variant="category" size="xs" />
                        </Box>
                    )}

                    <Heading
                        as="h3"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        fontWeight="700"
                        letterSpacing="-0.02em"
                        color={BrandPalette.charcoal}
                        lineHeight="1.2"
                    >
                        {title}
                    </Heading>

                    {subtitle && (
                        <Text
                            fontSize="sm"
                            fontWeight="600"
                            color={BrandPalette.mutedTeal}
                            mt="1"
                            mb="3"
                        >
                            {subtitle}
                        </Text>
                    )}

                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color={BrandPalette.secondaryText}
                        lineHeight="1.65"
                        mb="4"
                    >
                        {description}
                    </Text>

                    {productPerspective && (
                        <Box
                            mb="4"
                            p="3"
                            bg={BrandPalette.softSage}
                            borderLeft={`3px solid ${BrandPalette.mutedTeal}`}
                            borderRadius="sm"
                        >
                            <Text fontSize="xs" fontWeight="700" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="0.5">
                                Product Perspective
                            </Text>
                            <Text fontSize="xs" color={BrandPalette.charcoal} fontWeight="500" lineHeight="1.5">
                                {productPerspective}
                            </Text>
                        </Box>
                    )}

                    <Box mb="5">
                        <Tags id={`${id}-tags`} tags={tags.slice(0, 5)} variant="tech" size="xs" />
                    </Box>

                    {/* Action buttons */}
                    <HStack spacing="3" wrap="wrap">
                        <Button
                            size="sm"
                            variant="solid"
                            bg={BrandPalette.mutedTeal}
                            color="white"
                            px="5"
                            fontSize="xs"
                            fontWeight="600"
                            _hover={{ bg: BrandPalette.mutedTealHover }}
                            onClick={() => onOpenCaseStudy(props)}
                        >
                            View Case Study
                        </Button>

                        {demo && (
                            <Button
                                as={Link}
                                href={demo}
                                isExternal
                                size="sm"
                                variant="secondary"
                                fontSize="xs"
                                _hover={{ textDecoration: "none" }}
                            >
                                Interactive Deck ↗
                            </Button>
                        )}

                        {github && (
                            <Button
                                as={Link}
                                href={github}
                                isExternal
                                size="sm"
                                variant="secondary"
                                fontSize="xs"
                                leftIcon={<GitHubIcon />}
                                _hover={{ textDecoration: "none" }}
                            >
                                GitHub
                            </Button>
                        )}
                    </HStack>
                </Box>

                {/* Preview Image Column */}
                <Box
                    flex={{ base: "1", lg: "0.45" }}
                    w="100%"
                    borderRadius="lg"
                    overflow="hidden"
                    border={`1px solid ${BrandPalette.stoneBorder}`}
                    bg={BrandPalette.stoneNeutral}
                    cursor="pointer"
                    onClick={() => onOpenCaseStudy(props)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open case study for ${title}`}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            onOpenCaseStudy(props);
                        }
                    }}
                    transition="transform 0.25s ease, opacity 0.25s ease"
                    _hover={{
                        transform: "scale(1.015)",
                        opacity: 0.95,
                    }}
                >
                    <Image
                        src={image}
                        alt={`${title} Interface Preview`}
                        w="100%"
                        h={{ base: "210px", sm: "260px", lg: "280px" }}
                        objectFit="cover"
                        loading="lazy"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

import { FC } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Tags } from "shared/tags/Tags";
import { BrandPalette } from "theme/colors/Colors";

interface SkillCategory {
    category: string;
    items: string[];
}

export const Skills: FC = () => {
    const skillsList: SkillCategory[] = (configs.about.skills as unknown as SkillCategory[]) || [];

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
            {skillsList.map((skillGroup, idx) => {
                const isProductOrDesign =
                    skillGroup.category === "Product Thinking" ||
                    skillGroup.category === "UI/UX Design" ||
                    skillGroup.category === "Analytics & Data";

                return (
                    <Box
                        key={`skill-cat-${idx}`}
                        p={{ base: 5, md: 6 }}
                        bg={BrandPalette.cardBg}
                        border={`1px solid ${BrandPalette.cardBorder}`}
                        borderRadius="xl"
                        transition="all 0.2s ease"
                        _hover={{
                            borderColor: BrandPalette.mutedTeal,
                            boxShadow: "0 4px 16px rgba(36, 37, 34, 0.04)",
                        }}
                    >
                        <Heading
                            as="h4"
                            fontSize="sm"
                            fontWeight="700"
                            letterSpacing="0.04em"
                            textTransform="uppercase"
                            color={isProductOrDesign ? BrandPalette.mutedTeal : BrandPalette.charcoal}
                            mb="3"
                        >
                            {skillGroup.category}
                        </Heading>

                        <Tags
                            id={`skill-tag-${idx}`}
                            tags={skillGroup.items}
                            variant={isProductOrDesign ? "category" : "tech"}
                            size="xs"
                        />
                    </Box>
                );
            })}
        </SimpleGrid>
    );
};

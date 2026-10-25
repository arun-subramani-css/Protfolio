import { FC } from "react";
import { Box, Flex, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { BrandPalette } from "theme/colors/Colors";

export const Experience: FC = () => {
    return (
        <Stack spacing="6">
            {configs.about.experiences.map((exp, idx) => (
                <Box
                    key={`exp-${exp.id || idx}`}
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
                    <Flex
                        direction={{ base: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems={{ base: "flex-start", sm: "center" }}
                        gap="2"
                        mb="2"
                    >
                        <Heading
                            as="h4"
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="700"
                            color={BrandPalette.charcoal}
                        >
                            {exp.company}
                        </Heading>
                        <Badge
                            bg={BrandPalette.elevatedBg}
                            color={BrandPalette.secondaryText}
                            border={`1px solid ${BrandPalette.border}`}
                            px="2.5"
                            py="1"
                            borderRadius="md"
                            fontSize="2xs"
                            fontWeight="600"
                        >
                            {exp.duration}
                        </Badge>
                    </Flex>

                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color={BrandPalette.mutedTeal}
                        mb="3"
                    >
                        {exp.position}
                    </Text>

                    <Stack spacing="2">
                        {exp.description.map((desc: string, descIdx: number) => (
                            <Text
                                key={descIdx}
                                fontSize="sm"
                                color={BrandPalette.secondaryText}
                                lineHeight="1.6"
                            >
                                {desc}
                            </Text>
                        ))}
                    </Stack>
                </Box>
            ))}
        </Stack>
    );
};

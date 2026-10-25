import { FC } from "react";
import { Box, Flex, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { BrandPalette } from "theme/colors/Colors";

export const Education: FC = () => {
    return (
        <Stack spacing="6">
            {configs.about.educations.map((edu, idx) => (
                <Box
                    key={`edu-${edu.id || idx}`}
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
                            {edu.school}
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
                            {edu.duration}
                        </Badge>
                    </Flex>

                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color={BrandPalette.mutedTeal}
                        mb="2"
                    >
                        {edu.degree}
                    </Text>

                    {edu.content && edu.content.length > 0 && (
                        <Text fontSize="xs" fontWeight="600" color={BrandPalette.secondaryText}>
                            {edu.content.join(" · ")}
                        </Text>
                    )}
                </Box>
            ))}
        </Stack>
    );
};

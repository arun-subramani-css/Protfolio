import { FC } from "react";
import { Box, Container, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";
import { PageHeader } from "shared/page-header/PageHeader";

const approachSteps = [
    {
        number: "01",
        title: "Understand the Problem",
        description:
            "Identify the intended user, their needs, and the context behind the problem before committing to features or UI solutions.",
        deliverable: "User Scenarios · Problem Framing · Context Discovery",
    },
    {
        number: "02",
        title: "Explore the Solution",
        description:
            "Break down requirements, map user journeys, and evaluate potential solutions against feasibility and user impact.",
        deliverable: "Requirement Breakdown · Journey Mapping · Trade-off Evaluation",
    },
    {
        number: "03",
        title: "Design the Experience",
        description:
            "Use wireframes, interface design, and prototypes to structure intuitive experiences and frictionless workflows.",
        deliverable: "Information Architecture · Wireframes · Interactive Prototypes",
    },
    {
        number: "04",
        title: "Build and Iterate",
        description:
            "Translate ideas into working solutions and identify opportunities for improvement using available feedback and evidence.",
        deliverable: "Component Implementation · Edge Case Handling · Feedback Review",
    },
];

export const ProductApproach: FC = () => {
    return (
        <Box id="product-approach" py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl" p="0">
                <PageHeader
                    eyebrow="Methodology"
                    title="How I Approach Products"
                    description="I approach product problems by combining user understanding, thoughtful design, technical feasibility, and evidence-informed iteration."
                />

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, lg: 6 }} mt="6">
                    {approachSteps.map((step) => (
                        <Box
                            key={step.number}
                            bg={BrandPalette.cardBg}
                            border={`1px solid ${BrandPalette.cardBorder}`}
                            borderRadius="xl"
                            p={{ base: 6, md: 7 }}
                            transition="all 0.2s ease"
                            _hover={{
                                borderColor: BrandPalette.mutedTeal,
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 16px rgba(36, 37, 34, 0.04)",
                            }}
                        >
                            <Flex justifyContent="space-between" alignItems="center" mb="4">
                                <Text
                                    fontSize="xs"
                                    fontWeight="700"
                                    letterSpacing="0.1em"
                                    color={BrandPalette.mutedTeal}
                                >
                                    STEP {step.number}
                                </Text>
                                <Box
                                    w="8px"
                                    h="8px"
                                    borderRadius="full"
                                    bg="rgba(59, 130, 246, 0.2)"
                                    border={`2px solid ${BrandPalette.accentBlue}`}
                                />
                            </Flex>

                            <Heading
                                as="h3"
                                fontSize="lg"
                                fontWeight="700"
                                color={BrandPalette.charcoal}
                                mb="3"
                                lineHeight="1.3"
                            >
                                {step.title}
                            </Heading>

                            <Text
                                fontSize="sm"
                                color={BrandPalette.secondaryText}
                                lineHeight="1.65"
                                mb="6"
                            >
                                {step.description}
                            </Text>

                            <Box pt="4" borderTop={`1px solid ${BrandPalette.stoneBorder}`}>
                                <Text
                                    fontSize="2xs"
                                    fontWeight="700"
                                    letterSpacing="0.08em"
                                    textTransform="uppercase"
                                    color={BrandPalette.mutedText}
                                    mb="1"
                                >
                                    Focus Areas
                                </Text>
                                <Text fontSize="xs" fontWeight="600" color={BrandPalette.charcoal}>
                                    {step.deliverable}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

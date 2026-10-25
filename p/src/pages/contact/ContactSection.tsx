import { FC } from "react";
import { Box, Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { BrandPalette } from "theme/colors/Colors";
import { PageHeader } from "shared/page-header/PageHeader";
import { GitHubIcon, LinkedInIcon, MailIcon } from "utils/Icons";
import { onResumeOpen } from "utils/Functions";

export const ContactSection: FC = () => {
    return (
        <Box id="contact" py={{ base: 12, md: 20 }}>
            <PageHeader
                eyebrow="Get In Touch"
                title="Have a Product Idea in Mind?"
                description="I'm always interested in connecting with people who enjoy building products, solving problems, and creating thoughtful digital experiences."
            />

            <Box
                bg={BrandPalette.cardBg}
                border={`1px solid ${BrandPalette.cardBorder}`}
                borderRadius="2xl"
                p={{ base: 6, md: 10 }}
                boxShadow="0 4px 24px rgba(36, 37, 34, 0.04)"
            >
                <Stack spacing="6" maxW="700px">
                    <Text fontSize={{ base: "md", md: "lg" }} color={BrandPalette.secondaryText} lineHeight="1.7">
                        Whether you're hiring for an Associate Product Manager, Product Analytics, or UI/UX role, exploring a project collaboration, or simply want to exchange ideas, I'd be happy to connect.
                    </Text>

                    {/* Prominent Direct Email */}
                    <Box
                        p={{ base: 4, md: 5 }}
                        bg={BrandPalette.elevatedBg}
                        border={`1px solid ${BrandPalette.border}`}
                        borderRadius="xl"
                    >
                        <Text
                            fontSize="xs"
                            fontWeight="700"
                            letterSpacing="0.08em"
                            textTransform="uppercase"
                            color={BrandPalette.mutedText}
                            mb="1"
                        >
                            Email Directly
                        </Text>
                        <Link
                            href={`mailto:${configs.common.email}`}
                            fontSize={{ base: "lg", md: "2xl" }}
                            fontWeight="700"
                            color={BrandPalette.accentBlue}
                            _hover={{ textDecoration: "underline", color: BrandPalette.accentBlueHover }}
                        >
                            {configs.common.email}
                        </Link>
                    </Box>

                    {/* Action buttons */}
                    <HStack spacing="4" wrap="wrap" pt="2">
                        <Button
                            as={Link}
                            href={`mailto:${configs.common.email}`}
                            size="md"
                            variant="solid"
                            bg={BrandPalette.primaryText}
                            color={BrandPalette.mainBg}
                            leftIcon={<MailIcon />}
                            _hover={{ bg: BrandPalette.white, textDecoration: "none" }}
                        >
                            Send Email
                        </Button>

                        <Button
                            as={Link}
                            href={configs.common.linkedin}
                            isExternal
                            size="md"
                            variant="secondary"
                            leftIcon={<LinkedInIcon />}
                            _hover={{ textDecoration: "none" }}
                        >
                            LinkedIn
                        </Button>

                        <Button
                            as={Link}
                            href={configs.common.github}
                            isExternal
                            size="md"
                            variant="secondary"
                            leftIcon={<GitHubIcon />}
                            _hover={{ textDecoration: "none" }}
                        >
                            GitHub
                        </Button>

                        <Button
                            size="md"
                            variant="outline"
                            borderColor={BrandPalette.stoneBorder}
                            onClick={onResumeOpen}
                        >
                            View Resume
                        </Button>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
};

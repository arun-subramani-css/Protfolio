import { FC } from "react";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    Badge,
    Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "utils/Icons";
import { WorkPageId, ContactPageId } from "utils/useScroll";
import { BrandPalette } from "theme/colors/Colors";
import { GlassmorphismProfileCard, Github, Linkedin, Mail } from "components/ui/profile-card-1";
import { configs } from "shared/content/Content";

export const Landing: FC = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing" pt={{ base: 6, md: 10, lg: 16 }} pb={{ base: 14, md: 20 }}>
            <Container maxW="container.xl" p="0">
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems={{ base: "flex-start", lg: "center" }}
                    justifyContent="space-between"
                    gap={{ base: 10, lg: 14 }}
                >
                    {/* Left Column: Typography & Intent */}
                    <Stack spacing="6" maxW={{ base: "100%", lg: "620px" }}>
                        {/* Descriptor Tag */}
                        <Box>
                            <Badge
                                bg={BrandPalette.elevatedBg}
                                color={BrandPalette.lightGray}
                                border={`1px solid ${BrandPalette.border}`}
                                px="3"
                                py="1"
                                borderRadius="md"
                                fontSize="xs"
                                fontWeight="600"
                                letterSpacing="0.06em"
                                textTransform="uppercase"
                            >
                                Product Management · Product Analytics · UI/UX Design
                            </Badge>
                        </Box>

                        {/* Editorial Headline */}
                        <Heading
                            as="h1"
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "58px" }}
                            fontWeight="700"
                            letterSpacing="-0.03em"
                            lineHeight="1.1"
                            color={BrandPalette.charcoal}
                        >
                            I turn ideas into useful digital products.
                        </Heading>

                        {/* Supporting Copy */}
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            color={BrandPalette.secondaryText}
                            lineHeight="1.7"
                            maxW="560px"
                        >
                            I'm a Computer Engineering student interested in the intersection of
                            product thinking, analytics, and user-centred design. I enjoy
                            understanding user problems, designing intuitive experiences, and
                            turning ideas into practical technology solutions.
                        </Text>

                        {/* Action Buttons */}
                        <HStack spacing="4" pt="2" wrap="wrap">
                            <Button
                                size="lg"
                                variant="solid"
                                bg={BrandPalette.primaryText}
                                color={BrandPalette.mainBg}
                                px="6"
                                fontSize="sm"
                                fontWeight="600"
                                _hover={{ bg: BrandPalette.white, transform: "translateY(-1px)" }}
                                onClick={() => scrollTo(WorkPageId)}
                            >
                                Explore My Work
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                bg={BrandPalette.elevatedBg}
                                color={BrandPalette.primaryText}
                                border={`1px solid ${BrandPalette.border}`}
                                px="6"
                                fontSize="sm"
                                fontWeight="600"
                                _hover={{ bg: BrandPalette.darkGray, borderColor: BrandPalette.mediumGray, transform: "translateY(-1px)" }}
                                onClick={() => scrollTo(ContactPageId)}
                            >
                                Get in Touch
                            </Button>
                        </HStack>
                    </Stack>

                    {/* Right Column: Glassmorphism Profile Card */}
                    <Box
                        flex="1"
                        w="100%"
                        display="flex"
                        justifyContent={{ base: "center", lg: "flex-end" }}
                        alignItems="center"
                        py={{ base: 4, lg: 0 }}
                    >
                        <GlassmorphismProfileCard
                            avatarUrl={configs.common.mainPicture}
                            name={configs.common.name}
                            bio="Turning ideas into useful digital products. Passionate about product thinking, product analytics, and user-centred design."
                            socialLinks={[
                                { id: "github", icon: Github, label: "GitHub", href: configs.common.github, isExternal: true },
                                { id: "linkedin", icon: Linkedin, label: "LinkedIn", href: configs.common.linkedin, isExternal: true },
                                { id: "mail", icon: Mail, label: "Email", href: `mailto:${configs.common.email}`, isExternal: false },
                            ]}
                        />
                    </Box>
                </Flex>

                {/* Subtle Scroll Cue */}
                <Flex justifyContent="center" pt={{ base: 8, md: 12 }}>
                    <Button
                        variant="ghost"
                        size="sm"
                        fontSize="xs"
                        fontWeight="500"
                        color={BrandPalette.mutedText}
                        _hover={{ color: BrandPalette.accentBlue, bg: "transparent" }}
                        onClick={() => scrollTo(WorkPageId)}
                        rightIcon={<Icon as={ChevronDownIcon} />}
                    >
                        Scroll to explore
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

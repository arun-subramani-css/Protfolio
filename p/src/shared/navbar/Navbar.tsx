import { FC, useEffect, useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import {
    LandingPageId,
    useScroll,
} from "utils/useScroll";
import { MenuDrawer } from "./drawer/Drawer";
import { BrandPalette } from "theme/colors/Colors";
import GradientMenu from "components/ui/gradient-menu";

export const Navbar: FC = () => {
    const currentPage = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toSection = (section: string) => {
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            as="header"
            position="fixed"
            top="0"
            left="0"
            right="0"
            w="100%"
            zIndex="100"
            bg={scrolled ? "rgba(11, 11, 11, 0.90)" : "rgba(11, 11, 11, 0.75)"}
            backdropFilter="blur(12px)"
            borderBottom={`1px solid ${scrolled ? BrandPalette.border : "rgba(43, 43, 43, 0.4)"}`}
            transition="all 0.2s ease"
            py={scrolled ? 2 : 3}
        >
            <Container maxW="container.xl" px={{ base: 5, md: 8, lg: 12 }}>
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType
                        text={configs.common.logoType}
                        onClick={() => toSection(LandingPageId)}
                    />

                    {/* Compact Integrated Gradient Menu for Desktop & Tablet Navigation */}
                    <Box display={{ base: "none", md: "block" }}>
                        <GradientMenu activeId={currentPage} mode="portfolio" />
                    </Box>

                    {/* Mobile Navigation Drawer */}
                    <MenuDrawer
                        currentPage={currentPage}
                        onSectionClick={toSection}
                        display={{ base: "block", md: "none" }}
                    />
                </Flex>
            </Container>
        </Box>
    );
};

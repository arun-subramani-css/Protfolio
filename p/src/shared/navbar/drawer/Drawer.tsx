import { FC, useRef } from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    StyleProps,
    Flex,
    VStack,
    Text,
} from "@chakra-ui/react";

import {
    LandingPageId,
    WorkPageId,
    ApproachPageId,
    ExperiencePageId,
    AboutPageId,
    ContactPageId,
} from "utils/useScroll";
import { MenuIcon } from "utils/Icons";
import { onResumeOpen } from "utils/Functions";
import { configs } from "shared/content/Content";
import { BrandPalette } from "theme/colors/Colors";

interface Props extends StyleProps {
    onSectionClick: (section: string) => void;
    currentPage: string;
}

const navItems = [
    { id: LandingPageId, label: "Home" },
    { id: WorkPageId, label: "Work" },
    { id: ApproachPageId, label: "Product & Design" },
    { id: ExperiencePageId, label: "Experience" },
    { id: AboutPageId, label: "About" },
    { id: ContactPageId, label: "Contact" },
];

export const MenuDrawer: FC<Props> = ({ onSectionClick, currentPage, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);

    const handleNav = (id: string) => {
        onClose();
        setTimeout(() => {
            onSectionClick(id);
        }, 200);
    };

    return (
        <Box {...props}>
            <IconButton
                ref={btnRef}
                onClick={isOpen ? onClose : onOpen}
                aria-label="Open navigation menu"
                variant="ghost"
                color={BrandPalette.charcoal}
                icon={<MenuIcon />}
                fontSize="xl"
                size="md"
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
                <DrawerContent bg={BrandPalette.mainBg} color={BrandPalette.primaryText} p="6" borderLeft={`1px solid ${BrandPalette.border}`}>
                    <DrawerHeader p="0" mb="8" borderBottom={`1px solid ${BrandPalette.border}`} pb="4">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Text
                                fontSize="xs"
                                fontWeight="700"
                                letterSpacing="0.14em"
                                textTransform="uppercase"
                                color={BrandPalette.accentBlue}
                            >
                                Navigation
                            </Text>
                            <DrawerCloseButton position="relative" top="0" right="0" />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody p="0">
                        <VStack spacing="5" align="flex-start" my="4">
                            {navItems.map((item) => {
                                const isActive = currentPage === item.id;
                                return (
                                    <Button
                                        key={item.id}
                                        variant="ghost"
                                        w="100%"
                                        justifyContent="flex-start"
                                        fontSize="lg"
                                        fontWeight={isActive ? "700" : "500"}
                                        color={isActive ? BrandPalette.accentBlue : BrandPalette.primaryText}
                                        bg={isActive ? "rgba(59, 130, 246, 0.12)" : "transparent"}
                                        _hover={{ bg: BrandPalette.elevatedBg }}
                                        onClick={() => handleNav(item.id)}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </VStack>

                        <Box mt="8" pt="6" borderTop={`1px solid ${BrandPalette.border}`}>
                            <Button
                                w="100%"
                                variant="solid"
                                bg={BrandPalette.primaryText}
                                color={BrandPalette.mainBg}
                                _hover={{ bg: BrandPalette.white }}
                                isDisabled={!configs.common.resume}
                                onClick={() => {
                                    if (configs.common.resume) {
                                        onClose();
                                        onResumeOpen();
                                    }
                                }}
                            >
                                View Resume
                            </Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

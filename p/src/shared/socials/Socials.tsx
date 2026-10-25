import { FC } from "react";
import { HStack, IconButton, Tooltip, Link } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "utils/Icons";
import { BrandPalette } from "theme/colors/Colors";

const LinksToIconMapper: Record<string, JSX.Element> = {
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    mail: <MailIcon />,
};

interface Props {
    exclude?: Array<string>;
    size?: "sm" | "md" | "lg";
}

export const Socials: FC<Props> = ({ exclude, size = "md" }) => {
    return (
        <HStack spacing="3">
            {configs.common.socials.map((social) => {
                if (exclude?.includes(social.type)) return null;

                const icon = LinksToIconMapper[social.type];
                if (!icon) return null;

                const label =
                    social.type === "mail"
                        ? "Email Arun Subramani"
                        : social.type === "linkedin"
                        ? "LinkedIn Profile"
                        : "GitHub Profile";

                return (
                    <Tooltip
                        key={social.type}
                        label={label}
                        hasArrow
                        bg={BrandPalette.elevatedBg}
                        color={BrandPalette.primaryText}
                        fontSize="xs"
                        border={`1px solid ${BrandPalette.border}`}
                    >
                        <IconButton
                            as={Link}
                            href={social.link}
                            isExternal
                            aria-label={label}
                            variant="secondary"
                            size={size}
                            borderRadius="md"
                            icon={icon}
                            fontSize={size === "lg" ? "xl" : "md"}
                            _hover={{
                                bg: BrandPalette.darkGray,
                                color: BrandPalette.accentBlue,
                                borderColor: BrandPalette.mediumGray,
                                textDecoration: "none",
                            }}
                        />
                    </Tooltip>
                );
            })}
        </HStack>
    );
};

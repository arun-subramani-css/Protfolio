import { FC } from "react";
import { Flex, Badge } from "@chakra-ui/react";
import { BrandPalette } from "theme/colors/Colors";

interface Props {
    id: string;
    tags: Array<string>;
    variant?: "category" | "tech";
    size?: string;
}

export const Tags: FC<Props> = ({ id, tags, variant = "tech", size = "xs" }) => {
    return (
        <Flex py="1.5" wrap="wrap" gap="2">
            {tags.map((tag) => (
                <Badge
                    key={`${id}-tag-${tag}`}
                    textTransform="none"
                    bg={BrandPalette.elevatedBg}
                    color={BrandPalette.lightGray}
                    border={`1px solid ${BrandPalette.border}`}
                    borderRadius="md"
                    px="2.5"
                    py="1"
                    fontSize={size}
                    fontWeight={variant === "category" ? "600" : "500"}
                    letterSpacing="0.01em"
                    lineHeight="shorter"
                    transition="all 0.15s ease"
                    _hover={{
                        bg: BrandPalette.darkGray,
                        borderColor: BrandPalette.mediumGray,
                        color: BrandPalette.primaryText,
                    }}
                >
                    {tag}
                </Badge>
            ))}
        </Flex>
    );
};

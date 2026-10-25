import { FC } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { OtherProjectCard } from "pages/other-projects/other-project-card/OtherProjectCard";

export const OtherProjects: FC = () => {
    return (
        <Box id="other-engineering-projects" pt="2">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, lg: 8 }}>
                {configs.otherProjects.map((project) => (
                    <OtherProjectCard key={project.id} {...project} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

import { FC, useState } from "react";
import { Box } from "@chakra-ui/react";

import {
    FeaturedProjectCard,
    ImagePosition,
} from "pages/featured-projects/featured-project-card/FeaturedProjectCard";
import {
    ProjectCaseStudyModal,
    ProjectItem,
} from "./case-study/ProjectCaseStudyModal";
import { configs } from "shared/content/Content";

export const FeaturedProjects: FC = () => {
    const projects: ProjectItem[] = configs.featuredProjects as unknown as ProjectItem[];
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenCaseStudy = (project: ProjectItem) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseCaseStudy = () => {
        setIsModalOpen(false);
    };

    return (
        <Box id="featured-projects">
            {projects.map((project, idx) => (
                <FeaturedProjectCard
                    key={project.id}
                    {...project}
                    imagePosition={idx % 2 === 0 ? ImagePosition.Right : ImagePosition.Left}
                    onOpenCaseStudy={handleOpenCaseStudy}
                />
            ))}

            <ProjectCaseStudyModal
                isOpen={isModalOpen}
                onClose={handleCloseCaseStudy}
                project={selectedProject}
                allProjects={projects}
                onSelectProject={(proj) => setSelectedProject(proj)}
            />
        </Box>
    );
};

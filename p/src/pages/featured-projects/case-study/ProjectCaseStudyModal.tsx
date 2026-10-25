import { FC } from "react";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Stack,
    Text,
    Badge,
    Link,
} from "@chakra-ui/react";
import { CloseIcon, GitHubIcon } from "utils/Icons";
import { BrandPalette } from "theme/colors/Colors";
import { Tags } from "shared/tags/Tags";
// import KanbanBoard from "components/ui/kanban-board";
// import { getProjectKanbanData } from "./projectKanbanData";

export interface CaseStudyData {
    overview?: string;
    problem?: string;
    intendedUsers?: Array<{ role: string; needs: string }>;
    workflows?: Array<{ stage: string; detail: string }>;
    requirements?: Array<string>;
    designDecisions?: Array<string>;
    businessModel?: string;
    implementation?: string;
    currentStatus?: string;
    nextSteps?: Array<string>;
}

export interface ProjectItem {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    categories?: string[];
    tags: string[];
    productPerspective?: string;
    github?: string;
    demo?: string;
    image: string;
    jpg?: string;
    caseStudy?: CaseStudyData;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectItem | null;
    allProjects: ProjectItem[];
    onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCaseStudyModal: FC<Props> = ({
    isOpen,
    onClose,
    project,
    allProjects,
    onSelectProject,
}) => {
    // const projectId = project?.id;
    // const kanbanColumns = useMemo(
    //     () => (projectId ? getProjectKanbanData(projectId) : []),
    //     [projectId],
    // );

    if (!project) return null;

    const currentIndex = allProjects.findIndex((p) => p.id === project.id);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
    const cs = project.caseStudy;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            scrollBehavior="inside"
            motionPreset="slideInBottom"
        >
            <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(6px)" />
            <ModalContent bg={BrandPalette.mainBg} color={BrandPalette.primaryText} m="0" borderRadius="0">
                {/* Header Toolbar */}
                <ModalHeader
                    position="sticky"
                    top="0"
                    zIndex="20"
                    bg="rgba(11, 11, 11, 0.95)"
                    backdropFilter="blur(10px)"
                    borderBottom={`1px solid ${BrandPalette.border}`}
                    py="4"
                    px={{ base: 4, md: 8 }}
                >
                    <Container maxW="container.lg" p="0">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Button
                                size="sm"
                                variant="outline"
                                borderColor={BrandPalette.border}
                                onClick={onClose}
                                fontSize="xs"
                                fontWeight="600"
                                _hover={{ bg: BrandPalette.elevatedBg, borderColor: BrandPalette.mediumGray }}
                            >
                                ← Back to Selected Work
                            </Button>

                            <HStack spacing="2">
                                {project.demo && (
                                    <Button
                                        as={Link}
                                        href={project.demo}
                                        isExternal
                                        size="sm"
                                        variant="solid"
                                        bg={BrandPalette.mutedTeal}
                                        color="white"
                                        fontSize="xs"
                                        _hover={{ bg: BrandPalette.mutedTealHover, textDecoration: "none" }}
                                    >
                                        Interactive Presentation ↗
                                    </Button>
                                )}
                                {project.github && (
                                    <Button
                                        as={Link}
                                        href={project.github}
                                        isExternal
                                        size="sm"
                                        variant="secondary"
                                        leftIcon={<GitHubIcon />}
                                        fontSize="xs"
                                        _hover={{ textDecoration: "none" }}
                                    >
                                        GitHub Repository
                                    </Button>
                                )}
                                <IconButton
                                    aria-label="Close Case Study"
                                    icon={<CloseIcon />}
                                    size="sm"
                                    variant="ghost"
                                    onClick={onClose}
                                />
                            </HStack>
                        </Flex>
                    </Container>
                </ModalHeader>

                {/* Case Study Content */}
                <ModalBody py={{ base: 8, md: 14 }} px={{ base: 4, md: 8 }}>
                    <Container maxW="container.lg" p="0">
                        <Stack spacing={{ base: 8, md: 12 }}>
                            {/* Title & Metadata */}
                            <Box borderBottom={`1px solid ${BrandPalette.stoneBorder}`} pb="8">
                                {project.categories && (
                                    <Tags id={`${project.id}-modal-cat`} tags={project.categories} variant="category" size="xs" />
                                )}

                                <Heading
                                    as="h1"
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    fontWeight="700"
                                    letterSpacing="-0.03em"
                                    lineHeight="1.1"
                                    color={BrandPalette.charcoal}
                                    mt="3"
                                >
                                    {project.title}
                                </Heading>

                                {project.subtitle && (
                                    <Text
                                        fontSize={{ base: "lg", md: "xl" }}
                                        color={BrandPalette.mutedTeal}
                                        fontWeight="500"
                                        mt="2"
                                    >
                                        {project.subtitle}
                                    </Text>
                                )}

                                <Text
                                    fontSize={{ base: "md", md: "lg" }}
                                    color={BrandPalette.secondaryText}
                                    lineHeight="1.7"
                                    mt="4"
                                    maxW="780px"
                                >
                                    {project.description}
                                </Text>

                                {project.productPerspective && (
                                    <Box
                                        mt="5"
                                        p="4"
                                        bg={BrandPalette.softSage}
                                        borderLeft={`4px solid ${BrandPalette.mutedTeal}`}
                                        borderRadius="sm"
                                    >
                                        <Text fontSize="xs" fontWeight="700" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="1">
                                            Product Perspective
                                        </Text>
                                        <Text fontSize="sm" color={BrandPalette.charcoal} fontWeight="500">
                                            {project.productPerspective}
                                        </Text>
                                    </Box>
                                )}

                                <Box mt="4">
                                    <Tags id={`${project.id}-modal-tags`} tags={project.tags} variant="tech" size="xs" />
                                </Box>
                            </Box>

                            {/* Main Preview Visual */}
                            <Box
                                borderRadius="xl"
                                overflow="hidden"
                                border={`1px solid ${BrandPalette.stoneBorder}`}
                                bg={BrandPalette.stoneNeutral}
                            >
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Preview`}
                                    w="100%"
                                    maxH="480px"
                                    objectFit="cover"
                                />
                            </Box>

                            {/* Section 1: Overview */}
                            {cs?.overview && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        01 · Project Overview
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="3">
                                        Context & Objectives
                                    </Heading>
                                    <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.7">
                                        {cs.overview}
                                    </Text>
                                </Box>
                            )}

                            {/* Section 2: Problem & Context */}
                            {cs?.problem && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        02 · The Problem
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="3">
                                        User Friction & Operational Challenges
                                    </Heading>
                                    <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.7">
                                        {cs.problem}
                                    </Text>
                                </Box>
                            )}

                            {/* Section 3: Intended Users */}
                            {cs?.intendedUsers && cs.intendedUsers.length > 0 && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        03 · Intended Users
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="4">
                                        Stakeholders & Core Needs
                                    </Heading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
                                        {cs.intendedUsers.map((user, idx) => (
                                            <Box
                                                key={idx}
                                                p="5"
                                                bg={BrandPalette.cardBg}
                                                border={`1px solid ${BrandPalette.stoneBorder}`}
                                                borderRadius="lg"
                                            >
                                                <Badge bg={BrandPalette.softSage} color={BrandPalette.mutedTeal} mb="2" px="2.5" py="1">
                                                    {user.role}
                                                </Badge>
                                                <Text fontSize="sm" color={BrandPalette.secondaryText} lineHeight="1.6">
                                                    {user.needs}
                                                </Text>
                                            </Box>
                                        ))}
                                    </SimpleGrid>
                                </Box>
                            )}

                            {/* Section 4: User Journeys & Workflows */}
                            {cs?.workflows && cs.workflows.length > 0 && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        04 · User Journey & Workflows
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="4">
                                        Step-by-Step Experience Mapping
                                    </Heading>
                                    <Stack spacing="4">
                                        {cs.workflows.map((wf, idx) => (
                                            <Flex
                                                key={idx}
                                                p="5"
                                                bg={BrandPalette.cardBg}
                                                border={`1px solid ${BrandPalette.stoneBorder}`}
                                                borderRadius="lg"
                                                gap="4"
                                                alignItems="flex-start"
                                            >
                                                <Box
                                                    minW="32px"
                                                    h="32px"
                                                    borderRadius="full"
                                                    bg={BrandPalette.mutedTeal}
                                                    color="white"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    fontSize="xs"
                                                    fontWeight="700"
                                                >
                                                    {idx + 1}
                                                </Box>
                                                <Box flex="1">
                                                    <Text fontWeight="700" fontSize="md" color={BrandPalette.charcoal} mb="1">
                                                        {wf.stage}
                                                    </Text>
                                                    <Text fontSize="sm" color={BrandPalette.secondaryText} lineHeight="1.6">
                                                        {wf.detail}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        ))}
                                    </Stack>
                                </Box>
                            )}

                            {/* Section 5: Requirements & Constraints */}
                            {cs?.requirements && cs.requirements.length > 0 && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        05 · Product Requirements
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="4">
                                        Functional Constraints & Guardrails
                                    </Heading>
                                    <Stack spacing="2.5">
                                        {cs.requirements.map((req, idx) => (
                                            <Flex key={idx} alignItems="flex-start" gap="3">
                                                <Text color={BrandPalette.mutedTeal} fontWeight="700">‣</Text>
                                                <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.6">
                                                    {req}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Stack>
                                </Box>
                            )}

                            {/* Section 6: Design Decisions */}
                            {cs?.designDecisions && cs.designDecisions.length > 0 && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        06 · UI/UX Design Decisions
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="4">
                                        Interface Architecture & Usability
                                    </Heading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
                                        {cs.designDecisions.map((dec, idx) => (
                                            <Box
                                                key={idx}
                                                p="5"
                                                bg={BrandPalette.cardBg}
                                                border={`1px solid ${BrandPalette.stoneBorder}`}
                                                borderRadius="lg"
                                            >
                                                <Text fontSize="sm" color={BrandPalette.secondaryText} lineHeight="1.6">
                                                    {dec}
                                                </Text>
                                            </Box>
                                        ))}
                                    </SimpleGrid>

                                    {project.demo && (
                                        <Box
                                            mt="6"
                                            p={{ base: 5, md: 6 }}
                                            bg={BrandPalette.cardBg}
                                            border={`1px solid ${BrandPalette.stoneBorder}`}
                                            borderRadius="xl"
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            flexDirection={{ base: "column", sm: "row" }}
                                            gap="4"
                                        >
                                            <Box>
                                                <Text fontWeight="700" fontSize="md" color={BrandPalette.charcoal} mb="1">
                                                    Interactive Before & After Design Deck
                                                </Text>
                                                <Text fontSize="xs" color={BrandPalette.secondaryText}>
                                                    Explore interactive screen toggles, live comparison sliders, component tokens, and complete audit boards.
                                                </Text>
                                            </Box>
                                            <Button
                                                as={Link}
                                                href={project.demo}
                                                isExternal
                                                size="sm"
                                                variant="solid"
                                                bg={BrandPalette.mutedTeal}
                                                color="white"
                                                _hover={{ bg: BrandPalette.mutedTealHover, textDecoration: "none" }}
                                                minW="140px"
                                            >
                                                Open Deck ↗
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            )}

                            {/* Section 7: Business Model Exploration (where applicable) */}
                            {cs?.businessModel && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        07 · Business Model Exploration
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="3">
                                        Marketplace Economics & Sustainability
                                    </Heading>
                                    <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.7">
                                        {cs.businessModel}
                                    </Text>
                                </Box>
                            )}

                            {/* Section 8: Technical Implementation */}
                            {cs?.implementation && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        08 · Technical Implementation
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="3">
                                        System Architecture & Technologies
                                    </Heading>
                                    <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.7">
                                        {cs.implementation}
                                    </Text>
                                </Box>
                            )}

                            {/* Section 9: Current Status & Limitations */}
                            {cs?.currentStatus && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        09 · Current Status & Limitations
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="3">
                                        Honest Delivery Scope
                                    </Heading>
                                    <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.7">
                                        {cs.currentStatus}
                                    </Text>
                                </Box>
                            )}

                            {/* Section 10: Learnings & Potential Next Steps */}
                            {cs?.nextSteps && cs.nextSteps.length > 0 && (
                                <Box>
                                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                        10 · Next Steps & Success Metrics
                                    </Text>
                                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="4">
                                        Future Roadmap & Evaluation
                                    </Heading>
                                    <Stack spacing="2.5">
                                        {cs.nextSteps.map((step, idx) => (
                                            <Flex key={idx} alignItems="flex-start" gap="3">
                                                <Text color={BrandPalette.mutedTeal} fontWeight="700">✓</Text>
                                                <Text fontSize="md" color={BrandPalette.secondaryText} lineHeight="1.6">
                                                    {step}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Stack>
                                </Box>
                            )}

                            {/* Section 11: Live Roadmap & Updates (Interactive Kanban Board) - Commented out for now; to be built later */}
                            {/*
                            <Box>
                                <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color={BrandPalette.mutedTeal} mb="2">
                                    11 · Project Roadmap & Development Updates
                                </Text>
                                <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color={BrandPalette.charcoal} mb="2">
                                    Interactive Status Board
                                </Heading>
                                <Text fontSize="sm" color={BrandPalette.secondaryText} mb="5">
                                    Live product backlog, active development tasks, and verified milestones. Cards stay within their column — you can reorder inside a column, but tasks can't be swapped between stages.
                                </Text>
                                <Box
                                    className="dark"
                                    bg="#0A0B0D"
                                    borderRadius="20px"
                                    overflow="hidden"
                                >
                                    <KanbanBoard columns={kanbanColumns} lockColumns />
                                </Box>
                            </Box>
                            */}

                            {/* Case Study Footer / Navigation */}
                            <Box borderTop={`1px solid ${BrandPalette.border}`} pt="8" mt="4">
                                <Flex justifyContent="space-between" alignItems="center" wrap="wrap" gap="4">
                                    {prevProject ? (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            borderColor={BrandPalette.border}
                                            _hover={{ bg: BrandPalette.elevatedBg, borderColor: BrandPalette.mediumGray }}
                                            onClick={() => onSelectProject(prevProject)}
                                        >
                                            ← {prevProject.title}
                                        </Button>
                                    ) : (
                                        <Box />
                                    )}

                                    <Button
                                        variant="solid"
                                        bg={BrandPalette.primaryText}
                                        color={BrandPalette.mainBg}
                                        size="sm"
                                        _hover={{ bg: BrandPalette.white }}
                                        onClick={onClose}
                                    >
                                        Back to All Work
                                    </Button>

                                    {nextProject ? (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            borderColor={BrandPalette.border}
                                            _hover={{ bg: BrandPalette.elevatedBg, borderColor: BrandPalette.mediumGray }}
                                            onClick={() => onSelectProject(nextProject)}
                                        >
                                            {nextProject.title} →
                                        </Button>
                                    ) : (
                                        <Box />
                                    )}
                                </Flex>
                            </Box>
                        </Stack>
                    </Container>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

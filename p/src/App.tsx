import { FC, useEffect, lazy, Suspense } from "react";
import { Box, Container, Center, Spinner } from "@chakra-ui/react";
import AOS from "aos";

import { NavbarHeight } from "theme";
import {
    LandingPageId,
    WorkPageId,
    ApproachPageId,
    ExperiencePageId,
    AboutPageId,
    ContactPageId,
} from "utils/useScroll";
import { BrandPalette } from "theme/colors/Colors";

import "./App.scss";
import "aos/dist/aos.css";

const Navbar = lazy(() => import("shared/navbar/Navbar").then((m) => ({ default: m.Navbar })));
const Landing = lazy(() => import("pages/landing/Landing").then((m) => ({ default: m.Landing })));
const PageHeader = lazy(() => import("shared/page-header/PageHeader").then((m) => ({ default: m.PageHeader })));
const FeaturedProjects = lazy(() =>
    import("pages/featured-projects/FeaturedProjects").then((m) => ({
        default: m.FeaturedProjects,
    }))
);
const ProductApproach = lazy(() =>
    import("pages/approach/ProductApproach").then((m) => ({
        default: m.ProductApproach,
    }))
);
const OtherProjects = lazy(() =>
    import("pages/other-projects/OtherProjects").then((m) => ({
        default: m.OtherProjects,
    }))
);
const Experience = lazy(() =>
    import("pages/about/experience/Experience").then((m) => ({
        default: m.Experience,
    }))
);
const Skills = lazy(() =>
    import("pages/about/skills/Skills").then((m) => ({
        default: m.Skills,
    }))
);
const About = lazy(() => import("pages/about/About").then((m) => ({ default: m.About })));
const Education = lazy(() =>
    import("pages/about/education/Education").then((m) => ({
        default: m.Education,
    }))
);
const ContactSection = lazy(() =>
    import("pages/contact/ContactSection").then((m) => ({
        default: m.ContactSection,
    }))
);
const Footer = lazy(() => import("shared/footer/Footer").then((m) => ({ default: m.Footer })));

const Loader: FC = () => (
    <Center w="100%" h="100vh" bg={BrandPalette.warmOffWhite}>
        <Spinner size="lg" color={BrandPalette.mutedTeal} thickness="3px" speed="0.75s" />
    </Center>
);

export const App: FC = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 600, easing: "ease-out-cubic" });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Box bg={BrandPalette.warmOffWhite} minH="100vh">
                {/* 1. Navigation */}
                <Navbar />

                <Container maxW="container.xl" px={{ base: 5, md: 8, lg: 12 }} pt={NavbarHeight}>
                    {/* 2. Hero */}
                    <Box id={LandingPageId}>
                        <Landing />
                    </Box>

                    {/* 3. Selected Work */}
                    <Box id={WorkPageId} pt="8">
                        <PageHeader
                            eyebrow="Portfolio"
                            title="Selected Work"
                            description="A collection of projects exploring product experiences, analytics, business problems, and technology. Each project reflects my interest in turning ideas into practical solutions."
                        />
                        <FeaturedProjects />
                    </Box>

                    {/* 4. Product & Design Approach */}
                    <Box id={ApproachPageId}>
                        <ProductApproach />
                    </Box>

                    {/* 5. Other Engineering Projects */}
                    <Box id="engineering-projects" pt="8" pb="12">
                        <PageHeader
                            eyebrow="Engineering & Hardware"
                            title="Other Engineering Projects"
                            description="Additional projects exploring hardware, automation, computer vision, and practical engineering problems."
                        />
                        <OtherProjects />
                    </Box>

                    {/* 6. Experience */}
                    <Box id={ExperiencePageId} pt="8" pb="12">
                        <PageHeader
                            eyebrow="Career Path"
                            title="Experience"
                            description="Hands-on experience in e-commerce workflows, customer-facing storefronts, requirements, and product implementation."
                        />
                        <Experience />
                    </Box>

                    {/* 7. Skills & Tools */}
                    <Box id="skills" pt="8" pb="12">
                        <PageHeader
                            eyebrow="Capabilities"
                            title="Skills & Tools"
                            description="Structured toolkit spanning product thinking, interface design, analytics, and software implementation."
                        />
                        <Skills />
                    </Box>

                    {/* 8. About */}
                    <Box id={AboutPageId} pt="8" pb="12">
                        <PageHeader
                            eyebrow="Background"
                            title="A Little About Me"
                        />
                        <About />
                    </Box>

                    {/* 9. Education */}
                    <Box id="education" pt="8" pb="12">
                        <PageHeader
                            eyebrow="Academic Background"
                            title="Education"
                        />
                        <Education />
                    </Box>

                    {/* 10. Contact */}
                    <Box id={ContactPageId}>
                        <ContactSection />
                    </Box>

                    {/* 11. Footer */}
                    <Footer />
                </Container>
            </Box>
        </Suspense>
    );
};

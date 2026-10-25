import { useEffect, useState } from "react";

export const LandingPageId = "page-landing";
export const WorkPageId = "page-work";
export const ApproachPageId = "product-approach";
export const ExperiencePageId = "experience";
export const AboutPageId = "about";
export const ContactPageId = "contact";

const pageIds = [
    LandingPageId,
    WorkPageId,
    ApproachPageId,
    ExperiencePageId,
    AboutPageId,
    ContactPageId,
];

export const useScroll = () => {
    const [page, setPage] = useState<string>(LandingPageId);

    const scrollHandler = () => {
        const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + 120;
        let activePage = LandingPageId;

        for (const id of pageIds) {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop;
                if (scrollPosition >= top) {
                    activePage = id;
                }
            }
        }

        setPage(activePage);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler, { passive: true });
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return page;
};

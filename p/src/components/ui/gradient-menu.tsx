import React from "react";
import {
    IoHomeOutline,
    IoBriefcaseOutline,
    IoCompassOutline,
    IoTimeOutline,
    IoPersonOutline,
    IoMailOutline,
    IoDocumentTextOutline,
    IoVideocamOutline,
    IoCameraOutline,
    IoShareSocialOutline,
    IoHeartOutline,
} from "react-icons/io5";
import { onResumeOpen } from "utils/Functions";
import "./gradient-menu.scss";

export interface MenuItem {
    title: string;
    icon: React.ReactNode;
    gradientFrom: string;
    gradientTo: string;
    sectionId?: string;
    action?: () => void;
}

// Portfolio navigation items aligned with the complete dark palette accents
export const portfolioMenuItems: MenuItem[] = [
    {
        title: "Home",
        icon: <IoHomeOutline />,
        gradientFrom: "#3B82F6",
        gradientTo: "#2563EB",
        sectionId: "page-landing",
    },
    {
        title: "Work",
        icon: <IoBriefcaseOutline />,
        gradientFrom: "#A855F7",
        gradientTo: "#9333EA",
        sectionId: "page-work",
    },
    {
        title: "Approach",
        icon: <IoCompassOutline />,
        gradientFrom: "#EC4899",
        gradientTo: "#DB2777",
        sectionId: "product-approach",
    },
    {
        title: "Experience",
        icon: <IoTimeOutline />,
        gradientFrom: "#F59E0B",
        gradientTo: "#D97706",
        sectionId: "experience",
    },
    {
        title: "About",
        icon: <IoPersonOutline />,
        gradientFrom: "#10B981",
        gradientTo: "#059669",
        sectionId: "about",
    },
    {
        title: "Contact",
        icon: <IoMailOutline />,
        gradientFrom: "#3B82F6",
        gradientTo: "#6366F1",
        sectionId: "contact",
    },
    {
        title: "Resume",
        icon: <IoDocumentTextOutline />,
        gradientFrom: "#A855F7",
        gradientTo: "#EC4899",
        action: onResumeOpen,
    },
];

export const defaultMenuItems: MenuItem[] = [
    { title: "Home", icon: <IoHomeOutline />, gradientFrom: "#3B82F6", gradientTo: "#2563EB" },
    { title: "Video", icon: <IoVideocamOutline />, gradientFrom: "#A855F7", gradientTo: "#9333EA" },
    { title: "Photo", icon: <IoCameraOutline />, gradientFrom: "#EC4899", gradientTo: "#DB2777" },
    { title: "Share", icon: <IoShareSocialOutline />, gradientFrom: "#10B981", gradientTo: "#059669" },
    { title: "Tym", icon: <IoHeartOutline />, gradientFrom: "#F59E0B", gradientTo: "#D97706" },
];

interface Props {
    items?: MenuItem[];
    mode?: "portfolio" | "default";
    activeId?: string;
}

export default function GradientMenu({ items, mode = "portfolio", activeId }: Props) {
    const activeItems = items || (mode === "portfolio" ? portfolioMenuItems : defaultMenuItems);

    const handleClick = (item: MenuItem) => {
        if (item.action) {
            item.action();
        } else if (item.sectionId) {
            const el = document.getElementById(item.sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav aria-label="Navigation menu" className="gradient-menu-wrapper flex justify-center items-center">
            <ul className="gradient-menu-list flex gap-2 justify-center p-0 m-0 list-none">
                {activeItems.map((item, idx) => {
                    const isActive = activeId && item.sectionId === activeId;
                    return (
                        <li
                            key={idx}
                            role="button"
                            tabIndex={0}
                            aria-label={`Navigate to ${item.title}`}
                            onClick={() => handleClick(item)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleClick(item);
                                }
                            }}
                            style={
                                {
                                    "--gradient-from": item.gradientFrom,
                                    "--gradient-to": item.gradientTo,
                                } as React.CSSProperties
                            }
                            className={`gradient-menu-item relative w-[36px] h-[36px] lg:w-[38px] lg:h-[38px] rounded-full flex items-center justify-center transition-all duration-300 hover:w-[105px] lg:hover:w-[110px] group cursor-pointer ${
                                isActive ? "is-active w-[105px] lg:w-[110px]" : ""
                            }`}
                        >
                            {/* Accent Gradient on hover & active */}
                            <span className="gradient-bg absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Soft glow */}
                            <span className="gradient-glow absolute top-[2px] inset-x-0 h-full rounded-full bg-[linear-gradient(135deg,var(--gradient-from),var(--gradient-to))] blur-[8px] opacity-0 -z-10 transition-opacity duration-300 group-hover:opacity-30" />

                            {/* Icon */}
                            <span className="gradient-icon relative z-10 transition-all duration-200 group-hover:scale-0 flex items-center justify-center">
                                <span className="text-base text-[#F5F5F5]">{item.icon}</span>
                            </span>

                            {/* Title */}
                            <span className="gradient-title absolute text-white uppercase tracking-wider text-[10px] lg:text-[10.5px] font-bold transition-transform duration-200 scale-0 group-hover:scale-100 whitespace-nowrap z-10">
                                {item.title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

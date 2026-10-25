import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    if (configs.common.resume && configs.common.resume.trim() !== "") {
        open(configs.common.resume);
    }
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};

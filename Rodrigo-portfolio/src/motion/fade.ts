import type { Variants } from "motion/react";

export const fade: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },

    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
};
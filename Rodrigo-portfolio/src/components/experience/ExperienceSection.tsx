import { useState } from "react";

import { experiences } from "../../data/experience";

import ExperienceRoadmap from "./ExperienceRoadmap";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] =
        useState(experiences[0]);


    return (
        <section
            id="experience"
            className="
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col
        gap-16
        px-6
        py-32
        "
        >
            <header className="max-w-2xl mb-7">
                <p
                    className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-(--accent)
            "
                >
                    Experiencia
                </p>

                <h2
                    className="
            mt-4
            text-4xl
            font-semibold
            text-(--text-text)
            "
                >
                    Mi evolución como desarrollador.
                </h2>

                <p
                    className="
            mt-6
            text-lg
            leading-relaxed
            text-(--text-secondary)
            "
                >
                    Cada etapa representa un aprendizaje que fue ampliando mi forma de
                    construir productos digitales, desde mis primeros pasos hasta el
                    desarrollo de aplicaciones Full Stack.
                </p>
            </header>

            <ExperienceRoadmap
                experiences={experiences}
                selectedId={selectedExperience.id}
                onSelect={setSelectedExperience}
            />

            <ExperienceCard experience={selectedExperience} />
        </section>
    );
}
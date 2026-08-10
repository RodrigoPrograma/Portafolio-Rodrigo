import AppLayout from "./layouts/appLayout";
import { Hero } from "./components/hero/hero";
import AboutSection from "../src/components/about/AboutSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Projects from "./components/projects/Projects";

function App() {
    return (
    <AppLayout>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <Projects />
    </AppLayout>
    );
}

export default App;
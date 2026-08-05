import AppLayout from "./layouts/appLayout";
import { Hero } from "./components/hero/hero";
import AboutSection from "../src/components/about/AboutSection";
import ExperienceSection from "./components/experience/ExperienceSection";

function App() {
    return (
    <AppLayout>
        <Hero />
        <AboutSection />
        <ExperienceSection />
    </AppLayout>
    );
}

export default App;
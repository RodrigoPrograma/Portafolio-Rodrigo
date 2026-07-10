import AppLayout from "./layouts/appLayout";
import { Hero } from "./components/hero/hero";
import AboutSection from "../src/components/about/AboutSection";

function App() {
    return (
    <AppLayout>
        <Hero />
        <AboutSection />
    </AppLayout>
    );
}

export default App;
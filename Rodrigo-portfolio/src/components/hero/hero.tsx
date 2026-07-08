import HeroContent from "./HeroVisual";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center"
    >
      <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
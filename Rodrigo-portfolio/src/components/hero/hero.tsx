import Container from '@/components/layout/container';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

export  function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          <div className="lg:col-span-7">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
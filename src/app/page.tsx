import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Namburi Hrithika
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto">
            Software Engineering Enthusiast | Machine Learning | Web Design | Data Analysis
          </p>
          
          <p className="text-lg mb-12 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Passionate about software engineering, web design, and data analysis, I strive to create impactful and efficient solutions through innovative projects. My goal is to be recognized for delivering high-quality work that makes a meaningful difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-glow transition-all duration-300"
            >
              View My Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/n-hrithika-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-secondary transition-colors hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:hrithikanamburi@gmail.com"
              className="text-primary-foreground hover:text-secondary transition-colors hover-lift"
            >
              <Mail size={28} />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground hover:text-secondary transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Code, Brain, Palette, BarChart3 } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Software Engineering",
      description: "Building scalable and efficient applications"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Creating intelligent solutions for real-world problems"
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Crafting beautiful and user-friendly interfaces"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Hello! I'm Hrithika
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Computer Science Engineering student at Vel Tech Rangarajan Dr. Sagunthala R&D Institute, 
              driven by the endless possibilities that technology offers. My journey in tech is fueled by curiosity and 
              a desire to solve complex problems through innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From developing machine learning models that can identify crop diseases to creating intelligent chatbots 
              that enhance customer experience, I love working on projects that make a real impact. My goal is to 
              continue growing as a developer while contributing to meaningful technological advancement.
            </p>
            
            <Button className="bg-gradient-primary hover:shadow-glow mb-8">
              <Download className="mr-2" size={18} />
              Download Resume
            </Button>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <interest.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{interest.title}</h4>
                        <p className="text-xs text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
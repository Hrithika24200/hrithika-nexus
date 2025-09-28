import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Car, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Infected Crop Identification Using Machine Learning",
      description: "Developed an intelligent system to detect and classify infected crops, helping farmers take preventive measures. Achieved high accuracy through optimized CNN models and comprehensive data preprocessing techniques.",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "CNN", "Image Processing", "Data Analysis"],
      features: [
        "High-accuracy crop disease detection",
        "Real-time image classification",
        "Preventive measure recommendations",
        "User-friendly interface for farmers"
      ],
      color: "bg-gradient-primary"
    },
    {
      title: "Adaptive Traffic Flow Control System",
      description: "Built an AI-powered traffic management system using YOLO object detection and LSTM networks for real-time traffic optimization, significantly reducing congestion and improving road safety.",
      icon: Car,
      technologies: ["Python", "YOLO", "LSTM", "Computer Vision", "AI Optimization"],
      features: [
        "Real-time traffic monitoring",
        "Intelligent signal control",
        "Congestion prediction",
        "Safety improvement metrics"
      ],
      color: "bg-gradient-secondary"
    },
    {
      title: "E-Commerce Chatbot with Graph RAG & LLM",
      description: "Created an intelligent chatbot for personalized product recommendations and automated customer support, enhancing user engagement through advanced natural language processing and graph-based retrieval.",
      icon: MessageSquare,
      technologies: ["Python", "LLM", "Graph RAG", "NLP", "API Integration"],
      features: [
        "Personalized recommendations",
        "Natural language understanding",
        "24/7 customer support",
        "Graph-based knowledge retrieval"
      ],
      color: "bg-gradient-to-r from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in machine learning, web development, and data analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={`${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <project.icon size={120} className="text-white" />
                  </div>
                  <div className="text-center z-10">
                    <div className="bg-white/20 p-4 rounded-2xl inline-block mb-4">
                      <project.icon size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-muted hover:bg-muted/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                      <ExternalLink className="mr-2" size={16} />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Github className="mr-2" size={16} />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Globe, 
  BarChart3, 
  Wrench, 
  Eye,
  Database,
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "bg-gradient-primary",
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "bg-gradient-secondary", 
      skills: ["Data Preprocessing", "CNN Models", "Model Training", "Model Evaluation", "Feature Engineering", "Deep Learning"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "bg-gradient-to-r from-accent to-primary",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI/UX Design", "Frontend Development", "Web Standards"]
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "bg-gradient-to-r from-primary to-secondary",
      skills: ["Data Cleaning", "Data Visualization", "Statistical Analysis", "Insights Generation", "Pattern Recognition", "Predictive Analytics"]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "bg-gradient-to-r from-secondary to-accent",
      skills: ["Jupyter Notebook", "VS Code", "Git", "GitHub", "TensorFlow", "Pandas"]
    },
    {
      title: "Expertise Areas",
      icon: Eye,
      color: "bg-gradient-to-r from-accent to-primary",
      skills: ["Computer Vision", "Real-world ML Applications", "Software Development", "Problem Solving", "Research & Development", "Innovation"]
    }
  ];

  const achievements = [
    "High-accuracy ML model development",
    "Real-time system optimization", 
    "User-centered design approach",
    "Cross-functional project leadership"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card hover-lift animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-muted hover:bg-muted/80 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-hero w-12 h-12 rounded-xl flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
              <CardTitle className="text-xl">
                Key Achievements & Specializations
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Core Strength:</span> Bridging the gap between theoretical knowledge and practical application, 
                with a focus on creating ML solutions that solve real-world problems while maintaining high code quality and user experience standards.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
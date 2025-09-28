import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      location: "Tamil Nadu, India",
      duration: "2022 - 2026",
      status: "Currently Pursuing",
      description: "Specializing in software engineering, machine learning, and data structures. Active in coding competitions and tech projects."
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Bhashyam Junior College",
      location: "Andhra Pradesh, India", 
      duration: "2020 - 2022",
      grade: "75%",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical problem-solving skills."
    },
    {
      degree: "Secondary School (Class 10)",
      institution: "Sri Chaitanya Techno School",
      location: "Andhra Pradesh, India",
      duration: "2020",
      grade: "97%",
      description: "Achieved exceptional academic performance with a strong foundation in core subjects and early interest in technology."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey that shaped my passion for technology and innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative animate-fade-up flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                  <Card className="glass-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-primary p-3 rounded-lg">
                          <GraduationCap size={24} className="text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg font-medium text-primary mb-3">
                            {edu.institution}
                          </h4>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            {edu.grade && (
                              <div className="flex items-center space-x-1">
                                <Award size={16} />
                                <span>{edu.grade}</span>
                              </div>
                            )}
                            {edu.status && (
                              <div className="flex items-center space-x-1">
                                <Award size={16} />
                                <span className="text-primary font-medium">{edu.status}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
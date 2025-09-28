import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send,
  User,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Official Email",
      value: "vtu24200@veltech.edu.in",
      href: "mailto:vtu24200@veltech.edu.in"
    },
    {
      icon: Mail,
      label: "Personal Email", 
      value: "hrithikanamburi@gmail.com",
      href: "mailto:hrithikanamburi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9949605041",
      href: "tel:+919949605041"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/n-hrithika-cse",
      href: "https://linkedin.com/in/n-hrithika-cse"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborate on projects, or just have a conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <MessageSquare size={24} className="text-primary-foreground" />
                  </div>
                  <span>Let's Connect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, exciting projects, or potential collaborations. 
                  Whether you're looking for a passionate developer, have a project idea, or just want to connect, 
                  I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors hover-lift group"
                    >
                      <div className="bg-gradient-primary p-2 rounded-lg group-hover:shadow-glow transition-all">
                        <info.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline mr-2" size={16} />
                    Currently based in Tamil Nadu, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <div className="bg-gradient-secondary p-2 rounded-lg">
                    <Send size={24} className="text-secondary-foreground" />
                  </div>
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center space-x-2">
                      <User size={16} />
                      <span>Your Name</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center space-x-2">
                      <Mail size={16} />
                      <span>Email Address</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center space-x-2">
                      <MessageSquare size={16} />
                      <span>Your Message</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      required
                      className="bg-background/50 border-muted focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
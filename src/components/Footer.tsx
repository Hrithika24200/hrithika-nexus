import { Heart, Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Namburi Hrithika
            </h3>
            <p className="text-background/80 leading-relaxed">
              Software Engineering Enthusiast passionate about creating innovative solutions 
              through machine learning, web design, and data analysis.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">
                About Me
              </a>
              <a href="#education" className="block text-background/80 hover:text-background transition-colors">
                Education
              </a>
              <a href="#projects" className="block text-background/80 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-background/80 hover:text-background transition-colors">
                Skills
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:hrithikanamburi@gmail.com"
                className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail size={16} />
                <span>hrithikanamburi@gmail.com</span>
              </a>
              <a
                href="tel:+919949605041"
                className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone size={16} />
                <span>+91 9949605041</span>
              </a>
              <a
                href="https://linkedin.com/in/n-hrithika-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center space-x-1">
            <span>© 2024 Namburi Hrithika. Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>and cutting-edge technology.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
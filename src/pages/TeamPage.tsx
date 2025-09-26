import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const teamMembers = [
  {
    name: "Vivek Zope",
    role: "CEO",
    bio: "Manages all the things with visionary leadership and strategic direction.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    linkedin: "#"
  },
  {
    name: "Ritesh Mahale",
    role: "CTO",
    bio: "Expert in Backend Development and system architecture with deep technical expertise.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritesh&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    linkedin: "#"
  },
  {
    name: "Aditya Badgujar",
    role: "COO",
    bio: "Research and Development expert specializing in Frappe framework and innovation.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    linkedin: "#"
  },
];

function TeamPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
                <span className="text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <NavLink 
                    key={item.name} 
                    to={item.link}
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                <Button size="sm">Get Started</Button>
              </div>

              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-light text-foreground leading-none tracking-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the passionate experts behind Beforth's success. We're a team of dedicated professionals 
              committed to transforming businesses through innovative Frappe solutions.
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex justify-center space-x-2">
                      <a href={member.linkedin} className="text-muted-foreground hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join our team
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're always looking for talented individuals who share our passion for open-source technology and business transformation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/careers" className="flex items-center">
                  View Open Positions
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center">
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default TeamPage;

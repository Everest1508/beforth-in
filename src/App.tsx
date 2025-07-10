import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './components/ui/theme-provider';
import { FloatingNav } from './components/ui/floating-navbar';
import { HeroParallax } from './components/ui/hero-parallax';
import { BentoGrid } from './components/ui/bento-grid';
import { ServiceModal } from './components/ui/service-modal';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Card } from './components/ui/card';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Award,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  pricing: string;
}

const services: Service[] = [
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    description: 'Transform your business with expert strategic guidance and innovative solutions.',
    icon: <Shield className="w-8 h-8" />,
    features: ['Business Strategy', 'Market Analysis', 'Risk Assessment', 'Growth Planning'],
    pricing: 'Starting at $5,000/month'
  },
  {
    id: 'development',
    title: 'Custom Development',
    description: 'Build cutting-edge applications tailored to your specific business needs.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
    pricing: 'Starting at $10,000/project'
  },
  {
    id: 'team',
    title: 'Team Augmentation',
    description: 'Scale your team with our experienced professionals and domain experts.',
    icon: <Users className="w-8 h-8" />,
    features: ['Skilled Developers', 'Project Managers', 'DevOps Engineers', 'Quality Assurance'],
    pricing: 'Starting at $3,000/month per resource'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechFlow',
    content: 'Beforth transformed our entire development process. Their expertise and dedication are unmatched.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, StartupX',
    content: 'The strategic consulting provided by Beforth helped us secure $2M in Series A funding.',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    role: 'VP Engineering, ScaleUp',
    content: 'Their team augmentation service allowed us to scale from 5 to 50 engineers seamlessly.',
    rating: 5
  }
];

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="beforth-theme">
      <div className="min-h-screen bg-background text-foreground">
        <FloatingNav navItems={[]} />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroParallax />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Beforth
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering businesses with innovative solutions, strategic consulting, and world-class development services.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions designed to accelerate your business growth and digital transformation.
              </p>
            </motion.div>
            
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => openModal(service)}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Beforth?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine deep industry expertise with cutting-edge technology to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Global Reach',
                  description: 'Serving clients across 25+ countries with 24/7 support and localized expertise.'
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Proven Excellence',
                  description: 'Award-winning solutions with 98% client satisfaction and industry recognition.'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Rapid Delivery',
                  description: 'Agile methodologies ensuring faster time-to-market without compromising quality.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security protocols and compliance with international standards.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Expert Team',
                  description: '200+ certified professionals with deep domain expertise and technical skills.'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quality Assurance',
                  description: 'Rigorous testing and quality control processes ensuring flawless deliverables.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from industry leaders who have transformed their businesses with Beforth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your business? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Company" />
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                    <Button className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span>hello@beforth.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-3" />
                      <span>San Francisco, CA & New York, NY</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Beforth
                </h3>
                <p className="text-muted-foreground mb-4">
                  Empowering businesses with innovative solutions and strategic expertise.
                </p>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Strategic Consulting</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Custom Development</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Team Augmentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Digital Transformation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <p className="text-muted-foreground mb-4">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button 
                    size="sm"
                    className="px-4"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Bottom Footer */}
            <motion.div 
              className="border-t border-border pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Security</a>
                  <a href="#" className="hover:text-primary transition-colors">Compliance</a>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>&copy; 2024 Beforth. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </footer>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={closeModal}
            service={selectedService}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
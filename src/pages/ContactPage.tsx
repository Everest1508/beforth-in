import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { Logo } from '../components/ui/logo';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
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

function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formBody = new URLSearchParams(formData).toString();

    try {
      const response = await fetch('https://console.4form.beforth.in/form/beforth-contact-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      });

        if (response.ok) {
          toast.success('Form submitted successfully!');
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company: '',
            industry: '',
            message: '',
          });
        } else {
          toast.error('Failed to submit form.');
        }

    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastContainer position="top-right" autoClose={3000} />
      
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
              
              {/* Desktop Navigation */}
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
              
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button size="sm">Get Started</Button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
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
              Get in <br />
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">touch.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to start your Frappe journey? We're here to help you implement HRMS and CRM solutions every step of the way.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                      Send us a <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">message</span>
                    </h2>
                    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit} method='POST'>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <Input placeholder="First Name" name='first_name' value={formData.first_name} onChange={handleChange} required />
                        <Input placeholder="Last Name" name='last_name' value={formData.last_name} onChange={handleChange} required />
                        <Input type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange} required />
                        <Input type="tel" placeholder="Phone" name='phone' value={formData.phone} onChange={handleChange} required />
                        <Input placeholder="Company" name='company' value={formData.company} onChange={handleChange} required />
                        <select 
                          className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:ring-0 text-sm text-muted-foreground font-light" 
                          name='industry' 
                          value={formData.industry}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Industry</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Retail">Retail</option>
                          <option value="Finance">Finance</option>
                          <option value="Technology">Technology</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <Textarea 
                        placeholder="Tell us about your HR and CRM requirements..."
                        rows={4}
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <div className="pt-4 md:pt-8">
                        <Button size="lg" className="w-full sm:w-auto" type="submit">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                    Let's <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">connect</span>
                  </h2>
                  <p className="text-lg font-light text-muted-foreground leading-relaxed mb-8">
                    We're here to help you transform your business with Frappe HRMS and CRM solutions. 
                    Reach out to us for a free consultation or any questions you might have.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Support",
                      content: "support@beforth.in",
                      description: "Technical support and assistance"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+919766183834",
                      description: "Mon-Fri from 9am to 6pm"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "Nashik, Maharashtra, India",
                      description: "Our development center"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM",
                      description: "Saturday: 10:00 AM - 4:00 PM"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground font-medium mb-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                      { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                      { icon: Facebook, href: "#", color: "hover:text-blue-700" },
                      { icon: Instagram, href: "#", color: "hover:text-pink-600" },
                      { icon: Youtube, href: "#", color: "hover:text-red-600" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              Ready to get started?
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss how Frappe HRMS and CRM 
              can transform your business operations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule Free Consultation
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default ContactPage;

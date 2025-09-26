import { useEffect, useState } from 'react';
import { Users, BarChart3, Shield, Play, ArrowRight, CheckCircle, Star, Zap, Target, Award, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent} from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { ServiceModal } from '../components/ui/service-modal';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const services = [
  {
    id: 'hrms',
    title: "HRMS Implementation",
    description: "Complete Frappe HRMS implementation with employee records, payroll, attendance tracking, and performance management.",
    icon: <Users className="h-8 w-8" />,
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50/50 to-indigo-100/50 dark:from-blue-950/30 dark:to-indigo-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-2 left-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Users className="w-8 h-8 text-blue-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
    ),
    features: ["Employee Records Management", "Attendance & Leave Management", "Comprehensive Payroll", "Performance Management"],
    benefits: ["Reduce HR work by 70%", "100% compliance", "Real-time analytics"],
    process: ["Requirements Analysis", "Data Migration", "User Training", "Go-Live Support"]
  },
  {
    id: 'crm',
    title: "CRM Solutions",
    description: "Frappe CRM for lead management, sales pipeline, customer relationships, and automated workflows.",
    icon: <BarChart3 className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-50/50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10"></div>
        <div className="absolute top-3 right-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-2 w-14 h-14 bg-green-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BarChart3 className="w-8 h-8 text-emerald-500/40" />
        </div>
      </div>
    ),
    features: ["Lead Management", "Sales Pipeline", "Customer 360° View", "Email Integration"],
    benefits: ["40% conversion increase", "Faster lead response", "Better retention"],
    process: ["Process Mapping", "Data Import", "Team Training", "Performance Monitoring"]
  },
  {
    id: 'integration',
    title: "System Integration",
    description: "Integrate Frappe HRMS and CRM with existing systems for unified data and streamlined operations.",
    icon: <Shield className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-50/50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/10"></div>
        <div className="absolute top-2 right-2 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1 left-1 w-16 h-16 bg-violet-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Shield className="w-8 h-8 text-purple-500/40" />
        </div>
      </div>
    ),
    features: ["API Integration", "Real-time Sync", "SSO Implementation", "Data Mapping"],
    benefits: ["Eliminate data silos", "95% error reduction", "Unified reporting"],
    process: ["System Audit", "API Development", "Data Migration", "Go-Live"]
  }
];

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast Implementation",
    description: "Get your HRMS and CRM up and running in weeks, not months, with our proven implementation methodology."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level security with data encryption, access controls, and compliance with international standards."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Customized Solutions",
    description: "Tailored to your business needs with custom workflows, integrations, and reporting capabilities."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert Support",
    description: "24/7 support from Frappe experts who understand your business and technical requirements."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Scalable Architecture",
    description: "Grows with your business from startup to enterprise with cloud and on-premise deployment options."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick ROI",
    description: "See returns within 3-6 months with improved efficiency, reduced costs, and better decision-making."
  }
];

const approach = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Startup-Focused",
    description: "We understand startup challenges and provide cost-effective solutions that scale with your growth."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Deployment",
    description: "Get up and running quickly with our streamlined implementation process designed for fast-moving startups."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Future-Proof",
    description: "Built on open-source Frappe framework, ensuring long-term flexibility and avoiding vendor lock-in."
  }
];

const stats = [
  { number: "100%", label: "Open Source", color: "text-blue-600" },
  { number: "24/7", label: "Support availability", color: "text-green-600" },
  { number: "Fast", label: "Implementation", color: "text-purple-600" },
  { number: "2025", label: "Founded", color: "text-orange-600" }
];

function HomePage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    (function(c, l, a, r, i) {
      let t: HTMLScriptElement;
      let y: HTMLElement;
      (c as any)[a] = (c as any)[a] || function () {
        ((c as any)[a].q = (c as any)[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLElement;
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", "sdaak99ru3");
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <motion.div className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <Button size="sm" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </motion.div>
              </div>

              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-foreground leading-none tracking-tight mb-6 md:mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Transform<br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">your business.</span>
            </motion.h1>
            
            <motion.p className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Frappe HRMS and CRM solutions that streamline HR operations, manage customer relationships, and drive growth through intelligent automation.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-20 px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="/contact">Schedule Consultation</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div className="relative px-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Business professionals working with ERP systems" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className={`text-4xl md:text-6xl font-extralight mb-3 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Why choose <span className="font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Beforth?</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver exceptional value through our expertise, proven methodology, and commitment to your success.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-0 bg-muted/30 hover:bg-muted/50">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">solutions.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive Frappe HRMS and CRM solutions tailored to your business needs with open-source flexibility and expert implementation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-0 bg-background hover:bg-muted/30">
                    <div className="text-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mx-auto w-fit mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <Button size="lg" asChild>
                <a href="/services">View All Services</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Built for <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">startups.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're a startup too, so we understand the unique challenges you face. Our solutions are designed to grow with you.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-0 bg-muted/30 hover:bg-muted/50">
                    <div className="text-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mx-auto w-fit mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 md:mb-8">
                Ready to transform<br />
                <span className="font-semibold">your business?</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Ready to streamline your operations? Let's build something amazing together with Frappe's powerful open-source platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <a href="/contact">Get Started Today</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <a href="/about">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal isOpen={!!selectedService} onClose={closeModal} service={selectedService} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
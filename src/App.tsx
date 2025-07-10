import React from 'react';
import { useState } from 'react';
import { ChevronRight, Users, BarChart3, Shield, Clock, ArrowRight, Mail, Phone, MapPin, Building2, TrendingUp, Zap, Target, Play, Menu, Linkedin, Twitter, Facebook, Instagram, Youtube, Award, Globe, HeadphonesIcon, BookOpen, FileText, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { FloatingNav } from './components/ui/floating-navbar';
import { BentoGrid, BentoGridItem } from './components/ui/bento-grid';
import { MobileMenu } from './components/ui/mobile-menu';
import { ThemeProvider } from './components/ui/theme-provider';
import { ThemeToggle } from './components/ui/theme-toggle';
import { ServiceModal } from './components/ui/service-modal';

const navItems = [
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
  { name: "Benefits", link: "#benefits" },
  { name: "Contact", link: "#contact" },
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
    features: [
      "Employee Records Management with personal, job, and document data",
      "Attendance & Leave Management with automated tracking and approvals",
      "Shift & Roster Management for complex scheduling needs",
      "Comprehensive Payroll with salary structures, tax calculations, PF/ESI",
      "Performance Management with appraisals, goals, and feedback systems",
      "Recruitment Module with job postings, applications, and interview scheduling",
      "Employee Self-Service Portal for leave applications and payslip access",
      "Advanced HR Reports and Analytics for data-driven decisions"
    ],
    benefits: [
      "Reduce HR administrative work by 70% through automation",
      "Ensure 100% compliance with labor laws and tax regulations",
      "Improve employee satisfaction with self-service capabilities",
      "Real-time visibility into workforce analytics and trends",
      "Streamlined payroll processing with zero errors",
      "Enhanced recruitment efficiency with automated workflows"
    ],
    process: [
      "Requirements Analysis & System Planning",
      "Data Migration & System Configuration",
      "User Training & Change Management",
      "Go-Live Support & Optimization"
    ]
  },
  {
    id: 'crm',
    title: "CRM Solutions",
    description: "Frappe CRM for lead management, sales pipeline, customer relationships, and automated workflows.",
    icon: <Users className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-50/50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10"></div>
        <div className="absolute top-3 right-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-2 w-14 h-14 bg-green-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BarChart3 className="w-8 h-8 text-emerald-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-2 left-2 w-2 h-2 bg-emerald-400/60 rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-1 h-1 bg-green-400/60 rounded-full"></div>
      </div>
    ),
    features: [
      "Lead Management with capture, tracking, and assignment capabilities",
      "Visual Sales Pipeline with opportunity stages and Kanban boards",
      "Quotation Management with automated follow-ups and reminders",
      "360° Customer View with complete interaction history",
      "Email Integration for seamless communication tracking",
      "Sales Automation with workflow triggers and notifications",
      "Performance Analytics with conversion rates and sales trends",
      "Mobile CRM access for sales teams on the go"
    ],
    benefits: [
      "Increase sales conversion rates by up to 40%",
      "Reduce lead response time from hours to minutes",
      "Improve customer retention through better relationship management",
      "Gain complete visibility into sales pipeline and forecasting",
      "Automate repetitive sales tasks and follow-ups",
      "Make data-driven decisions with comprehensive analytics"
    ],
    process: [
      "Sales Process Mapping & CRM Design",
      "Data Import & Pipeline Configuration",
      "Sales Team Training & Adoption",
      "Performance Monitoring & Optimization"
    ]
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
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1),transparent_120deg,rgba(139,92,246,0.1),transparent_240deg)]"></div>
        <div className="absolute top-4 left-4 w-1 h-8 bg-purple-400/30 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-1 h-6 bg-violet-400/30 rounded-full transform -rotate-45"></div>
      </div>
    ),
    features: [
      "API-based integration with existing ERP, accounting, and business systems",
      "Real-time data synchronization between Frappe and third-party applications",
      "Custom connector development for legacy systems",
      "Single Sign-On (SSO) implementation for seamless user experience",
      "Data mapping and transformation for consistent information flow",
      "Automated backup and disaster recovery setup",
      "Security protocols and access control implementation",
      "Integration monitoring and error handling systems"
    ],
    benefits: [
      "Eliminate data silos and ensure single source of truth",
      "Reduce manual data entry errors by 95%",
      "Improve operational efficiency through automated workflows",
      "Enable real-time reporting across all business systems",
      "Maintain data consistency across all platforms",
      "Reduce IT maintenance overhead with unified systems"
    ],
    process: [
      "System Audit & Integration Planning",
      "API Development & Testing",
      "Data Migration & Validation",
      "Go-Live & Monitoring Setup"
    ]
  },
  {
    id: 'training',
    title: "Training & Support",
    description: "Complete training on Frappe HRMS and CRM systems with ongoing support to maximize your investment.",
    icon: <Clock className="h-8 w-8" />,
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-50/50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
        <div className="absolute top-1 right-1 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-2 left-3 w-18 h-18 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Clock className="w-8 h-8 text-orange-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute top-3 left-6 w-3 h-3 bg-orange-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-6 w-2 h-2 bg-red-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-orange-300/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    ),
    features: [
      "Comprehensive user training programs for all system modules",
      "Role-based training sessions for different user groups",
      "Interactive workshops and hands-on practice sessions",
      "Custom training materials and documentation",
      "24/7 technical support with dedicated support team",
      "Regular system health checks and optimization",
      "User adoption monitoring and additional training as needed",
      "Knowledge base and video tutorials for self-learning"
    ],
    benefits: [
      "Achieve 95% user adoption rate within first month",
      "Reduce support tickets by 80% through proper training",
      "Maximize ROI through effective system utilization",
      "Ensure business continuity with reliable support",
      "Build internal expertise for long-term success",
      "Stay updated with latest features and best practices"
    ],
    process: [
      "Training Needs Assessment",
      "Customized Training Program Development",
      "Training Delivery & User Certification",
      "Ongoing Support & Knowledge Transfer"
    ]
  },
  {
    id: 'optimization',
    title: "Process Optimization",
    description: "Optimize HR and sales processes using Frappe's automation capabilities and workflow management.",
    icon: <Zap className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-50/50 to-amber-100/50 dark:from-yellow-950/30 dark:to-amber-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Zap className="w-8 h-8 text-yellow-500/40" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(234,179,8,0.1)_25%,transparent_25%,transparent_75%,rgba(245,158,11,0.1)_75%)] bg-[length:8px_8px]"></div>
        <div className="absolute top-2 left-8 w-4 h-1 bg-yellow-400/40 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-3 right-5 w-6 h-1 bg-amber-400/40 rounded-full transform -rotate-12"></div>
        <div className="absolute top-5 right-3 w-2 h-1 bg-yellow-300/50 rounded-full transform rotate-45"></div>
      </div>
    ),
    features: [
      "Business process analysis and workflow mapping",
      "Automation of repetitive tasks and approvals",
      "Custom workflow design for complex business rules",
      "Performance metrics and KPI tracking setup",
      "Process bottleneck identification and resolution",
      "Continuous improvement recommendations",
      "Change management and process adoption support",
      "ROI measurement and optimization reporting"
    ],
    benefits: [
      "Reduce process completion time by up to 60%",
      "Eliminate manual errors through automation",
      "Improve compliance with standardized workflows",
      "Increase employee productivity and satisfaction",
      "Enable better decision-making with real-time insights",
      "Achieve measurable ROI within 6 months"
    ],
    process: [
      "Current State Analysis & Gap Assessment",
      "Future State Design & Automation Planning",
      "Workflow Implementation & Testing",
      "Performance Monitoring & Continuous Improvement"
    ]
  },
  {
    id: 'custom',
    title: "Custom Solutions",
    description: "Custom Frappe implementations with low-code customization for your specific business needs.",
    icon: <Target className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-50/50 to-rose-100/50 dark:from-pink-950/30 dark:to-rose-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10"></div>
        <div className="absolute top-2 right-4 w-26 h-26 bg-pink-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-3 left-2 w-22 h-22 bg-rose-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Target className="w-8 h-8 text-pink-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-4 left-3 w-8 h-8 border border-pink-400/30 rounded-full"></div>
        <div className="absolute bottom-4 right-2 w-6 h-6 border border-rose-400/30 rounded-full"></div>
        <div className="absolute top-6 right-6 w-4 h-4 border border-pink-300/40 rounded-full"></div>
      </div>
    ),
    features: [
      "Custom module development using Frappe's low-code platform",
      "Industry-specific customizations and configurations",
      "Custom report and dashboard development",
      "Third-party integration and API development",
      "Mobile app development for field operations",
      "Custom user interfaces and user experience design",
      "Advanced analytics and business intelligence setup",
      "Scalable architecture design for future growth"
    ],
    benefits: [
      "Get exactly what your business needs without compromise",
      "Reduce development time by 70% with low-code approach",
      "Maintain full control and ownership of customizations",
      "Scale solutions as your business grows",
      "Integrate seamlessly with existing business processes",
      "Achieve competitive advantage with unique features"
    ],
    process: [
      "Requirements Gathering & Solution Design",
      "Rapid Prototyping & User Feedback",
      "Development & Quality Assurance",
      "Deployment & User Acceptance Testing"
    ]
  },
];

function App() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Main Header - Always visible */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Building2 className="h-7 w-7 text-primary" />
                <span className="ml-3 text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
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
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-light text-foreground leading-none tracking-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform<br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">your business.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Frappe HRMS and CRM solutions that streamline HR operations, manage customer relationships, and drive growth through intelligent automation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-20 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div 
              className="relative px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Business professionals working with ERP systems"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center">
              {[
                { number: "300%", label: "Average ROI increase", color: "text-blue-600" },
                { number: "90%", label: "Implementation success", color: "text-green-600" },
                { number: "24/7", label: "Support availability", color: "text-purple-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-5xl md:text-7xl font-extralight mb-3 ${stat.color}`}>{stat.number}</div>
                  <div className="text-base md:text-lg font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">services.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive Frappe HRMS and CRM solutions tailored to your business needs with open-source flexibility and expert implementation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BentoGrid className="max-w-4xl mx-auto">
                {services.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleServiceClick(item)}
                    className="cursor-pointer"
                  >
                    <BentoGridItem
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      icon={item.icon}
                      className={item.className}
                    />
                  </div>
                ))}
              </BentoGrid>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 md:mb-12 leading-tight">
                  Why choose<br />
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Beforth?</span>
                </h2>
                <div className="space-y-8 md:space-y-10">
                  {[
                    {
                      title: "Increase operational efficiency",
                      description: "Reduce manual HR and sales processes by up to 80% with Frappe's automated workflows and integrated systems.",
                      color: "border-l-blue-500"
                    },
                    {
                      title: "Proven track record",
                      description: "Successfully implemented Frappe HRMS and CRM solutions for companies across various industries with 90% success rate.",
                      color: "border-l-green-500"
                    },
                    {
                      title: "Open-source advantage",
                      description: "Cost-effective, fully customizable solutions with no license fees and complete control over your data.",
                      color: "border-l-purple-500"
                    },
                    {
                      title: "Rapid implementation",
                      description: "Get your Frappe HRMS and CRM systems up and running in weeks, not months, with our streamlined process.",
                      color: "border-l-orange-500"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`pl-6 border-l-4 ${benefit.color}`}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">{benefit.title}</h3>
                      <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaborating on ERP implementation"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About <span className="font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Beforth.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-12 md:mb-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're a forward-thinking startup specializing in Frappe HRMS and CRM implementations. 
              Our team combines deep technical expertise with industry knowledge to deliver open-source 
              solutions that provide exceptional value without the enterprise licensing costs.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left max-w-4xl mx-auto">
              {[
                {
                  title: "Our Mission",
                  description: "To democratize enterprise-grade HR and CRM solutions through Frappe's open-source platform, making them accessible and affordable for businesses of all sizes.",
                  gradient: "from-blue-600 to-purple-600"
                },
                {
                  title: "Our Vision",
                  description: "To become the leading Frappe implementation partner, known for innovation, cost-effectiveness, and exceptional client success in HR and CRM transformations.",
                  gradient: "from-green-600 to-blue-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h4 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
              Accelerate your<br />
              <span className="font-semibold">digital journey.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss how Frappe HRMS and CRM 
              can transform your HR operations and customer management.
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Get in <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">touch.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground leading-relaxed">
                Ready to start your Frappe journey? We're here to help you implement HRMS and CRM solutions every step of the way.
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <form className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                      <Input type="email" placeholder="Email" />
                      <Input type="tel" placeholder="Phone" />
                      <Input placeholder="Company" />
                      <select className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-primary focus:ring-0 text-sm text-muted-foreground font-light">
                        <option>Industry</option>
                        <option>Manufacturing</option>
                        <option>Healthcare</option>
                        <option>Retail</option>
                        <option>Finance</option>
                        <option>Technology</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <Textarea 
                      placeholder="Tell us about your HR and CRM requirements..."
                      rows={4}
                    />
                    <div className="pt-4 md:pt-8 text-center">
                      <Button size="lg" className="w-full sm:w-auto">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-background border-t border-border py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
              {/* Company Info */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Building2 className="h-8 w-8 text-primary" />
                  <span className="ml-3 text-2xl font-semibold text-foreground">Beforth</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Transforming businesses through Frappe HRMS and CRM solutions. We help companies streamline HR operations, manage customer relationships, and accelerate growth with open-source technology.
                </p>
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
                      className={`text-muted-foreground ${social.color} transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
                <ul className="space-y-3">
                  {[
                    "HRMS Implementation",
                    "CRM Solutions",
                    "System Integration",
                    "Training & Support",
                    "Process Optimization",
                    "Custom Solutions",
                    "Payroll Management",
                    "Lead Management"
                  ].map((service, index) => (
                    <li key={index}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
                <ul className="space-y-3">
                  {[
                    { name: "About Us", icon: Building2 },
                    { name: "Our Team", icon: Users },
                    { name: "Careers", icon: TrendingUp },
                    { name: "News & Blog", icon: BookOpen },
                    { name: "Case Studies", icon: Award },
                    { name: "Partners", icon: Globe },
                    { name: "Investors", icon: BarChart3 },
                    { name: "Contact", icon: Mail }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <item.icon className="h-4 w-4 text-muted-foreground mr-2" />
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Documentation", icon: FileText },
                    { name: "API Reference", icon: ExternalLink },
                    { name: "Downloads", icon: Download },
                    { name: "Support Center", icon: HeadphonesIcon },
                    { name: "Community", icon: Users },
                    { name: "Webinars", icon: Play },
                    { name: "White Papers", icon: BookOpen },
                    { name: "ROI Calculator", icon: BarChart3 }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <item.icon className="h-4 w-4 text-muted-foreground mr-2" />
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div 
              className="border-t border-border pt-12 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest insights on Frappe HRMS and CRM trends, implementation tips, and open-source business solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button className="sm:w-auto">Subscribe</Button>
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
                  <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
                  <a href="#" className="hover:text-foreground transition-colors">Security</a>
                  <a href="#" className="hover:text-foreground transition-colors">Compliance</a>
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
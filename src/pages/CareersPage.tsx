import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, Briefcase, GraduationCap, Heart, Zap, Globe, Linkedin, Twitter, Facebook, Instagram, Youtube, Building2, TrendingUp, BookOpen, Award, BarChart3, FileText, ExternalLink, Download, HeadphonesIcon, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frappe Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for a passionate Frappe developer to join our team and help build cutting-edge HRMS and CRM solutions.",
    requirements: [
      "3+ years of experience with Frappe/ERPNext development",
      "Strong Python and JavaScript skills",
      "Experience with MySQL/PostgreSQL databases",
      "Knowledge of web technologies (HTML, CSS, React)",
      "Experience with REST APIs and integrations",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Flexible remote work",
      "Health insurance and dental",
      "Professional development budget",
      "Latest equipment and tools"
    ]
  },
  {
    id: 2,
    title: "Implementation Specialist",
    department: "Customer Success",
    location: "Remote / New York",
    type: "Full-time",
    experience: "2-4 years",
    description: "Help our clients successfully implement Frappe HRMS and CRM solutions with your technical expertise and customer service skills.",
    requirements: [
      "2+ years in software implementation or consulting",
      "Experience with ERP systems (Frappe preferred)",
      "Strong client communication skills",
      "Project management experience",
      "Technical troubleshooting abilities",
      "Willingness to travel (10-20%)"
    ],
    benefits: [
      "Competitive salary and bonuses",
      "Travel opportunities",
      "Health insurance and dental",
      "Professional development budget",
      "Flexible work arrangements"
    ]
  },
  {
    id: 3,
    title: "Sales Development Representative",
    department: "Sales",
    location: "San Francisco",
    type: "Full-time",
    experience: "1-3 years",
    description: "Join our sales team to help businesses discover the power of Frappe solutions and grow our customer base.",
    requirements: [
      "1+ years in B2B sales or SDR role",
      "Experience with CRM systems",
      "Strong communication and presentation skills",
      "Self-motivated and goal-oriented",
      "Basic understanding of business software",
      "Bachelor's degree preferred"
    ],
    benefits: [
      "Base salary + commission",
      "Health insurance and dental",
      "Sales training and development",
      "Career advancement opportunities",
      "Team building events"
    ]
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "2-4 years",
    description: "Design intuitive and beautiful user experiences for our Frappe customizations and client solutions.",
    requirements: [
      "2+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Experience with design systems",
      "Understanding of user research methods",
      "Portfolio demonstrating web application design",
      "Knowledge of front-end development principles"
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote work flexibility",
      "Health insurance and dental",
      "Design tools and software budget",
      "Creative freedom and ownership"
    ]
  }
];

const companyValues = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex business problems.",
    icon: <Zap className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication to achieve our goals.",
    icon: <Users className="w-8 h-8 text-green-500" />
  },
  {
    title: "Growth",
    description: "We invest in our team's professional development and provide opportunities for career advancement.",
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />
  },
  {
    title: "Work-Life Balance",
    description: "We support flexible work arrangements and prioritize our team's well-being.",
    icon: <Heart className="w-8 h-8 text-pink-500" />
  }
];

function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We\'ll get back to you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
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
              Join our <br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">team.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a forward-thinking team that's transforming businesses through innovative 
              Frappe HRMS and CRM solutions. We're looking for passionate individuals who share our vision.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-20 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn About Our Culture
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Culture</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground leading-relaxed">
                What makes Beforth a great place to work
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Open <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground leading-relaxed">
                Find your next career opportunity with us
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJobExpansion(job.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {job.experience}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      </div>
                      <div className="ml-4">
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-6 h-6 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <motion.div 
                      className="border-t border-border p-6 bg-muted/30"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-muted-foreground">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <Button 
                          size="lg" 
                          className="w-full sm:w-auto"
                          onClick={() => {
                            setApplicationData(prev => ({ ...prev, position: job.title }));
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply for this position
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Apply <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Now</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground leading-relaxed">
                Ready to join our team? Send us your application
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <form className="space-y-6 md:space-y-8" onSubmit={handleApplicationSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <Input 
                        placeholder="Full Name" 
                        name="name" 
                        value={applicationData.name}
                        onChange={handleInputChange} 
                        required 
                      />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={applicationData.email}
                        onChange={handleInputChange} 
                        required 
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        name="phone" 
                        value={applicationData.phone}
                        onChange={handleInputChange} 
                        required 
                      />
                      <select 
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                        name="position" 
                        value={applicationData.position}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Position</option>
                        {jobOpenings.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                      <select 
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                        name="experience" 
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Years of Experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Resume/CV</label>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    <Textarea 
                      placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                      rows={4}
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="pt-4 md:pt-8 text-center">
                      <Button size="lg" className="w-full sm:w-auto" type="submit">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
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
              Don't see the right fit?
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center">
                  Get in Touch
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/about" className="flex items-center">
                  Learn More About Us
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

export default CareersPage;

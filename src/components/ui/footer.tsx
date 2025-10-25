import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Building2, Users, TrendingUp, Award, Mail, FileText } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Logo } from './logo';

export function Footer() {
  return (
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
              <Logo />
              <span className="text-2xl font-semibold text-foreground">Beforth</span>
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
                  <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
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
                { name: "About Us", icon: Building2, href: "/about" },
                { name: "Our Team", icon: Users, href: "/team" },
                { name: "Careers", icon: TrendingUp, href: "/careers" },
                // { name: "News & Blog", icon: BookOpen, href: "/blog" },
                // { name: "Case Studies", icon: Award, href: "/case-studies" },
                // { name: "Partners", icon: Globe, href: "/partners" },
                // { name: "Investors", icon: BarChart3, href: "/investors" },
                { name: "Contact", icon: Mail, href: "/contact" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="h-4 w-4 text-muted-foreground mr-2" />
                  <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fun Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Fun Tools</h3>
            <ul className="space-y-3">
              {[
                { name: "Achievement Badge Generator", icon: Award, href: "/achievement-badge-generator" },
                { name: "Office Quote Generator", icon: FileText, href: "/office-quote-generator" },
                { name: "Workplace Compliment Generator", icon: Award, href: "/compliment-generator" },
                // { name: "Documentation", icon: FileText, href: "/documentation" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="h-4 w-4 text-muted-foreground mr-2" />
                  <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
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
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              <Link to="/security" className="hover:text-foreground transition-colors">Security</Link>
              <Link to="/compliance" className="hover:text-foreground transition-colors">Compliance</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2025 Beforth. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

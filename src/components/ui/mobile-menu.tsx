import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { ThemeToggle } from './theme-toggle';

interface MobileMenuProps {
  navItems: {
    name: string;
    link: string;
  }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden bg-white">
      <div className="flex items-center space-x-2 bg-white">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="relative z-50"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-background/95 backdrop-blur-md border-l shadow-lg"
            >
              <div className="flex flex-col h-full bg-white">
                <div className="flex items-center justify-between p-6 border-b bg-white">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex-1 px-6 py-8 bg-white">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.link}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </nav>
                
                <div className="p-6 border-t bg-white">
                  <Button size="lg" className="w-full" onClick={handleLinkClick}>
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
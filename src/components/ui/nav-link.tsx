import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

export function NavLink({ to, children, className = "", initial, animate, transition }: NavLinkProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <Link
        to={to}
        className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

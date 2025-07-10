import { useTheme } from "next-themes";

export function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? "/images/befu-white.png" : "/images/befu.png";
  
  return (
    <img 
      src={logoSrc} 
      alt="Beforth Logo" 
      className="h-12 w-auto"
    />
  );
}
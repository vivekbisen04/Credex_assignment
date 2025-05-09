import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold text-primary dark:text-primary">SoftSell</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors">
              How It Works
            </a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button 
              asChild 
              className="hidden md:inline-flex"
            >
              <a href="#contact">Get Started</a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden" 
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-3 pb-3 text-sm font-medium">
                <a 
                  href="#how-it-works" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                  onClick={closeMenu}
                >
                  How It Works
                </a>
                <a 
                  href="#why-choose-us" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                  onClick={closeMenu}
                >
                  Why Choose Us
                </a>
                <a 
                  href="#testimonials" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

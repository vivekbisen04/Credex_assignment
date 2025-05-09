import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.7)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Transform Unused Software Into Revenue
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            SoftSell helps businesses easily sell their unused software licenses at competitive market rates, turning idle assets into immediate capital.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              asChild
              className="px-8"
            >
              <a href="#contact">Get Your Valuation</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="px-8 border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            >
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Modern office with software license management interface */}
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Software license management" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-700" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Card, CardContent } from "@/components/ui/card";
import { Upload, Calculator, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Upload className="h-8 w-8" />,
    title: "Submit Your Licenses",
    description: "Upload your software license details through our secure portal. We support all major software vendors.",
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Get Your Valuation",
    description: "Our experts analyze market demand and provide you with a competitive quote within 24 hours.",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Get Paid Quickly",
    description: "Accept our offer and receive payment within 3 business days via your preferred payment method.",
  },
];

const HowItWorks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our streamlined process makes selling software licenses simple and profitable.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-gray-100 dark:border-gray-700 shadow-md hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

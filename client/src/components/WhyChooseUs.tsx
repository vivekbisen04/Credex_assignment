import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Best Market Rates",
    description: "Get up to 80% of the original purchase price for your software licenses.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Process",
    description: "Our platform ensures compliant license transfers with full legal documentation.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Transactions",
    description: "Complete the entire process in as little as 3 business days from valuation to payment.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Team",
    description: "Our specialists have 10+ years of experience in software licensing and compliance.",
  },
];

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We stand apart from other software resellers with our unique advantages.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-50 dark:bg-gray-800 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
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

export default WhyChooseUs;

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const softwareVendors = [
  "Microsoft",
  "Adobe",
  "Oracle",
  "Autodesk",
  "VMware",
  "SAP",
];

const SupportedSoftware = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Supported Software</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We work with all major software vendors and platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {softwareVendors.map((vendor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-20 bg-white dark:bg-gray-700 shadow-sm">
                <CardContent className="p-4 h-full flex items-center justify-center">
                  <div className="text-center font-semibold text-gray-500 dark:text-gray-300">
                    {vendor}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedSoftware;

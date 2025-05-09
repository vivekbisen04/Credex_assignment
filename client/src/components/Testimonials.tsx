import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechNova Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "SoftSell made it incredibly easy to recover costs on our unused Adobe Creative Cloud licenses. Their valuation was fair and the payment was processed quickly. I highly recommend their service to any company looking to optimize their software expenses.",
  },
  {
    name: "Michael Chen",
    role: "IT Director, Global Retail Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "After downsizing our operations, we had excess Microsoft and Oracle licenses. SoftSell helped us turn those idle assets into cash flow when we needed it most. The process was transparent and their team was knowledgeable about compliance requirements.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hear from businesses that have successfully sold their software licenses with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <CardContent className="p-8">
                  {/* Quote mark */}
                  <div className="absolute top-3 left-3 text-gray-200 dark:text-gray-700 text-6xl font-serif opacity-50 select-none">
                    "
                  </div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <Avatar className="w-16 h-16 border-2 border-primary mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 relative z-10">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

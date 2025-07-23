import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Services = () => {
  const serviceCategories = [
    {
      title: "ATL Services",
      description: "Above-the-line marketing for mass reach",
      services: ["TV / Radio / Print Campaigns", "Outdoor Hoardings", "Transit Advertisements", "Media Buying + Budget Estimator"]
    },
    {
      title: "BTL Services", 
      description: "Below-the-line targeted marketing",
      services: ["Dealer Events", "School Promotions", "Activation Campaigns", "On-ground Staff Deployment"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital solutions",
      services: ["Meta & Google Ads", "Local SEO & Maps", "Website & App Design", "CRM + Lead Nurturing"]
    },
    {
      title: "Onsite Campaigns",
      description: "Direct engagement strategies",
      services: ["Mobile Van Branding", "Product Demonstrations", "Festive Event Promotions", "Survey & Feedback Systems"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gradient mb-8">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Comprehensive 360° Marketing Services designed to transform your brand and drive measurable results
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass h-full">
                  <CardHeader>
                    <CardTitle className="text-gradient">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
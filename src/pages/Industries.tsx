import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Industries = () => {
  const industries = [
    {
      title: "Automotive",
      description: "Comprehensive marketing solutions for automotive dealerships and manufacturers",
      highlights: ["Lead Generation", "Showroom Traffic", "Test Drive Campaigns"]
    },
    {
      title: "Retail & FMCG",
      description: "Brand visibility and customer acquisition strategies",
      highlights: ["Store Promotions", "Product Launches", "Customer Retention"]
    },
    {
      title: "Real Estate",
      description: "Property marketing and buyer engagement solutions",
      highlights: ["Property Showcases", "Virtual Tours", "Lead Qualification"]
    },
    {
      title: "Education",
      description: "Student recruitment and institutional branding",
      highlights: ["Admission Campaigns", "Brand Building", "Student Engagement"]
    },
    {
      title: "Healthcare",
      description: "Patient acquisition and healthcare marketing",
      highlights: ["Patient Education", "Service Promotion", "Trust Building"]
    },
    {
      title: "Hospitality",
      description: "Guest experience and booking optimization",
      highlights: ["Booking Campaigns", "Guest Reviews", "Event Promotion"]
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
          <h1 className="text-4xl font-bold text-gradient mb-8">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Specialized marketing solutions tailored for diverse industry verticals
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass h-full hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-gradient">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {industry.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
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

export default Industries;
import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Portfolio = () => {
  const projects = [
    {
      title: "Automotive Dealership Campaign",
      client: "Premium Motors",
      category: "Automotive",
      description: "Comprehensive digital marketing campaign resulting in 300% increase in test drives",
      results: ["300% increase in test drives", "45% boost in showroom visits", "₹2.5Cr revenue generated"],
      tags: ["Google Ads", "Facebook Marketing", "Local SEO"]
    },
    {
      title: "Real Estate Launch",
      client: "Green Valley Homes",
      category: "Real Estate", 
      description: "Multi-channel campaign for luxury residential project launch",
      results: ["85% units sold in 6 months", "500+ qualified leads", "₹50Cr project value"],
      tags: ["ATL", "Digital", "BTL Activation"]
    },
    {
      title: "Healthcare Awareness Campaign",
      client: "MediCare Plus",
      category: "Healthcare",
      description: "Health awareness and patient acquisition campaign",
      results: ["200% increase in appointments", "40% growth in patient base", "Enhanced brand trust"],
      tags: ["Content Marketing", "Social Media", "Community Outreach"]
    },
    {
      title: "FMCG Product Launch",
      client: "Fresh Foods",
      category: "FMCG",
      description: "Regional product launch with integrated marketing approach",
      results: ["150% sales target achieved", "Market penetration in 5 cities", "Brand recall increased by 60%"],
      tags: ["TV Campaign", "Retail Activation", "Influencer Marketing"]
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
          <h1 className="text-4xl font-bold text-gradient mb-8">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Successful campaigns and measurable results across diverse industries
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-gradient">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardDescription className="font-medium text-foreground">{project.client}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result) => (
                            <li key={result} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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

export default Portfolio;
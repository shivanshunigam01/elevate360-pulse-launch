import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Explore emerging trends and technologies shaping the digital marketing landscape",
      category: "Digital Trends",
      readTime: "5 min read",
      date: "Dec 15, 2023"
    },
    {
      title: "ROI-Driven Marketing: Measuring What Matters",
      excerpt: "A comprehensive guide to tracking and optimizing marketing performance",
      category: "Analytics",
      readTime: "8 min read", 
      date: "Dec 10, 2023"
    },
    {
      title: "Local SEO Strategies for Small Businesses",
      excerpt: "Boost your local visibility and attract nearby customers",
      category: "SEO",
      readTime: "6 min read",
      date: "Dec 5, 2023"
    },
    {
      title: "Social Media Marketing for B2B Companies",
      excerpt: "Effective strategies to leverage social platforms for business growth",
      category: "Social Media",
      readTime: "7 min read",
      date: "Nov 28, 2023"
    },
    {
      title: "Content Marketing That Converts",
      excerpt: "Creating compelling content that drives engagement and sales",
      category: "Content Strategy",
      readTime: "9 min read",
      date: "Nov 20, 2023"
    },
    {
      title: "PPC Campaign Optimization Techniques",
      excerpt: "Advanced strategies to maximize your pay-per-click advertising ROI",
      category: "PPC",
      readTime: "10 min read",
      date: "Nov 15, 2023"
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
          <h1 className="text-4xl font-bold text-gradient mb-8">Marketing Insights & Blog</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Stay updated with the latest marketing trends, strategies, and industry insights
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-primary text-sm font-medium hover:underline">
                        Read More →
                      </span>
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

export default Blog;
import { Header } from "@/components/Header"
import { motion } from "framer-motion"

const About = () => {
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
          <h1 className="text-4xl font-bold text-gradient mb-8">About Elevate360 Digital</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded with a vision to transform brands through comprehensive 360° marketing solutions, 
                Elevate360 Digital has emerged as a leading digital marketing agency that seamlessly integrates 
                traditional and digital marketing channels.
              </p>
              <p className="text-muted-foreground">
                We specialize in creating dynamic websites and marketing strategies that convert visitors 
                into loyal clients, ensuring a holistic and impactful digital presence for businesses 
                across all industries.
              </p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative marketing solutions that drive growth, 
                enhance brand visibility, and deliver measurable results through our comprehensive 
                360° approach to digital transformation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
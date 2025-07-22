import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { 
  Target, 
  TrendingUp, 
  Users, 
  Database, 
  Globe, 
  MapPin,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Target,
    title: "District-Level Strategy",
    description: "Hyperlocal market analysis and targeted campaigns for maximum regional impact.",
    expandedText: "Our AI-powered district mapping identifies untapped opportunities in your local market, creating custom strategies that speak directly to regional customer behavior patterns.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver 40% lower CPL and 300% more qualified leads.",
    expandedText: "Advanced attribution modeling and real-time optimization ensure every rupee spent generates maximum ROI through our proprietary lead scoring algorithms.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Social Media Growth",
    description: "Build authentic relationships with  your business buyers in your area.",
    expandedText: "Strategic content creation, community building, and influencer partnerships specifically designed for the  your business ecosystem in India.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "ERP/CRM Integration",
    description: "Seamless tech stack integration for automated lead nurturing and sales pipeline management.",
    expandedText: "Connect your existing systems with our advanced CRM to automate follow-ups, track customer journeys, and never lose a potential sale again.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-converting, mobile-first websites optimized for  your business sales.",
    expandedText: "Custom-built dealership websites with advanced search, inventory management, and lead capture forms optimized for  your business specifications.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: MapPin,
    title: "Hyperlocal Brand Activation",
    description: "Community-driven marketing campaigns that establish your dealership as the local leader.",
    expandedText: "Ground-level activations, local partnerships, and community events that build trust and establish your dealership as the go-to choice in your district.",
    color: "from-orange-500 to-yellow-500"
  }
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Complete Digital</span>
            <br />
            <span className="text-gradient">Transformation Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide everything your dealership needs to dominate the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, inView }: { 
  service: typeof services[0], 
  index: number, 
  inView: boolean 
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      <div className="glass p-8 rounded-2xl h-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gradient">
          {service.title}
        </h3>

        <motion.div
          animate={{ height: isExpanded ? "auto" : "auto" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            {isExpanded ? service.expandedText : service.description}
          </p>
        </motion.div>

        {/* Hover Arrow */}
        <motion.div
          className="flex items-center text-sm font-semibold text-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          Learn More <ArrowRight className="w-4 h-4 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  )
}
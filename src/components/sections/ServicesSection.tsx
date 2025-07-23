import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { 
  Tv, 
  TrendingUp, 
  Users, 
  Megaphone, 
  Globe, 
  Camera,
  ArrowRight,
  Radio,
  MapPin,
  Target,
  Smartphone,
  BarChart3
} from "lucide-react"

const services = [
  {
    icon: Tv,
    title: "ATL Services",
    description: "TV, Radio, Print campaigns and outdoor advertising with strategic media buying.",
    expandedText: "Comprehensive above-the-line marketing including TV commercials, radio spots, print advertisements, outdoor hoardings, and transit ads with optimized media buying and budget estimation.",
    color: "from-primary to-secondary"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Meta & Google Ads, Local SEO, website design, and CRM-powered lead nurturing.",
    expandedText: "Complete digital ecosystem including performance marketing on Meta and Google, local SEO optimization, professional website development, and advanced CRM integration for seamless lead management.",
    color: "from-secondary to-accent"
  },
  {
    icon: Users,
    title: "BTL Services",
    description: "Dealer events, school promotions, and on-ground staff deployment for direct engagement.",
    expandedText: "Below-the-line activations including dealer engagement events, educational institution promotions, targeted activation campaigns, and professional on-ground staff deployment for maximum impact.",
    color: "from-accent to-primary"
  },
  {
    icon: Camera,
    title: "Content & Video Production",
    description: "Professional video shoots, reels creation, and visual storytelling for your brand.",
    expandedText: "Complete video production services including promotional videos, social media reels, product demonstrations, testimonial videos, and creative visual content optimized for all platforms.",
    color: "from-secondary to-primary"
  },
  {
    icon: MapPin,
    title: "Onsite Campaigns",
    description: "Mobile van branding, product demos, and festive event promotions with feedback systems.",
    expandedText: "On-location marketing activations including branded mobile van campaigns, live product demonstrations, festive event promotions, and comprehensive survey and feedback collection systems.",
    color: "from-primary to-accent"
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description: "Data-driven insights, performance tracking, and ROI optimization across all channels.",
    expandedText: "Advanced analytics suite providing real-time performance insights, cross-channel attribution, ROI optimization, and actionable recommendations to maximize your marketing investment.",
    color: "from-accent to-secondary"
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
            <span className="text-gradient">360° Marketing</span>
            <br />
            <span className="text-gradient">Solutions Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From ATL to BTL, digital to onsite - we provide comprehensive marketing solutions that transform brands across all industries and channels.
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
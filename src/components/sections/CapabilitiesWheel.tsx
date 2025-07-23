import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { 
  Tv, 
  Target, 
  Globe, 
  MapPin, 
  Camera, 
  BarChart3,
  ArrowRight
} from "lucide-react"

const capabilities = [
  {
    id: "atl",
    icon: Tv,
    title: "ATL",
    description: "Traditional Media",
    details: "TV commercials, radio campaigns, print advertisements, and outdoor advertising for maximum reach and brand awareness.",
    color: "from-primary to-secondary",
    position: { top: "10%", left: "50%" }
  },
  {
    id: "btl",
    icon: Target,
    title: "BTL",
    description: "Below The Line",
    details: "Direct marketing, events, promotions, and targeted campaigns for specific audience engagement.",
    color: "from-secondary to-accent",
    position: { top: "30%", right: "15%" }
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital",
    description: "Online Presence",
    details: "SEO, social media, PPC advertising, email marketing, and comprehensive digital strategies.",
    color: "from-accent to-primary",
    position: { bottom: "30%", right: "15%" }
  },
  {
    id: "onsite",
    icon: MapPin,
    title: "Onsite",
    description: "Ground Activations",
    details: "Mobile campaigns, product demonstrations, field marketing, and on-location brand activations.",
    color: "from-primary to-accent",
    position: { bottom: "10%", left: "50%" }
  },
  {
    id: "reels",
    icon: Camera,
    title: "Reels",
    description: "Content Creation",
    details: "Video production, social media content, reels creation, and visual storytelling for maximum engagement.",
    color: "from-secondary to-primary",
    position: { bottom: "30%", left: "15%" }
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Data Insights",
    details: "Performance tracking, ROI analysis, customer insights, and data-driven optimization strategies.",
    color: "from-accent to-secondary",
    position: { top: "30%", left: "15%" }
  }
]

export function CapabilitiesWheel() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [activeCapability, setActiveCapability] = useState<string | null>(null)

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Interactive Capabilities</span>
            <br />
            <span className="text-gradient">Explorer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive marketing solutions. Click on any capability to explore detailed strategies and implementation approaches.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-48 h-48 glass rounded-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gradient mb-2">360°</h3>
                <p className="text-sm text-muted-foreground">Marketing<br />Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Capability Nodes */}
          <div className="relative w-full h-[600px]">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className="absolute cursor-pointer group"
                style={capability.position}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                onClick={() => setActiveCapability(capability.id)}
                onMouseEnter={() => setActiveCapability(capability.id)}
                onMouseLeave={() => setActiveCapability(null)}
              >
                <div className={`
                  w-32 h-32 glass rounded-full flex flex-col items-center justify-center
                  transition-all duration-300 group-hover:scale-110
                  ${activeCapability === capability.id ? 'scale-110 shadow-2xl' : ''}
                `}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${capability.color} p-3 mb-2`}>
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gradient">{capability.title}</h4>
                  <p className="text-xs text-muted-foreground text-center">{capability.description}</p>
                </div>

                {/* Connection Lines */}
                <div className={`
                  absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r ${capability.color} 
                  transform origin-left transition-all duration-300
                  ${activeCapability === capability.id ? 'opacity-100' : 'opacity-30'}
                `} style={{
                  transform: `rotate(${index * 60}deg) translateX(-50%)`
                }} />
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          {activeCapability && (
            <motion.div
              className="mt-12 glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const capability = capabilities.find(c => c.id === activeCapability)
                return capability ? (
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} p-4`}>
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gradient mb-2">{capability.title} Services</h3>
                      <p className="text-lg text-muted-foreground mb-4">{capability.details}</p>
                      <div className="flex items-center text-sm font-semibold text-gradient">
                        Explore {capability.title} Solutions <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                ) : null
              })()}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
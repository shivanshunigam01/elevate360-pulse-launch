import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { 
  Search, 
  Target, 
  Rocket, 
  BarChart3, 
  CheckCircle,
  ArrowRight 
} from "lucide-react"

const timelineSteps = [
  {
    week: "Week 1",
    title: "Market Analysis & Setup",
    icon: Search,
    tasks: [
      "District-level competitor analysis",
      "Customer persona development",
      "CRM integration & setup",
      "Landing page creation",
      "Tracking implementation"
    ],
    deliverable: "Complete market research report + Technical setup",
    color: "from-blue-500 to-cyan-500"
  },
  {
    week: "Week 2", 
    title: "Campaign Launch",
    icon: Target,
    tasks: [
      "Multi-channel ad campaigns launch",
      "Social media content strategy rollout",
      "Local SEO optimization",
      "WhatsApp automation setup",
      "Lead scoring system activation"
    ],
    deliverable: "Live campaigns across all channels",
    color: "from-orange-500 to-red-500"
  },
  {
    week: "Week 3",
    title: "Optimization & Scale",
    icon: Rocket,
    tasks: [
      "Performance data analysis",
      "A/B testing implementation", 
      "Audience refinement",
      "Budget reallocation",
      "Content performance optimization"
    ],
    deliverable: "Optimized campaigns with improved KPIs",
    color: "from-purple-500 to-pink-500"
  },
  {
    week: "Week 4",
    title: "Results & Growth",
    icon: BarChart3,
    tasks: [
      "Comprehensive performance review",
      "ROI analysis and reporting",
      "Scale successful campaigns",
      "Plan next month strategy",
      "Team training & handover"
    ],
    deliverable: "Complete results report + Growth roadmap",
    color: "from-green-500 to-emerald-500"
  }
]

export function TimelineSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Your 4-Week</span>
            <br />
            <span className="text-gradient">Transformation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to results in just 4 weeks. Here's exactly what happens when you partner with Elevate360.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-blue-500 to-green-500 rounded-full"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.week}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                <motion.div
                  className="glass p-8 rounded-2xl cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-gradient mb-2">
                        {step.week}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <ArrowRight 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedStep === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedStep === index ? 'auto' : 0,
                      opacity: expandedStep === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-semibold mb-3 text-gradient">Key Activities:</h4>
                      <ul className="space-y-2 mb-6">
                        {step.tasks.map((task, taskIndex) => (
                          <motion.li
                            key={task}
                            className="flex items-center text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: taskIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="p-4 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg">
                        <h5 className="font-semibold text-sm text-gradient mb-2">Week {index + 1} Deliverable:</h5>
                        <p className="text-sm">{step.deliverable}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Collapsed Preview */}
                  {expandedStep !== index && (
                    <p className="text-muted-foreground text-sm mt-4">
                      Click to see detailed breakdown of activities and deliverables
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
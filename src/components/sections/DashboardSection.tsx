import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, Target, Phone, Calendar, BarChart3 } from "lucide-react"
import CountUp from "react-countup"

const dashboardMetrics = [
  {
    label: "Active Leads",
    value: 247,
    change: "+18%",
    icon: Users,
    color: "text-blue-500"
  },
  {
    label: "Conversion Rate",
    value: 12.3,
    suffix: "%", 
    change: "+4.2%",
    icon: Target,
    color: "text-green-500"
  },
  {
    label: "Monthly Revenue",
    value: 45.2,
    prefix: "₹",
    suffix: "L",
    change: "+23%",
    icon: TrendingUp,
    color: "text-orange-500"
  },
  {
    label: "Follow-ups Today",
    value: 34,
    change: "+12",
    icon: Phone,
    color: "text-purple-500"
  }
]

const funnelSteps = [
  { stage: "Awareness", leads: 1000, percentage: 100, icon: BarChart3 },
  { stage: "Interest", leads: 450, percentage: 45, icon: Users },
  { stage: "Consideration", leads: 180, percentage: 18, icon: Target },
  { stage: "Purchase", leads: 65, percentage: 6.5, icon: TrendingUp }
]

export function DashboardSection() {
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
            <span className="text-gradient">Real-Time</span>
            <br />
            <span className="text-gradient">Performance Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get complete visibility into your marketing performance with our advanced analytics dashboard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Dashboard Overview</h3>
              <p className="text-muted-foreground">Live data from your campaigns</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="bg-background/50 p-4 rounded-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-xs text-green-500 font-medium">{metric.change}</span>
                  </div>
                  <div className="text-2xl font-bold">
                    {metric.prefix}
                    {inView && (
                      <CountUp
                        end={metric.value}
                        duration={2}
                        delay={0.5 + index * 0.1}
                        decimals={metric.suffix === "%" ? 1 : 0}
                      />
                    )}
                    {metric.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-background/30 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Weekly Performance</h4>
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  >
                    <span className="text-xs w-8">Day {i + 1}</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${Math.random() * 80 + 20}%` } : {}}
                        transition={{ duration: 1, delay: 1 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Funnel Visualization */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gradient">Lead Conversion Funnel</h3>
              <p className="text-muted-foreground">Track every lead from awareness to purchase</p>
            </div>

            {funnelSteps.map((step, index) => (
              <motion.div
                key={step.stage}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="glass p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-6 h-6 text-gradient" />
                      <h4 className="font-bold text-lg">{step.stage}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">
                        {inView && (
                          <CountUp
                            end={step.leads}
                            duration={2}
                            delay={0.8 + index * 0.2}
                          />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.percentage}% of total
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-3">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: `${step.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                    />
                  </div>
                </div>

                {/* Connecting Line */}
                {index < funnelSteps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-orange-500 to-blue-500"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
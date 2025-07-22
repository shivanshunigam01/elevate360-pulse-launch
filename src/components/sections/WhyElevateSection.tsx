import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { TrendingUp, TrendingDown, Target, Users } from "lucide-react"

const stats = [
  {
    label: "Average Cost Per Lead Reduction",
    value: 40,
    suffix: "%",
    icon: TrendingDown,
    color: "text-green-500"
  },
  {
    label: "Qualified Lead Increase",
    value: 300,
    suffix: "%",
    icon: TrendingUp,
    color: "text-blue-500"
  },
  {
    label: "Conversion Rate Improvement",
    value: 85,
    suffix: "%",
    icon: Target,
    color: "text-orange-500"
  },
  {
    label: "Customer Lifetime Value Boost",
    value: 150,
    suffix: "%",
    icon: Users,
    color: "text-purple-500"
  }
]

const comparison = [
  {
    metric: "Monthly Qualified Leads",
    before: "15-25",
    after: "75-120",
    improvement: "+400%"
  },
  {
    metric: "Cost Per Lead",
    before: "₹2,500",
    after: "₹1,200",
    improvement: "-52%"
  },
  {
    metric: "Conversion Rate",
    before: "2.5%",
    after: "8.2%",
    improvement: "+228%"
  },
  {
    metric: "Average Deal Size",
    before: "₹8.5L",
    after: "₹12.8L",
    improvement: "+51%"
  },
  {
    metric: "Sales Cycle",
    before: "45 days",
    after: "28 days",
    improvement: "-38%"
  }
]

export function WhyElevateSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Why Choose</span>
            <br />
            <span className="text-gradient">Elevate360?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just promise results – we guarantee them. Here's the measurable impact we deliver.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-8 rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold text-gradient mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={index * 0.2}
                  />
                )}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="glass p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Before vs After Elevate360
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold">Metric</th>
                  <th className="text-center py-4 px-6 font-semibold text-red-500">Before</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-500">After</th>
                  <th className="text-center py-4 px-6 font-semibold text-gradient">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <motion.tr
                    key={item.metric}
                    className="border-b border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <td className="py-4 px-6 font-medium">{item.metric}</td>
                    <td className="py-4 px-6 text-center text-red-500">{item.before}</td>
                    <td className="py-4 px-6 text-center text-green-500">{item.after}</td>
                    <td className="py-4 px-6 text-center font-bold text-gradient">
                      {item.improvement}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
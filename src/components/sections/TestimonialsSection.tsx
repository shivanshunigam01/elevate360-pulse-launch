import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Play, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Owner, Kumar Motors",
    location: "Banka, Bihar",
    rating: 5,
    text: "Elevate360 transformed our business completely. From 20 leads per month to 150+ qualified leads! Our revenue increased by 400% in just 6 months.",
    videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    metrics: "400% Revenue Growth"
  },
  {
    name: "Amit Sharma",
    position: "Director, Sharma Automobiles",
    location: "Khagaria, Bihar", 
    rating: 5,
    text: "The hyperlocal strategy worked like magic. We're now the #1 choice for commercial vehicles in our district. Best investment we ever made!",
    videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    metrics: "#1 Market Position"
  },
  {
    name: "Priya Gupta",
    position: "Sales Manager, Gupta Motors",
    location: "Munger, Bihar",
    rating: 5,
    text: "The CRM integration and automated follow-ups helped us close deals faster. Our conversion rate went from 3% to 12% within 3 months.",
    videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    metrics: "12% Conversion Rate"
  },
  {
    name: "Suresh Yadav",
    position: "CEO, Yadav Commercial Vehicles",
    location: "Begusarai, Bihar",
    rating: 5,
    text: "Digital marketing seemed impossible for our traditional business. Elevate360 made it simple and profitable. Highly recommended!",
    videoThumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    metrics: "300% Lead Increase"
  },
  {
    name: "Kavita Singh",
    position: "Owner, Singh Motors",
    location: "Saharsa, Bihar",
    rating: 5,
    text: "The social media strategy helped us connect with younger buyers. Our brand presence improved dramatically across the district.",
    videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    metrics: "500% Social Reach"
  },
  {
    name: "Vinod Thakur",
    position: "MD, Thakur Enterprises",
    location: "Darbhanga, Bihar",
    rating: 5,
    text: "ROI was visible from week 2 itself. Professional team, clear communication, and most importantly - results that speak for themselves.",
    videoThumbnail: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    metrics: "Week 2 ROI"
  }
]

export function TestimonialsSection() {
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
            <span className="text-gradient">Success Stories</span>
            <br />
            <span className="text-gradient">From Across Bihar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real dealerships. See how Elevate360 has transformed businesses across districts.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* First Row - Left to Right */}
          <motion.div
            className="flex gap-6 mb-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>

          {/* Second Row - Right to Left */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-reverse-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      className="glass p-6 rounded-2xl min-w-[400px] group cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={testimonial.videoThumbnail}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-orange-500" />
            <span className="text-xs text-orange-500 font-medium">{testimonial.location}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="flex gap-1 mb-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-xs font-semibold text-gradient">{testimonial.metrics}</div>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-muted-foreground leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Video Play Overlay */}
      <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-sm text-gradient font-medium flex items-center gap-2">
          <Play className="w-4 h-4" />
          Watch Video Testimonial
        </div>
      </div>
    </motion.div>
  )
}
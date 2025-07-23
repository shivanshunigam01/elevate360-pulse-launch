import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Elevate360 Digital
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block p-2 hover:bg-accent rounded-md">
                          Our Story
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                        Team
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                        Careers
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-gradient">ATL Services</h4>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            TV / Radio / Print Campaigns
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            Outdoor Hoardings
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            Transit Advertisements
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gradient">Digital Marketing</h4>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            Meta & Google Ads
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            Local SEO & Maps
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-2 hover:bg-accent rounded-md text-sm">
                            Website & App Design
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4 grid grid-cols-2 gap-2">
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Automotive
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Retail & FMCG
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Real Estate
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Education
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Healthcare
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 hover:bg-accent rounded-md text-sm">
                          Hospitality
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/portfolio" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Portfolio
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/blog" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="magnetic-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Free Proposal
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
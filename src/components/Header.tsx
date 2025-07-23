import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"
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
          <div className="text-2xl font-bold text-gradient">
            Elevate360 Digital
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                        Our Story
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
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          TV / Radio / Print Campaigns
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          Outdoor Hoardings
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          Transit Advertisements
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gradient">Digital Marketing</h4>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          Meta & Google Ads
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          Local SEO & Maps
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                          Website & App Design
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
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Automotive
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Retail & FMCG
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Real Estate
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Education
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Healthcare
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md text-sm">
                        Hospitality
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Portfolio
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Contact Us
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
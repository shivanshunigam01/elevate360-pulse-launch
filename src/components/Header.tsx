import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="/favicon.ico"
                alt="Elevate360 Logo"
                className="h-10 w-50 logo-image"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="magnetic-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

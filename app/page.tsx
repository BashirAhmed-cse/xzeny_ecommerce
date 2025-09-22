import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";
import Categories from "@/components/Categories";
import Trust from "@/components/Trust";
import Viral from "@/components/Viral";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}

      {/* Header */}

      {/* Hero Section */}
      <Hero />

      {/* Bestsellers Section */}

      <Bestsellers />
      {/* Relief Categories */}

      <Categories />
      {/* Trust Section */}

      <Trust />
      {/* Viral Section */}

      <Viral />
      {/* Guarantee Section */}

      <Guarantee />
      {/* FAQ Section */}
      <FAQ />

<FooterCTA />
      {/* Footer */}
   
    </div>
  );
}

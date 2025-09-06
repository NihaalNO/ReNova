import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-primary py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <div className="mb-6 inline-flex items-center rounded-full bg-background/20 px-4 py-2 backdrop-blur-sm">
            <Recycle className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Sustainable Shopping Made Easy</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Amazing
            <span className="block bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
              Second-Hand Finds
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl">
            Join thousands of eco-conscious shoppers buying and selling pre-loved items. 
            Save money, reduce waste, and find unique treasures.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Sell Your Items
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center text-primary-foreground">
            <div className="mb-2 flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-primary-foreground/80">Happy Users</div>
          </div>
          <div className="text-center text-primary-foreground">
            <div className="mb-2 flex items-center justify-center">
              <Recycle className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold">2M+</div>
            <div className="text-sm text-primary-foreground/80">Items Recycled</div>
          </div>
          <div className="text-center text-primary-foreground">
            <div className="mb-2 flex items-center justify-center">
              <Shield className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm text-primary-foreground/80">Secure Transactions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
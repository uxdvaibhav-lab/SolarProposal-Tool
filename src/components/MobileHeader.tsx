import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  // Navigation
  navigationDrawer: React.ReactNode;
  
  // Proposal Info
  proposalTitle: string;
  proposalSubtitle: string;
}

export const MobileHeader = ({ 
  navigationDrawer,
  proposalTitle,
  proposalSubtitle
}: MobileHeaderProps) => {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border safe-area-top">
      {/* Single Row: Menu + Title + Subtitle */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Icon - Left Side */}
        {navigationDrawer}
        
        {/* Proposal Title & Subtitle - Center */}
        <div className="flex-1 text-center px-3 min-w-0">
          <h1 className="text-sm font-semibold text-foreground truncate">
            {proposalTitle}
          </h1>
          <p className="text-[10px] text-muted-foreground truncate">
            {proposalSubtitle}
          </p>
        </div>
        
        {/* Empty Space - Right Side (for balance) */}
        <div className="w-9"></div>
      </div>
    </header>
  );
};

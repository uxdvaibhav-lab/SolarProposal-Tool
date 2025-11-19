import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  LayoutDashboard, 
  FileText, 
  Settings, 
  BarChart3, 
  Zap, 
  MessageSquare, 
  Users, 
  LifeBuoy,
  TrendingUp,
  DollarSign,
  Leaf,
  ChevronRight
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Proposals", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Zap, label: "Quick Actions", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Users, label: "Clients", active: false },
  { icon: Settings, label: "Settings", active: false },
];

interface NavigationDrawerProps {
  selectedFinancing: "cash" | "loan" | "lease";
  onFinancingChange: (value: "cash" | "loan" | "lease") => void;
}

export const NavigationDrawer = ({ 
  selectedFinancing,
  onFinancingChange
}: NavigationDrawerProps) => {
  return (
    <Sheet>
      {/* Header Menu Button Trigger */}
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 h-9 w-9 flex-shrink-0"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </Button>
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent 
        side="left" 
        className="w-80 p-0 overflow-y-auto"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b sticky top-0 bg-background z-10">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        
        {/* Navigation Items Section */}
        <div className="p-4 border-b">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Navigation
          </h3>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  item.active 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium text-sm flex-1 text-left">{item.label}</span>
                {item.active && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Quick Stats Section */}
        <div className="p-4 border-b">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Quick Stats
          </h3>
          <div className="space-y-3">
            {/* ROI Period */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                <div className="text-xs text-muted-foreground">ROI Period</div>
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">8.5 Years</div>
            </div>

            {/* 25-Year Savings */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div className="text-xs text-muted-foreground">25-Year Savings</div>
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$58,500</div>
            </div>

            {/* CO₂ Offset */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 border border-teal-200 dark:border-teal-800">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <div className="text-xs text-muted-foreground">CO₂ Offset</div>
              </div>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">200 Tons</div>
            </div>
          </div>
        </div>

        {/* Financing Options Section */}
        <div className="p-4 border-b">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Financing
          </h3>
          <div className="space-y-2">
            {/* Cash Purchase Option */}
            <button
              onClick={() => onFinancingChange("cash")}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                selectedFinancing === "cash"
                  ? "border-brand-orange bg-brand-orange/5 shadow-sm"
                  : "border-border hover:border-brand-orange/50 hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedFinancing === "cash"
                      ? "border-brand-orange bg-brand-orange"
                      : "border-muted-foreground"
                  }`}>
                    {selectedFinancing === "cash" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Cash Purchase</div>
                    <div className="text-xs text-muted-foreground">One-time payment</div>
                  </div>
                </div>
                {selectedFinancing === "cash" && (
                  <div className="text-xs font-medium text-brand-orange">Selected</div>
                )}
              </div>
            </button>

            {/* Solar Loan Option */}
            <button
              onClick={() => onFinancingChange("loan")}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                selectedFinancing === "loan"
                  ? "border-brand-orange bg-brand-orange/5 shadow-sm"
                  : "border-border hover:border-brand-orange/50 hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedFinancing === "loan"
                      ? "border-brand-orange bg-brand-orange"
                      : "border-muted-foreground"
                  }`}>
                    {selectedFinancing === "loan" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Solar Loan</div>
                    <div className="text-xs text-muted-foreground">Monthly payments</div>
                  </div>
                </div>
                {selectedFinancing === "loan" && (
                  <div className="text-xs font-medium text-brand-orange">Selected</div>
                )}
              </div>
            </button>

            {/* Lease Option */}
            <button
              onClick={() => onFinancingChange("lease")}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                selectedFinancing === "lease"
                  ? "border-brand-orange bg-brand-orange/5 shadow-sm"
                  : "border-border hover:border-brand-orange/50 hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedFinancing === "lease"
                      ? "border-brand-orange bg-brand-orange"
                      : "border-muted-foreground"
                  }`}>
                    {selectedFinancing === "lease" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Lease Option</div>
                    <div className="text-xs text-muted-foreground">Low monthly cost</div>
                  </div>
                </div>
                {selectedFinancing === "lease" && (
                  <div className="text-xs font-medium text-brand-orange">Selected</div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="p-4 border-b">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Next Steps
          </h3>
          <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border border-orange-200 dark:border-orange-800">
            <ol className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="font-semibold text-orange-600 dark:text-orange-400">1.</span>
                <span className="text-foreground">Review this proposal</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-600 dark:text-orange-400">2.</span>
                <span className="text-foreground">Schedule site evaluation</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-600 dark:text-orange-400">3.</span>
                <span className="text-foreground">Sign contract</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-600 dark:text-orange-400">4.</span>
                <span className="text-foreground">Begin installation</span>
              </li>
            </ol>
          </div>
        </div>


        {/* Help Button */}
        <div className="p-4 border-t bg-background">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors w-full">
            <LifeBuoy className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-medium text-sm">Help & Support</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

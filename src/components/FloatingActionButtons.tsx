import { Button } from "@/components/ui/button";
import { Eye, ArrowUpRight } from "lucide-react";

interface FloatingActionButtonsProps {
  onPreview: () => void;
  onSendProposal: () => void;
}

export const FloatingActionButtons = ({ onPreview, onSendProposal }: FloatingActionButtonsProps) => {
  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-40 safe-area-bottom">
      {/* Background backdrop */}
      <div className="absolute inset-0 -inset-x-8 -inset-y-4 rounded-3xl -z-10" />

      {/* FAB Buttons */}
      <div className="flex flex-col gap-3">
        {/* Preview Button - Secondary FAB */}
        <Button
          onClick={onPreview}
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg active:scale-95 transition-transform bg-background"
          title="Preview Proposal"
        >
          <Eye className="h-12 w-12 text-brand-orange" strokeWidth={1.5} />
        </Button>

        {/* Send Proposal Button - Primary FAB */}
        <Button
          onClick={onSendProposal}
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg bg-brand-orange active:scale-95 transition-transform text-white"
          title="Send Proposal"
        >
          <ArrowUpRight className="h-12 w-12" strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
};

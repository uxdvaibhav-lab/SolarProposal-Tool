import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fonts: Array<{ name: string; value: string; category?: string }>;
  className?: string;
}

export const FontSelector = ({ label, value, onChange, fonts, className }: FontSelectorProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-sm text-foreground">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-9 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {fonts.map((font) => (
            <SelectItem 
              key={font.value} 
              value={font.value}
              style={{ fontFamily: font.value }}
            >
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

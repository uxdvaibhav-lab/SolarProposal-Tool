import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ColorPicker = ({ label, value, onChange, className }: ColorPickerProps) => {
  const [hexValue, setHexValue] = React.useState(value);

  React.useEffect(() => {
    setHexValue(value);
  }, [value]);

  const handleHexChange = (newHex: string) => {
    setHexValue(newHex);
    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      onChange(newHex);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-sm text-foreground">{label}</Label>
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Input
            type="text"
            value={hexValue}
            onChange={(e) => handleHexChange(e.target.value.toUpperCase())}
            placeholder="#000000"
            className="h-9 pr-12 font-mono text-sm"
            maxLength={7}
          />
          <button
            type="button"
            className="absolute right-1 top-1 h-7 w-10 rounded border border-border overflow-hidden"
            style={{ backgroundColor: value }}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'color';
              input.value = value;
              input.onchange = (e) => {
                const target = e.target as HTMLInputElement;
                onChange(target.value.toUpperCase());
              };
              input.click();
            }}
          >
            <span className="sr-only">Pick color</span>
          </button>
        </div>
      </div>
    </div>
  );
};

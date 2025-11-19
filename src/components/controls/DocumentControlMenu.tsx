import { useState } from "react";
import { History, Layout, GripVertical, Eye, EyeOff, GitBranch, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Version {
  id: string;
  timestamp: string;
  date: string;
  author: string;
  authorAvatar: string;
  changeSummary: string;
  isCurrent: boolean;
}

interface Section {
  id: string;
  name: string;
  visible: boolean;
  order: number;
  thumbnail?: string;
}

interface DocumentControlMenuProps {
  versions: Version[];
  sections: Section[];
  onRestoreVersion: (versionId: string) => void;
  onReorderSections: (newOrder: string[]) => void;
  onToggleSectionVisibility: (sectionId: string) => void;
}

export const DocumentControlMenu = ({
  versions,
  sections,
  onRestoreVersion,
  onToggleSectionVisibility,
}: DocumentControlMenuProps) => {
  return (
    <div className="p-4 space-y-4">
      {/* Version History Section */}
      <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <History className="w-4 h-4" />
          Version History
        </h4>
          <Button variant="ghost" size="sm" className="text-xs h-7">
            View All
          </Button>
        </div>
        
        <ScrollArea className="h-64">
          <div className="space-y-2">
            {versions.map((version) => (
              <div 
                key={version.id}
                className={`p-3 rounded-lg border transition-all cursor-pointer hover:border-border ${
                  version.isCurrent ? 'bg-accent border-ring' : 'bg-card border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={version.authorAvatar} />
                      <AvatarFallback className="text-xs">
                        {version.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {version.author}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{version.timestamp}</p>
                    </div>
                  </div>
                  {version.isCurrent && (
                    <Badge variant="secondary" className="text-xs">
                      Current
                    </Badge>
                  )}
                </div>
              <p className="text-sm text-muted-foreground mb-2 break-words">
                {version.changeSummary}
              </p>
                {!version.isCurrent && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      <GitBranch className="w-3 h-3 mr-1" />
                      Compare
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-7 text-xs"
                      onClick={() => onRestoreVersion(version.id)}
                    >
                      <RotateCcw className="w-3 h-3 mr-1" />
                      Restore
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      {/* Section Sequencing */}
      <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <Layout className="w-4 h-4" />
          Section Order
        </h4>
          <Button variant="ghost" size="sm" className="text-xs h-7">
            Reset
          </Button>
        </div>
        
        <div className="space-y-1">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
              
              <span className="text-sm text-foreground flex-1">{section.name}</span>
              
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onToggleSectionVisibility(section.id)}
              >
                {section.visible ? (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

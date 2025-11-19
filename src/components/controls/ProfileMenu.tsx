import { Settings, HelpCircle, Keyboard, Sparkles, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  initials: string;
}

interface ProfileMenuProps {
  user: User;
  onSignOut: () => void;
}

export const ProfileMenu = ({ user, onSignOut }: ProfileMenuProps) => {
  return (
    <div className="p-2">
      {/* User Info */}
      <div className="flex items-center gap-3 p-2 mb-2">
        <Avatar className="w-10 h-10">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="text-sm">{user.initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        </div>
      </div>

      <Separator className="my-2" />

      {/* Menu Items */}
      <DropdownMenuItem>
        <Settings className="w-4 h-4 mr-2" />
        Account Settings
      </DropdownMenuItem>
      <DropdownMenuItem>
        <HelpCircle className="w-4 h-4 mr-2" />
        Help & Documentation
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Sparkles className="w-4 h-4 mr-2" />
        What's New
      </DropdownMenuItem>

      <Separator className="my-2" />

      {/* Sign Out */}
      <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={onSignOut}>
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </DropdownMenuItem>
    </div>
  );
};

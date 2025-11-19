import { Users, MessageSquare, UserPlus, MessageCircle, CheckCircle, AlertCircle, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  initials: string;
}

interface Collaborator extends User {
  online: boolean;
  currentSection?: string | null;
}

interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  section: string;
  timestamp: string;
  resolved: boolean;
  read: boolean;
  replies: number;
  mentions: string[];
}

interface CollaborationMenuProps {
  currentUser: User;
  collaborators: Collaborator[];
  comments: Comment[];
  onInviteCollaborator: (email: string, role: string) => void;
  onRemoveCollaborator: (userId: string) => void;
  onResolveComment: (commentId: string) => void;
  onJumpToComment: (commentId: string) => void;
}

export const CollaborationMenu = ({
  collaborators,
  comments,
  onResolveComment,
  onJumpToComment,
}: CollaborationMenuProps) => {
  const unreadCount = comments.filter(c => !c.read).length;
  const unresolvedCount = comments.filter(c => !c.resolved).length;
  const mentionsCount = comments.filter(c => c.mentions.length > 0).length;

  return (
    <div className="p-4 space-y-4">
      {/* Collaborators Section */}
      <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <Users className="w-4 h-4" />
          Team Members
          <Badge variant="secondary" className="text-xs">{collaborators.length}</Badge>
        </h4>
      </div>
        
        <div className="space-y-2 mb-3">
          {collaborators.map((collaborator) => (
            <div
              key={collaborator.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="relative">
                <Avatar className="w-8 h-8 border-2 border-background">
                  <AvatarImage src={collaborator.avatar} />
                  <AvatarFallback className="text-xs">
                    {collaborator.initials}
                  </AvatarFallback>
                </Avatar>
                {collaborator.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-foreground truncate">
              {collaborator.name}
            </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                    {collaborator.role}
                  </Badge>
                  {collaborator.online && collaborator.currentSection && (
                    <p className="text-xs text-muted-foreground truncate">
                      Viewing: {collaborator.currentSection}
                    </p>
                  )}
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Change Role</DropdownMenuItem>
                  <DropdownMenuItem>Send Message</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Remove Access
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
        
        <Button variant="outline" size="sm" className="w-full">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Team Member
        </Button>
      </div>

      <Separator />

      {/* Comments & Feedback Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Comments
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount} new
              </Badge>
            )}
          </h4>
          <Button variant="ghost" size="sm" className="text-xs h-7">
            View All
          </Button>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-1 mb-3 border-b border-border">
          <Button variant="ghost" size="sm" className="h-8 text-xs border-b-2 border-foreground rounded-none">
            All ({comments.length})
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground rounded-none hover:text-foreground">
            Unresolved ({unresolvedCount})
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground rounded-none hover:text-foreground">
            Mentions ({mentionsCount})
          </Button>
        </div>
        
        <ScrollArea className="h-64">
          <div className="space-y-2">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all hover:border-muted-foreground ${
                  !comment.read ? 'bg-accent border-ring' : 'bg-card border-border'
                }`}
                onClick={() => onJumpToComment(comment.id)}
              >
                <div className="flex items-start gap-2 mb-2">
                  <Avatar className="w-6 h-6 mt-0.5">
                    <AvatarImage src={comment.authorAvatar} />
                    <AvatarFallback className="text-xs">
                      {comment.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground">
                        {comment.author}
                      </p>
                      <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1 break-words">{comment.content}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">
                        {comment.section}
                      </Badge>
                      {comment.replies > 0 && (
                        <span className="text-xs text-muted-foreground">
                          {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
                        </span>
                      )}
                      {comment.resolved ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-orange-600" />
                      )}
                    </div>
                  </div>
                </div>
                
                {!comment.resolved && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onResolveComment(comment.id);
                    }}
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Mark as Resolved
                  </Button>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <Button variant="outline" size="sm" className="w-full mt-3">
          <MessageCircle className="w-4 h-4 mr-2" />
          Add New Comment
        </Button>
      </div>
    </div>
  );
};

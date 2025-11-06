import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card } from "../ui/cardProfile";
import { Trophy, Target, CheckCircle2, Award } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  username: string;
  rank: string;
  avatar: string;
  stats: {
    solved: number;
    total: number;
    easy: number;
    medium: number;
    hard: number;
    ranking: number;
  };
}

export function ProfileHeader({
  name,
  username,
  rank,
  avatar,
  stats,
}: ProfileHeaderProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Badge className="mt-3" variant="secondary">
            <Award className="w-3 h-3 mr-1" />
            {rank}
          </Badge>
        </div>

        <div className="flex-1">
          <h1 className="mb-1">{name}</h1>
          <p className="text-muted-foreground mb-4">@{username}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-muted-foreground text-sm">Solved</div>
                <div>
                  {stats.solved}/{stats.total}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="text-muted-foreground text-sm">Ranking</div>
                <div>#{stats.ranking.toLocaleString()}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-muted-foreground text-sm">Easy</div>
                <div>{stats.easy}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-muted-foreground text-sm">Medium</div>
                <div>{stats.medium}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-500" />
            <div>
              <span className="text-muted-foreground text-sm">Hard: </span>
              <span>{stats.hard}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

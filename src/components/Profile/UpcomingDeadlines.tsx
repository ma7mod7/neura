import { Card } from "../ui/cardProfile";
import { Badge } from "../ui/badge";
import { Clock, AlertCircle } from "lucide-react";

interface Deadline {
  id: string;
  title: string;
  contest: string;
  date: Date;
  isUrgent: boolean;
}

interface UpcomingDeadlinesProps {
  deadlines: Deadline[];
}

export function UpcomingDeadlines({ deadlines }: UpcomingDeadlinesProps) {
  const formatTimeRemaining = (date: Date) => {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) {
      return `${days}d ${hours}h`;
    }
    return `${hours}h`;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-purple-500" />
        <h2>Upcoming Deadlines</h2>
      </div>

      <div className="space-y-3">
        {deadlines.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">
            No upcoming deadlines
          </p>
        ) : (
          deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {deadline.isUrgent && (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                    <h3 className="text-sm">{deadline.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {deadline.contest}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {deadline.date.toLocaleDateString()} at{" "}
                    {deadline.date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <Badge
                  variant={deadline.isUrgent ? "destructive" : "secondary"}
                >
                  {formatTimeRemaining(deadline.date)}
                </Badge>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}

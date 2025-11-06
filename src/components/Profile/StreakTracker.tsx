import { Card } from "../ui/cardProfile";
import { Flame, Calendar, TrendingUp } from "lucide-react";

interface StreakTrackerProps {
  currentStreak: number;
  maxStreak: number;
  totalActiveDays: number;
}

export function StreakTracker({
  currentStreak,
  maxStreak,
  totalActiveDays,
}: StreakTrackerProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-orange-500" />
        <h2>Streak Record</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-lg bg-muted">
          <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
          <div className="text-muted-foreground text-sm">Current Streak</div>
          <div className="mt-1">{currentStreak} days</div>
        </div>

        <div className="text-center p-4 rounded-lg bg-muted">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
          <div className="text-muted-foreground text-sm">Max Streak</div>
          <div className="mt-1">{maxStreak} days</div>
        </div>

        <div className="text-center p-4 rounded-lg bg-muted">
          <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <div className="text-muted-foreground text-sm">Active Days</div>
          <div className="mt-1">{totalActiveDays} days</div>
        </div>
      </div>
    </Card>
  );
}

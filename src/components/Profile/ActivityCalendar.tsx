import { Card } from "../ui/cardProfile";
import { Calendar } from "lucide-react";

interface ActivityCalendarProps {
  activityData: { [date: string]: number };
}

export function ActivityCalendar({ activityData }: ActivityCalendarProps) {
  // Generate calendar for the last 12 weeks
  const weeks = 12;
  const days = weeks * 7;
  const today = new Date();
  const calendarData: { date: Date; count: number }[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    calendarData.push({
      date,
      count: activityData[dateStr] || 0,
    });
  }

  const getColor = (count: number) => {
    if (count === 0) return "bg-muted";
    if (count <= 2) return "bg-green-200 dark:bg-green-900";
    if (count <= 4) return "bg-green-400 dark:bg-green-700";
    if (count <= 6) return "bg-green-500 dark:bg-green-600";
    return "bg-green-600 dark:bg-green-500";
  };

  const weekRows: { date: Date; count: number }[][] = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    weekRows.push(calendarData.slice(i, i + 7));
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-blue-500" />
        <h2>Submission Activity</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1">
          {weekRows.map((week, weekIndex) => (
            <div key={weekIndex} className="flex gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
                  title={`${day.date.toDateString()}: ${day.count} submissions`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-muted" />
            <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900" />
            <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700" />
            <div className="w-3 h-3 rounded-sm bg-green-500 dark:bg-green-600" />
            <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500" />
          </div>
          <span>More</span>
        </div>
      </div>
    </Card>
  );
}

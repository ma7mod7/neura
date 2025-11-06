import { Card } from "../ui/cardProfile";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp } from "lucide-react";

interface ProgressData {
  date: string;
  rating: number;
  level: string;
}

interface ProgressChartProps {
  data: ProgressData[];
}

export function ProgressChart({ data }: ProgressChartProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-500" />
        <h2>Progress Levels</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="date"
            className="text-xs"
            tick={{ fill: "currentColor" }}
          />
          <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Area
            type="monotone"
            dataKey="rating"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
        <div className="text-center p-2 rounded bg-gray-100 dark:bg-gray-800">
          <div className="text-xs text-muted-foreground">Newbie</div>
          <div className="text-sm">0-999</div>
        </div>
        <div className="text-center p-2 rounded bg-green-100 dark:bg-green-900">
          <div className="text-xs text-muted-foreground">Pupil</div>
          <div className="text-sm">1000-1199</div>
        </div>
        <div className="text-center p-2 rounded bg-cyan-100 dark:bg-cyan-900">
          <div className="text-xs text-muted-foreground">Specialist</div>
          <div className="text-sm">1200-1399</div>
        </div>
        <div className="text-center p-2 rounded bg-blue-100 dark:bg-blue-900">
          <div className="text-xs text-muted-foreground">Expert</div>
          <div className="text-sm">1400-1599</div>
        </div>
        <div className="text-center p-2 rounded bg-purple-100 dark:bg-purple-900">
          <div className="text-xs text-muted-foreground">Master</div>
          <div className="text-sm">1600+</div>
        </div>
      </div>
    </Card>
  );
}

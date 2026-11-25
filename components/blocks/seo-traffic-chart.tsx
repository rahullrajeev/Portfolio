"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export interface TrafficPoint {
  name: string;
  traffic: number;
}

export default function SeoTrafficChart({ data }: { data: TrafficPoint[] }) {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#71717a" }}
            dy={5}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#71717a" }} />
          <RechartsTooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #27272a",
              backgroundColor: "#09090b",
              color: "#f4f4f5",
              fontSize: "12px",
            }}
          />
          <Area
            type="monotone"
            dataKey="traffic"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTraffic)"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

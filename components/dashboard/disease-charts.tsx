"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const diseaseData = [
  { month: "Jan", Dengue: 120, Malaria: 85, TB: 45, COVID: 200 },
  { month: "Feb", Dengue: 98, Malaria: 72, TB: 52, COVID: 180 },
  { month: "Mar", Dengue: 86, Malaria: 68, TB: 48, COVID: 150 },
  { month: "Apr", Dengue: 140, Malaria: 95, TB: 42, COVID: 120 },
  { month: "May", Dengue: 200, Malaria: 120, TB: 38, COVID: 95 },
  { month: "Jun", Dengue: 280, Malaria: 180, TB: 35, COVID: 78 },
  { month: "Jul", Dengue: 350, Malaria: 220, TB: 40, COVID: 65 },
  { month: "Aug", Dengue: 310, Malaria: 195, TB: 44, COVID: 55 },
  { month: "Sep", Dengue: 240, Malaria: 150, TB: 50, COVID: 48 },
  { month: "Oct", Dengue: 180, Malaria: 110, TB: 55, COVID: 42 },
  { month: "Nov", Dengue: 130, Malaria: 80, TB: 58, COVID: 38 },
  { month: "Dec", Dengue: 105, Malaria: 65, TB: 60, COVID: 35 },
]

const COLORS = {
  Dengue: "var(--color-chart-5)",
  Malaria: "var(--color-chart-1)",
  TB: "var(--color-chart-4)",
  COVID: "var(--color-chart-3)",
}

export function DiseaseCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Disease Trends</CardTitle>
        <CardDescription>
          Monthly reported cases across Solapur (12-month view)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={diseaseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  color: "var(--color-foreground)",
                }}
              />
              <Legend />
              {Object.entries(COLORS).map(([key, color]) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stackId="1"
                  stroke={color}
                  fill={color}
                  fillOpacity={0.3}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

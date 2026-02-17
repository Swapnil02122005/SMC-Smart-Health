"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

const resourceData = [
  { category: "Doctors", allocated: 180, required: 220 },
  { category: "Nurses", allocated: 420, required: 500 },
  { category: "Beds", allocated: 1500, required: 1800 },
  { category: "Ambulances", allocated: 35, required: 50 },
  { category: "Ventilators", allocated: 60, required: 80 },
]

const budgetData = [
  { name: "Infrastructure", value: 35 },
  { name: "Human Resources", value: 25 },
  { name: "Technology", value: 20 },
  { name: "Medicine & Supplies", value: 15 },
  { name: "Training", value: 5 },
]

const PIE_COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
]

export function ResourceAllocation() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Resource Gap Analysis</CardTitle>
          <CardDescription>
            Allocated vs. required resources across Solapur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-border)"
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                />
                <YAxis
                  dataKey="category"
                  type="category"
                  tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                  width={90}
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
                <Bar
                  dataKey="allocated"
                  fill="var(--color-chart-1)"
                  radius={[0, 4, 4, 0]}
                  name="Allocated"
                />
                <Bar
                  dataKey="required"
                  fill="var(--color-chart-3)"
                  radius={[0, 4, 4, 0]}
                  name="Required"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Budget Distribution</CardTitle>
          <CardDescription>
            Proposed budget allocation for Smart Health initiative
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {budgetData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    color: "var(--color-foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

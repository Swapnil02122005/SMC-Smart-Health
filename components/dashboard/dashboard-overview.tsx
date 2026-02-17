"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Stethoscope,
  AlertTriangle,
  Bed,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

const metrics = [
  {
    label: "Active Cases",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: AlertTriangle,
    description: "Across all 72 wards",
  },
  {
    label: "OPD Visits Today",
    value: "4,523",
    change: "+8%",
    trend: "up",
    icon: Stethoscope,
    description: "85 health facilities",
  },
  {
    label: "Beds Available",
    value: "1,234",
    change: "-3%",
    trend: "down",
    icon: Bed,
    description: "78% occupancy rate",
  },
  {
    label: "Vaccinations (Week)",
    value: "12,456",
    change: "+23%",
    trend: "up",
    icon: Users,
    description: "Target: 15,000/week",
  },
]

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <metric.icon className="h-5 w-5 text-primary" />
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  metric.trend === "up"
                    ? "text-chart-2"
                    : "text-destructive"
                }`}
              >
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-sm font-medium text-foreground">{metric.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {metric.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

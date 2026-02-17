"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Brain, TrendingUp } from "lucide-react"

const predictionData = [
  { week: "W1", actual: 120, predicted: 115 },
  { week: "W2", actual: 135, predicted: 130 },
  { week: "W3", actual: 148, predicted: 155 },
  { week: "W4", actual: 162, predicted: 160 },
  { week: "W5", actual: null, predicted: 175 },
  { week: "W6", actual: null, predicted: 190 },
  { week: "W7", actual: null, predicted: 185 },
  { week: "W8", actual: null, predicted: 170 },
]

const riskPredictions = [
  { zone: "Murarji Peth", disease: "Dengue", probability: 89, trend: "Rising" },
  { zone: "Kumatha Naka", disease: "Gastro", probability: 76, trend: "Rising" },
  { zone: "Budhwar Peth", disease: "Malaria", probability: 62, trend: "Stable" },
  { zone: "Akkalkot Road", disease: "Dengue", probability: 54, trend: "Declining" },
]

export function AIPredictions() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Brain className="h-5 w-5 text-primary" />
            AI Outbreak Forecast
          </CardTitle>
          <CardDescription>
            8-week dengue case prediction for Solapur (actual vs. predicted)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictionData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-border)"
                />
                <XAxis
                  dataKey="week"
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
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                  dot
                  name="Actual Cases"
                  connectNulls={false}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="var(--color-chart-5)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot
                  name="AI Predicted"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="h-5 w-5 text-chart-5" />
            Zone Risk Predictions
          </CardTitle>
          <CardDescription>
            AI-computed outbreak probability for the next 2 weeks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            {riskPredictions.map((pred) => (
              <div key={pred.zone} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {pred.zone}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({pred.disease})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        pred.trend === "Rising"
                          ? "text-chart-5 border-chart-5/20"
                          : pred.trend === "Stable"
                          ? "text-chart-4 border-chart-4/20"
                          : "text-chart-2 border-chart-2/20"
                      }
                    >
                      {pred.trend}
                    </Badge>
                    <span className="text-sm font-bold text-foreground">
                      {pred.probability}%
                    </span>
                  </div>
                </div>
                <Progress value={pred.probability} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

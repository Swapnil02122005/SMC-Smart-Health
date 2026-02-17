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

const wards = [
  {
    name: "Ward 1 - Vijapur Road",
    score: 87,
    status: "Good",
    cases: 42,
    vaccination: 92,
  },
  {
    name: "Ward 2 - Akkalkot Road",
    score: 74,
    status: "Moderate",
    cases: 68,
    vaccination: 78,
  },
  {
    name: "Ward 3 - Kumatha Naka",
    score: 62,
    status: "At Risk",
    cases: 95,
    vaccination: 65,
  },
  {
    name: "Ward 4 - Railway Lines",
    score: 81,
    status: "Good",
    cases: 38,
    vaccination: 88,
  },
  {
    name: "Ward 5 - Murarji Peth",
    score: 55,
    status: "Critical",
    cases: 120,
    vaccination: 52,
  },
  {
    name: "Ward 6 - Saat Rasta",
    score: 90,
    status: "Good",
    cases: 22,
    vaccination: 95,
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Good":
      return "bg-chart-2/10 text-chart-2 border-chart-2/20"
    case "Moderate":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    case "At Risk":
      return "bg-chart-5/10 text-chart-5 border-chart-5/20"
    case "Critical":
      return "bg-destructive/10 text-destructive border-destructive/20"
    default:
      return ""
  }
}

export function WardScorecard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Ward Health Scorecards</CardTitle>
        <CardDescription>
          Health performance index for pilot wards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {wards.map((ward) => (
            <div
              key={ward.name}
              className="flex flex-col gap-2 rounded-lg border border-border p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {ward.name}
                </span>
                <Badge variant="outline" className={getStatusColor(ward.status)}>
                  {ward.status}
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Health Score</span>
                    <span className="font-medium text-foreground">{ward.score}/100</span>
                  </div>
                  <Progress value={ward.score} className="h-2" />
                </div>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Active Cases: <span className="font-medium text-foreground">{ward.cases}</span></span>
                <span>Vaccination: <span className="font-medium text-foreground">{ward.vaccination}%</span></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

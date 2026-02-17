"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, MapPin } from "lucide-react"

const alerts = [
  {
    id: 1,
    disease: "Dengue",
    severity: "Critical",
    zone: "Murarji Peth (Ward 5)",
    time: "2 hours ago",
    message:
      "Dengue cases surged 45% in the past 72 hours. Fumigation teams deployed.",
  },
  {
    id: 2,
    disease: "Gastroenteritis",
    severity: "High",
    zone: "Kumatha Naka (Ward 3)",
    time: "5 hours ago",
    message:
      "Water contamination suspected. 15 new cases reported near Kumatha Naka.",
  },
  {
    id: 3,
    disease: "Malaria",
    severity: "Moderate",
    zone: "Akkalkot Road (Ward 2)",
    time: "12 hours ago",
    message:
      "Seasonal malaria increase detected. Awareness SMS sent to 2,400 residents.",
  },
  {
    id: 4,
    disease: "COVID-19",
    severity: "Low",
    zone: "City-Wide",
    time: "1 day ago",
    message:
      "Weekly COVID cases down 15%. Booster vaccination camp scheduled this weekend.",
  },
]

function getSeverityColor(severity: string) {
  switch (severity) {
    case "Critical":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "High":
      return "bg-chart-5/10 text-chart-5 border-chart-5/20"
    case "Moderate":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    default:
      return "bg-chart-2/10 text-chart-2 border-chart-2/20"
  }
}

export function OutbreakAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <AlertTriangle className="h-5 w-5 text-chart-5" />
          Live Outbreak Alerts
        </CardTitle>
        <CardDescription>
          Real-time alerts from AI surveillance system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-lg border border-border p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  {alert.disease}
                </span>
                <Badge
                  variant="outline"
                  className={getSeverityColor(alert.severity)}
                >
                  {alert.severity}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {alert.message}
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {alert.zone}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {alert.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

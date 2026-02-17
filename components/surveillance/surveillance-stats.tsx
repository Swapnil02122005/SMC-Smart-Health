"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Radar, AlertTriangle, MapPin, Bell } from "lucide-react"

const stats = [
  {
    icon: Radar,
    label: "Active Surveillance Zones",
    value: "24",
    description: "Across 6 pilot wards",
  },
  {
    icon: AlertTriangle,
    label: "Active Outbreaks",
    value: "3",
    description: "Dengue, Malaria, Gastro",
  },
  {
    icon: MapPin,
    label: "Geo-Tagged Reports",
    value: "1,847",
    description: "This month",
  },
  {
    icon: Bell,
    label: "SMS Alerts Sent",
    value: "5,200",
    description: "Last 7 days",
  },
]

export function SurveillanceStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="transition-all hover:shadow-md">
          <CardContent className="p-6">
            <stat.icon className="h-5 w-5 text-primary" />
            <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm font-medium text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

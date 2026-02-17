"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const zones = [
  { name: "Vijapur Road", dengue: 8, malaria: 3, gastro: 2, risk: "Low" },
  { name: "Akkalkot Road", dengue: 22, malaria: 15, gastro: 8, risk: "High" },
  { name: "Kumatha Naka", dengue: 18, malaria: 12, gastro: 15, risk: "High" },
  { name: "Railway Lines", dengue: 5, malaria: 4, gastro: 3, risk: "Low" },
  { name: "Murarji Peth", dengue: 35, malaria: 20, gastro: 22, risk: "Critical" },
  { name: "Saat Rasta", dengue: 3, malaria: 2, gastro: 1, risk: "Low" },
  { name: "Sakhar Peth", dengue: 12, malaria: 8, gastro: 6, risk: "Moderate" },
  { name: "Budhwar Peth", dengue: 28, malaria: 18, gastro: 12, risk: "High" },
]

function getCellColor(value: number) {
  if (value >= 25) return "bg-destructive/80 text-primary-foreground"
  if (value >= 15) return "bg-chart-5/70 text-primary-foreground"
  if (value >= 8) return "bg-chart-4/60 text-foreground"
  return "bg-chart-2/30 text-foreground"
}

function getRiskColor(risk: string) {
  switch (risk) {
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

export function DiseaseHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">
          Disease Cluster Heatmap
        </CardTitle>
        <CardDescription>
          Geo-tagged zone-wise disease density (cases per zone this month)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-medium text-muted-foreground">
                  Zone
                </th>
                <th className="p-3 text-center font-medium text-muted-foreground">
                  Dengue
                </th>
                <th className="p-3 text-center font-medium text-muted-foreground">
                  Malaria
                </th>
                <th className="p-3 text-center font-medium text-muted-foreground">
                  Gastro
                </th>
                <th className="p-3 text-right font-medium text-muted-foreground">
                  Risk
                </th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.name} className="border-b border-border/50">
                  <td className="p-3 font-medium text-foreground">
                    {zone.name}
                  </td>
                  <td className="p-2 text-center">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-xs font-bold ${getCellColor(
                        zone.dengue
                      )}`}
                    >
                      {zone.dengue}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-xs font-bold ${getCellColor(
                        zone.malaria
                      )}`}
                    >
                      {zone.malaria}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-xs font-bold ${getCellColor(
                        zone.gastro
                      )}`}
                    >
                      {zone.gastro}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Badge
                      variant="outline"
                      className={getRiskColor(zone.risk)}
                    >
                      {zone.risk}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded bg-chart-2/30" />
            Low (0-7)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded bg-chart-4/60" />
            Moderate (8-14)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded bg-chart-5/70" />
            High (15-24)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded bg-destructive/80" />
            Critical (25+)
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

import type { Metadata } from "next"
import { DiseaseHeatmap } from "@/components/surveillance/disease-heatmap"
import { OutbreakAlerts } from "@/components/surveillance/outbreak-alerts"
import { SurveillanceStats } from "@/components/surveillance/surveillance-stats"
import { AIPredictions } from "@/components/surveillance/ai-predictions"
import { Badge } from "@/components/ui/badge"
import { Radar } from "lucide-react"

export const metadata: Metadata = {
  title: "Disease Surveillance",
  description:
    "AI-powered disease outbreak detection with geo-tagged heatmaps and real-time alerts for Solapur Municipal Corporation.",
}

export default function SurveillancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Radar className="mr-1 h-3 w-3" />
          AI-Powered Surveillance
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Disease Surveillance & Early Detection
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          AI-based outbreak prediction using symptom trends, geo-tagged heatmaps
          for disease clusters, and automated SMS alerts integrated with IDSP.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <SurveillanceStats />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DiseaseHeatmap />
          </div>
          <OutbreakAlerts />
        </div>
        <AIPredictions />
      </div>
    </div>
  )
}

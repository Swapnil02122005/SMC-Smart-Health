import type { Metadata } from "next"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { DiseaseCharts } from "@/components/dashboard/disease-charts"
import { WardScorecard } from "@/components/dashboard/ward-scorecard"
import { ResourceAllocation } from "@/components/dashboard/resource-allocation"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard } from "lucide-react"

export const metadata: Metadata = {
  title: "Health Dashboard",
  description:
    "Real-time health analytics dashboard with ward-wise monitoring and predictive insights for Solapur Municipal Corporation.",
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <LayoutDashboard className="mr-1 h-3 w-3" />
          Real-Time Monitoring
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Health Analytics Dashboard
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          City-wide health data aggregated from 85+ hospitals, labs, and PHCs
          across 72 wards with role-based access control.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <DashboardOverview />
        <div className="grid gap-8 lg:grid-cols-2">
          <DiseaseCharts />
          <WardScorecard />
        </div>
        <ResourceAllocation />
      </div>
    </div>
  )
}

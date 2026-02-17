import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Radar,
  Smartphone,
  Building2,
  Brain,
  Rocket,
  ArrowRight,
} from "lucide-react"

const modules = [
  {
    icon: Database,
    title: "Unified Health Data Layer",
    description:
      "API-based integration with hospitals, labs, and PHCs. Standardized data format with real-time ward-wise monitoring.",
    features: ["API Integration", "Role-Based Access", "Real-time Sync"],
    href: "/dashboard",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    icon: Radar,
    title: "Disease Surveillance",
    description:
      "AI-powered outbreak prediction, geo-tagged disease heatmaps, and automated SMS alerts for high-risk zones.",
    features: ["AI Prediction", "Geo Heatmaps", "SMS Alerts"],
    href: "/surveillance",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Smartphone,
    title: "Citizen Health Platform",
    description:
      "Appointment booking, telemedicine, vaccination reminders, and emergency reporting in Marathi, Hindi & English.",
    features: ["Telemedicine", "Multilingual", "Emergency SOS"],
    href: "/services",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Building2,
    title: "Infrastructure Monitoring",
    description:
      "Real-time hospital bed availability, medicine inventory tracking, equipment health, and ambulance GPS tracking.",
    features: ["Bed Availability", "Medicine Stock", "GPS Tracking"],
    href: "/infrastructure",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Brain,
    title: "Analytics & Decision Support",
    description:
      "Predictive analytics for resource allocation, ward-level health scorecards, and vulnerability risk indices.",
    features: ["Predictive AI", "Health Scorecards", "Risk Index"],
    href: "/dashboard",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
  {
    icon: Rocket,
    title: "Phased Implementation",
    description:
      "Budget-conscious rollout: Pilot in 3 wards, expand city-wide, then optimize with AI and automation.",
    features: ["3-Phase Plan", "Open Source", "Cost Effective"],
    href: "/roadmap",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function ModulesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 text-primary">
            Core Modules
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Complete Health Ecosystem
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Six integrated modules designed for Solapur&apos;s unique public
            health challenges, built on open-source, ABDM-compliant technology.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link key={mod.title} href={mod.href} className="group">
              <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                <CardHeader>
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${mod.bgColor}`}
                  >
                    <mod.icon className={`h-5 w-5 ${mod.color}`} />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                    {mod.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {mod.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mod.features.map((f) => (
                      <Badge key={f} variant="outline" className="text-xs">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

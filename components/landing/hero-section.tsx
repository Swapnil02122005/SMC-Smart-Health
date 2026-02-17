import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
} from "lucide-react"

const stats = [
  { label: "Population Covered", value: "12L+", icon: Users },
  { label: "Health Facilities", value: "85+", icon: Activity },
  { label: "Wards Monitored", value: "72", icon: BarChart3 },
  { label: "Data Security", value: "ABDM", icon: Shield },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)_0%,transparent_50%)] opacity-5" />
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium text-primary"
          >
            <Activity className="h-3 w-3" />
            Smart Health Initiative 2025
          </Badge>

          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Smart Public Health Management for{" "}
            <span className="text-primary">Solapur</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            An integrated, technology-enabled system to improve healthcare
            accessibility, disease surveillance, infrastructure monitoring, and
            citizen engagement through data-driven digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/roadmap">Implementation Roadmap</Link>
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4"
              >
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

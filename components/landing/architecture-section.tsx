import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Brain,
  Shield,
  ArrowDown,
} from "lucide-react"

const layers = [
  {
    icon: Smartphone,
    title: "Presentation Layer",
    subtitle: "Citizen & Admin Interfaces",
    items: [
      "Mobile App (React Native)",
      "Web Dashboard (Next.js)",
      "Admin Portal",
      "Multilingual UI",
    ],
  },
  {
    icon: Globe,
    title: "API Gateway Layer",
    subtitle: "Secure Communication",
    items: [
      "RESTful APIs",
      "WebSocket for real-time",
      "OAuth 2.0 + RBAC",
      "Rate Limiting",
    ],
  },
  {
    icon: Server,
    title: "Application Layer",
    subtitle: "Business Logic & AI",
    items: [
      "Health Data Engine",
      "AI Outbreak Prediction",
      "Notification Service",
      "Telemedicine Module",
    ],
  },
  {
    icon: Database,
    title: "Data Layer",
    subtitle: "Storage & Integration",
    items: [
      "PostgreSQL (Primary DB)",
      "Redis (Caching)",
      "FHIR Health Records",
      "Time-series Analytics",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    subtitle: "AI/ML Services",
    items: [
      "Disease Pattern Analysis",
      "Resource Prediction",
      "Risk Scoring",
      "Anomaly Detection",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "Data Protection",
    items: [
      "ABDM/NDHM Compliance",
      "End-to-end Encryption",
      "Audit Logging",
      "IDSP Integration",
    ],
  },
]

export function ArchitectureSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 text-primary">
            System Architecture
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Layered Architecture Design
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A scalable, cloud-native architecture designed for phased deployment
            from 3-ward pilot to city-wide rollout.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3">
          {layers.map((layer, i) => (
            <div key={layer.title} className="flex w-full max-w-3xl flex-col items-center gap-3">
              <Card className="w-full transition-all hover:border-primary/30">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <layer.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-semibold text-foreground">
                        {layer.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {layer.subtitle}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {i < layers.length - 1 && (
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Map,
  Rocket,
  Expand,
  Brain,
  Shield,
  Server,
  Database,
  Code,
  DollarSign,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react"

const phases = [
  {
    icon: Rocket,
    title: "Phase 1: MVP Pilot",
    duration: "Months 1-6",
    status: "In Progress",
    wards: "3 Pilot Wards",
    description:
      "Launch core modules in 3 selected wards (Vijapur Road, Akkalkot Road, Kumatha Naka) to validate the system and gather feedback.",
    milestones: [
      "Unified Health Data API integration with 5 hospitals/PHCs",
      "Basic disease surveillance dashboard with heatmaps",
      "Citizen mobile app with appointment booking & telemedicine",
      "Hospital bed availability tracking",
      "SMS alert system for outbreak notifications",
      "Ward-level health scorecards for pilot wards",
    ],
    budget: "18-25 Lakhs",
  },
  {
    icon: Expand,
    title: "Phase 2: Ward-Level Expansion",
    duration: "Months 7-12",
    status: "Planned",
    wards: "All 72 Wards",
    description:
      "Scale the validated system to all 72 wards with enhanced data collection, more facility integrations, and city-wide dashboards.",
    milestones: [
      "Integrate all 85+ hospitals, labs, and PHCs",
      "City-wide disease surveillance with IDSP integration",
      "Medicine inventory tracking system across all facilities",
      "Ambulance GPS tracking with dispatch optimization",
      "Full multilingual support (Marathi, Hindi, English)",
      "Emergency reporting with response team coordination",
    ],
    budget: "40-55 Lakhs",
  },
  {
    icon: Brain,
    title: "Phase 3: AI Optimization",
    duration: "Months 12-18",
    status: "Future",
    wards: "City-Wide + Automation",
    description:
      "Deploy advanced AI/ML models for predictive analytics, automate resource allocation, and enable data-driven policy decisions.",
    milestones: [
      "AI-powered outbreak prediction with 85%+ accuracy",
      "Automated resource allocation based on demand forecasting",
      "Predictive analytics for vulnerable population identification",
      "IoT-based equipment health monitoring (prototype)",
      "ABDM/NDHM full compliance and interoperability",
      "Open data portal for researchers and policymakers",
    ],
    budget: "30-40 Lakhs",
  },
]

const techStack = [
  {
    category: "Frontend",
    icon: Code,
    items: [
      { name: "Next.js (React)", purpose: "Web Dashboard & Admin Portal" },
      { name: "React Native", purpose: "Citizen Mobile App (iOS + Android)" },
      { name: "Tailwind CSS", purpose: "Responsive UI Design" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js + Express", purpose: "API Server & Business Logic" },
      { name: "Python (FastAPI)", purpose: "AI/ML Microservices" },
      { name: "WebSocket", purpose: "Real-time Data Push" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", purpose: "Primary Relational Database" },
      { name: "Redis", purpose: "Caching & Session Management" },
      { name: "TimescaleDB", purpose: "Time-series Health Analytics" },
    ],
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    items: [
      { name: "OAuth 2.0 + RBAC", purpose: "Authentication & Authorization" },
      { name: "AES-256 Encryption", purpose: "Data at Rest & Transit" },
      { name: "ABDM/NDHM Standards", purpose: "National Health Compliance" },
    ],
  },
]

const dbSchema = [
  {
    table: "patients",
    columns: "id, aadhaar_hash, name, age, gender, ward_id, phone, created_at",
  },
  {
    table: "health_records",
    columns:
      "id, patient_id, facility_id, doctor_id, diagnosis, prescription, visit_date",
  },
  {
    table: "disease_reports",
    columns:
      "id, disease_type, ward_id, zone, cases_count, severity, reported_at, geo_lat, geo_lng",
  },
  {
    table: "facilities",
    columns:
      "id, name, type, ward_id, total_beds, available_beds, icu_beds, ventilators",
  },
  {
    table: "medicine_inventory",
    columns:
      "id, facility_id, medicine_name, stock_qty, threshold_qty, last_updated",
  },
  {
    table: "ambulances",
    columns: "id, vehicle_no, status, current_lat, current_lng, last_updated",
  },
  {
    table: "appointments",
    columns:
      "id, patient_id, facility_id, department, appointment_date, status, token_no",
  },
  {
    table: "alerts",
    columns:
      "id, alert_type, severity, zone, message, sms_sent_count, created_at",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "In Progress":
      return "bg-primary/10 text-primary border-primary/20"
    case "Planned":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export const metadata: Metadata = {
  title: "Implementation Roadmap",
  description:
    "Phased implementation plan, tech stack, database schema, and budget for Solapur Smart Public Health Management System.",
}

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Map className="mr-1 h-3 w-3" />
          Implementation Plan
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Pilot Implementation Roadmap
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          A phased, budget-conscious rollout over 6-18 months: from 3-ward MVP
          pilot to full city-wide AI-optimized deployment.
        </p>
      </div>

      {/* Phases */}
      <div className="flex flex-col gap-8">
        {phases.map((phase, i) => (
          <Card key={phase.title} id={i === 0 ? "architecture" : undefined}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <phase.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-foreground">
                      {phase.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={getStatusColor(phase.status)}
                    >
                      {phase.status}
                    </Badge>
                  </div>
                  <CardDescription className="mt-1">
                    {phase.duration} | {phase.wards}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
              <div className="flex flex-col gap-2">
                {phase.milestones.map((m) => (
                  <div key={m} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{m}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2"
                id={i === 2 ? "budget" : undefined}
              >
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Estimated Budget: {phase.budget}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      {/* Tech Stack */}
      <div id="tech-stack" className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Server className="mr-1 h-3 w-3" />
          Technology Stack
        </Badge>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Cost-Conscious Tech Stack
        </h2>
        <p className="mt-2 text-pretty text-muted-foreground">
          Built on open-source, cloud-native technologies for affordability and
          scalability.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {techStack.map((stack) => (
          <Card key={stack.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <stack.icon className="h-5 w-5 text-primary" />
                {stack.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {stack.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.purpose}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      {/* Database Schema */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Database className="mr-1 h-3 w-3" />
          Database Design
        </Badge>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Core Database Schema
        </h2>
        <p className="mt-2 text-pretty text-muted-foreground">
          PostgreSQL-based relational schema with Aadhaar-hashed patient
          identity, FHIR-compatible health records, and time-series disease
          reporting.
        </p>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 text-left font-medium text-muted-foreground">
                    Table
                  </th>
                  <th className="p-4 text-left font-medium text-muted-foreground">
                    Columns
                  </th>
                </tr>
              </thead>
              <tbody>
                {dbSchema.map((table) => (
                  <tr key={table.table} className="border-b border-border/50">
                    <td className="p-4 align-top">
                      <code className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {table.table}
                      </code>
                    </td>
                    <td className="p-4 text-xs leading-relaxed text-muted-foreground">
                      {table.columns}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Compliance & Security */}
      <div id="compliance" className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Shield className="mr-1 h-3 w-3" />
          Compliance & Security
        </Badge>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Data Security & ABDM Compliance
        </h2>
        <p className="mt-2 text-pretty text-muted-foreground">
          Designed to meet national health data standards and protect citizen
          information.
        </p>
      </div>
      <div id="security" className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Shield,
            title: "ABDM/NDHM Compliance",
            items: [
              "Ayushman Bharat Digital Mission standards",
              "FHIR-based health data interoperability",
              "Health ID (ABHA) integration support",
              "Standardized coding (ICD-10, SNOMED)",
            ],
          },
          {
            icon: Target,
            title: "Data Protection",
            items: [
              "AES-256 encryption at rest and in transit",
              "Aadhaar hashing (never stored in plain text)",
              "Role-based access control (RBAC)",
              "Complete audit trail logging",
            ],
          },
          {
            icon: Clock,
            title: "Operational Security",
            items: [
              "Automated daily backups",
              "Disaster recovery protocol",
              "API rate limiting and DDoS protection",
              "Annual third-party security audit",
            ],
          },
        ].map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

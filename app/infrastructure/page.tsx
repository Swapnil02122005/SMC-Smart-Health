"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Bed,
  Pill,
  Ambulance,
  HeartPulse,
  Thermometer,
  MapPin,
  Clock,
} from "lucide-react"

const hospitals = [
  {
    name: "Solapur Civil Hospital",
    type: "District Hospital",
    totalBeds: 450,
    available: 82,
    icu: 8,
    ventilators: 12,
    occupancy: 82,
  },
  {
    name: "Siddheshwar Hospital",
    type: "Government Hospital",
    totalBeds: 200,
    available: 45,
    icu: 5,
    ventilators: 6,
    occupancy: 78,
  },
  {
    name: "PHC - Vijapur Road",
    type: "Primary Health Centre",
    totalBeds: 30,
    available: 12,
    icu: 0,
    ventilators: 0,
    occupancy: 60,
  },
  {
    name: "PHC - Akkalkot Road",
    type: "Primary Health Centre",
    totalBeds: 25,
    available: 5,
    icu: 0,
    ventilators: 0,
    occupancy: 80,
  },
  {
    name: "PHC - Kumatha Naka",
    type: "Primary Health Centre",
    totalBeds: 20,
    available: 3,
    icu: 0,
    ventilators: 0,
    occupancy: 85,
  },
  {
    name: "Urban Health Centre - Saat Rasta",
    type: "Urban HC",
    totalBeds: 15,
    available: 8,
    icu: 0,
    ventilators: 0,
    occupancy: 47,
  },
]

const medicineInventory = [
  { name: "Paracetamol 500mg", stock: 12500, threshold: 5000, status: "Adequate" },
  { name: "ORS Packets", stock: 8200, threshold: 3000, status: "Adequate" },
  { name: "Antimalarial (Chloroquine)", stock: 3100, threshold: 2000, status: "Moderate" },
  { name: "IV Fluid (NS)", stock: 1800, threshold: 2500, status: "Low" },
  { name: "Dengue Test Kits", stock: 450, threshold: 500, status: "Critical" },
  { name: "PPE Kits", stock: 2200, threshold: 1000, status: "Adequate" },
]

const ambulances = [
  { id: "AMB-001", location: "Vijapur Road", status: "Available", lastUpdate: "2 min ago" },
  { id: "AMB-002", location: "Near Civil Hospital", status: "En Route", lastUpdate: "1 min ago" },
  { id: "AMB-003", location: "Murarji Peth", status: "On Call", lastUpdate: "5 min ago" },
  { id: "AMB-004", location: "Akkalkot Road", status: "Available", lastUpdate: "3 min ago" },
  { id: "AMB-005", location: "Saat Rasta", status: "Maintenance", lastUpdate: "1 hr ago" },
]

const infraStats = [
  { icon: Bed, label: "Total Beds", value: "1,540", sub: "Across 85+ facilities" },
  { icon: HeartPulse, label: "ICU Beds", value: "42", sub: "13 available now" },
  { icon: Thermometer, label: "Ventilators", value: "60", sub: "18 available" },
  { icon: Ambulance, label: "Ambulances", value: "35", sub: "28 operational" },
]

function getOccupancyColor(value: number) {
  if (value >= 85) return "text-destructive"
  if (value >= 70) return "text-chart-5"
  return "text-chart-2"
}

function getStockColor(status: string) {
  switch (status) {
    case "Critical":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Low":
      return "bg-chart-5/10 text-chart-5 border-chart-5/20"
    case "Moderate":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    default:
      return "bg-chart-2/10 text-chart-2 border-chart-2/20"
  }
}

function getAmbulanceColor(status: string) {
  switch (status) {
    case "Available":
      return "bg-chart-2/10 text-chart-2 border-chart-2/20"
    case "En Route":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    case "On Call":
      return "bg-primary/10 text-primary border-primary/20"
    default:
      return "bg-muted text-muted-foreground border-muted"
  }
}

export default function InfrastructurePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <Building2 className="mr-1 h-3 w-3" />
          Infrastructure Monitoring
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Public Health Infrastructure
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          Real-time monitoring of hospital beds, medicine inventory, equipment
          health, and ambulance GPS tracking across Solapur.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {infraStats.map((stat) => (
          <Card key={stat.label} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <stat.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hospital Bed Availability */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Bed className="h-5 w-5 text-primary" />
            Hospital Bed Availability
          </CardTitle>
          <CardDescription>
            Real-time bed occupancy across all Solapur health facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {hospitals.map((h) => (
              <div
                key={h.name}
                className="flex flex-col gap-2 rounded-lg border border-border p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-foreground">
                      {h.name}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({h.type})
                    </span>
                  </div>
                  <span
                    className={`text-sm font-bold ${getOccupancyColor(
                      h.occupancy
                    )}`}
                  >
                    {h.occupancy}% occupied
                  </span>
                </div>
                <Progress value={h.occupancy} className="h-2" />
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span>
                    Total Beds:{" "}
                    <span className="font-medium text-foreground">
                      {h.totalBeds}
                    </span>
                  </span>
                  <span>
                    Available:{" "}
                    <span className="font-medium text-chart-2">
                      {h.available}
                    </span>
                  </span>
                  <span>
                    ICU:{" "}
                    <span className="font-medium text-foreground">{h.icu}</span>
                  </span>
                  <span>
                    Ventilators:{" "}
                    <span className="font-medium text-foreground">
                      {h.ventilators}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medicine Inventory & Ambulances */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Medicine Inventory */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Pill className="h-5 w-5 text-primary" />
              Medicine Inventory
            </CardTitle>
            <CardDescription>
              Central stockroom tracking for essential medicines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {medicineInventory.map((med) => (
                <div
                  key={med.name}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {med.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Stock: {med.stock.toLocaleString()} | Threshold:{" "}
                      {med.threshold.toLocaleString()}
                    </p>
                  </div>
                  <Badge variant="outline" className={getStockColor(med.status)}>
                    {med.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ambulance Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Ambulance className="h-5 w-5 text-primary" />
              Ambulance GPS Tracking
            </CardTitle>
            <CardDescription>
              Live tracking of ambulance fleet across Solapur
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {ambulances.map((amb) => (
                <div
                  key={amb.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Ambulance className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {amb.id}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {amb.location}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {amb.lastUpdate}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={getAmbulanceColor(amb.status)}
                  >
                    {amb.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

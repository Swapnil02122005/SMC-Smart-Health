import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Stethoscope,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react"

const flows = {
  citizen: {
    label: "Citizen",
    icon: User,
    steps: [
      "Register on mobile app with Aadhaar or phone",
      "Book OPD appointments at nearest PHC/Hospital",
      "Access telemedicine consultations from home",
      "Receive vaccination reminders and health alerts",
      "Report health emergencies with one-tap SOS",
      "View personal health records and prescriptions",
    ],
  },
  doctor: {
    label: "Doctor",
    icon: Stethoscope,
    steps: [
      "Login to clinical dashboard with credentials",
      "View patient health records and history",
      "Conduct telemedicine video consultations",
      "Submit disease reports and lab results",
      "Receive outbreak alerts and advisories",
      "Access ward-wise epidemiological data",
    ],
  },
  admin: {
    label: "Admin",
    icon: ShieldCheck,
    steps: [
      "Access city-wide health analytics dashboard",
      "Monitor disease surveillance heatmaps",
      "Manage hospital bed and medicine inventory",
      "Allocate resources based on AI recommendations",
      "Generate ward-level health scorecards",
      "Coordinate emergency response teams",
    ],
  },
  ward: {
    label: "Ward Officer",
    icon: Building,
    steps: [
      "Monitor ward-specific health indicators",
      "Track local disease patterns and trends",
      "Manage PHC operations and staff",
      "Coordinate vaccination and health camps",
      "Submit ground reports and verify data",
      "Respond to citizen health complaints",
    ],
  },
}

export function UserFlowSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 text-primary">
            User Flows
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Role-Based Access & Workflows
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Four distinct user roles with tailored interfaces and permissions
            to ensure efficient, secure healthcare delivery.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="citizen" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-4">
              {Object.entries(flows).map(([key, flow]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-1.5"
                >
                  <flow.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{flow.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(flows).map(([key, flow]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">
                      {flow.label} Journey
                    </h3>
                    <div className="flex flex-col gap-3">
                      {flow.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </div>
                          <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm text-foreground">
                            {step}
                            {i < flow.steps.length - 1 && (
                              <ArrowRight className="ml-auto h-3 w-3 shrink-0 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  CalendarCheck,
  Video,
  Syringe,
  Phone,
  FileText,
  Bell,
} from "lucide-react"

const services = [
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Book OPD appointments at any government hospital or PHC",
    available: true,
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Video consultation with doctors from home",
    available: true,
  },
  {
    icon: Syringe,
    title: "Vaccination Reminders",
    description: "Automated reminders for due vaccinations",
    available: true,
  },
  {
    icon: Phone,
    title: "Emergency SOS",
    description: "One-tap emergency reporting and ambulance request",
    available: true,
  },
  {
    icon: FileText,
    title: "Health Records",
    description: "Access personal health records and prescriptions",
    available: true,
  },
  {
    icon: Bell,
    title: "Health Alerts",
    description: "Disease alerts and health awareness notifications",
    available: true,
  },
]

export function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Card
          key={service.title}
          className="cursor-pointer transition-all hover:border-primary/30 hover:shadow-md"
        >
          <CardContent className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <service.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{service.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

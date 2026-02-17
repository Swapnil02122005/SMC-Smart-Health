import type { Metadata } from "next"
import { ServiceCards } from "@/components/citizen/service-cards"
import { AppointmentBooking } from "@/components/citizen/appointment-booking"
import { TelemedicineSection } from "@/components/citizen/telemedicine-section"
import { EmergencySection } from "@/components/citizen/emergency-section"
import { Badge } from "@/components/ui/badge"
import { HeartPulse } from "lucide-react"

export const metadata: Metadata = {
  title: "Citizen Health Services",
  description:
    "Digital health services for Solapur citizens: appointments, telemedicine, vaccination reminders, and emergency reporting.",
}

export default function CitizenServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <HeartPulse className="mr-1 h-3 w-3" />
          Citizen Digital Health
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Citizen Health Services
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          Appointment booking, telemedicine consultations, vaccination reminders,
          and emergency reporting in Marathi, Hindi, and English.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <ServiceCards />
        <div className="grid gap-8 lg:grid-cols-2">
          <AppointmentBooking />
          <TelemedicineSection />
        </div>
        <EmergencySection />
      </div>
    </div>
  )
}

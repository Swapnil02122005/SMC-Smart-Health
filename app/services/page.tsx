"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  HeartPulse,
  CalendarCheck,
  Video,
  Syringe,
  AlertCircle,
  Phone,
  Globe,
  Bell,
  Clock,
  MapPin,
  User,
  CheckCircle2,
  MessageSquare,
  Shield,
  Languages,
} from "lucide-react"

const facilities = [
  { name: "Solapur Civil Hospital", type: "District Hospital", wait: "~25 min" },
  { name: "Siddheshwar Hospital", type: "Government Hospital", wait: "~15 min" },
  { name: "PHC - Vijapur Road", type: "Primary Health Centre", wait: "~10 min" },
  { name: "PHC - Akkalkot Road", type: "Primary Health Centre", wait: "~20 min" },
  { name: "PHC - Kumatha Naka", type: "Primary Health Centre", wait: "~12 min" },
  { name: "UHC - Saat Rasta", type: "Urban Health Centre", wait: "~8 min" },
]

const departments = [
  "General OPD",
  "Pediatrics",
  "Gynecology",
  "Orthopedics",
  "Dermatology",
  "ENT",
  "Ophthalmology",
  "Dental",
]

const vaccinationSchedule = [
  {
    name: "COVID-19 Booster",
    age: "18+ years",
    nextDrive: "Feb 22, 2026",
    location: "All PHCs",
    status: "Active",
  },
  {
    name: "BCG",
    age: "At birth",
    nextDrive: "Daily",
    location: "All Government Hospitals",
    status: "Active",
  },
  {
    name: "OPV (Polio)",
    age: "0-5 years",
    nextDrive: "Mar 5, 2026",
    location: "Pulse Polio Camp",
    status: "Upcoming",
  },
  {
    name: "Hepatitis B",
    age: "At birth, 6 weeks, 14 weeks",
    nextDrive: "Daily",
    location: "All PHCs & Hospitals",
    status: "Active",
  },
  {
    name: "MMR",
    age: "9-12 months",
    nextDrive: "Daily",
    location: "All Government Hospitals",
    status: "Active",
  },
  {
    name: "DPT Booster",
    age: "16-24 months",
    nextDrive: "Daily",
    location: "All PHCs",
    status: "Active",
  },
]

const healthTips = [
  {
    title: "Dengue Prevention",
    message: "Remove stagnant water around your home. Use mosquito nets and repellent. Seek medical help if you have high fever for 2+ days.",
    priority: "High",
  },
  {
    title: "Safe Drinking Water",
    message: "Always boil or filter water before drinking. Avoid street food during monsoon season. Report contaminated water sources to ward office.",
    priority: "Medium",
  },
  {
    title: "Vaccination Reminder",
    message: "Children aged 0-5 must complete the Universal Immunization Programme. Visit your nearest PHC for free vaccinations.",
    priority: "Medium",
  },
  {
    title: "Mental Health Helpline",
    message: "Free counseling available at Vandrevala Foundation: 1860-2662-345. Government helpline: 08046110007 (24x7).",
    priority: "Low",
  },
]

function getPriorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Medium":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20"
    default:
      return "bg-chart-2/10 text-chart-2 border-chart-2/20"
  }
}

export default function ServicesPage() {
  const [appointmentBooked, setAppointmentBooked] = useState(false)
  const [emergencyReported, setEmergencyReported] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 text-primary">
          <HeartPulse className="mr-1 h-3 w-3" />
          Citizen Health Platform
        </Badge>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Digital Health Services
        </h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          Book appointments, access telemedicine, track vaccinations, and report
          emergencies - all in one place. Available in Marathi, Hindi, and
          English.
        </p>
      </div>

      {/* Language Banner */}
      <div className="mb-8 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <Languages className="h-5 w-5 text-primary" />
        <div>
          <p className="text-sm font-medium text-foreground">
            Multilingual Support
          </p>
          <p className="text-xs text-muted-foreground">
            This platform supports Marathi, Hindi, and English. Language
            preference can be set during registration.
          </p>
        </div>
        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <Badge variant="outline">English</Badge>
          <Badge variant="outline">Hindi</Badge>
          <Badge variant="outline">Marathi</Badge>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="appointments" className="flex items-center gap-1.5">
            <CalendarCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Appointments</span>
          </TabsTrigger>
          <TabsTrigger value="telemedicine" className="flex items-center gap-1.5">
            <Video className="h-4 w-4" />
            <span className="hidden sm:inline">Telemedicine</span>
          </TabsTrigger>
          <TabsTrigger value="vaccination" className="flex items-center gap-1.5">
            <Syringe className="h-4 w-4" />
            <span className="hidden sm:inline">Vaccination</span>
          </TabsTrigger>
          <TabsTrigger value="emergency" className="flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Emergency</span>
          </TabsTrigger>
          <TabsTrigger value="awareness" className="flex items-center gap-1.5">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Alerts</span>
          </TabsTrigger>
        </TabsList>

        {/* Appointments Tab */}
        <TabsContent value="appointments" id="appointments">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                    Book an Appointment
                  </CardTitle>
                  <CardDescription>
                    Schedule an OPD visit at any government health facility in
                    Solapur
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {appointmentBooked ? (
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
                        <CheckCircle2 className="h-8 w-8 text-chart-2" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Appointment Booked!
                      </h3>
                      <p className="max-w-sm text-sm text-muted-foreground">
                        Your appointment has been confirmed. You will receive an
                        SMS with your token number and time slot. Please arrive
                        15 minutes before your slot.
                      </p>
                      <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm">
                        <p className="text-foreground">
                          <span className="font-medium">Token:</span> #OPD-2847
                        </p>
                        <p className="text-muted-foreground">
                          SMS confirmation sent to your registered number
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setAppointmentBooked(false)}
                      >
                        Book Another
                      </Button>
                    </div>
                  ) : (
                    <form
                      className="flex flex-col gap-5"
                      onSubmit={(e) => {
                        e.preventDefault()
                        setAppointmentBooked(true)
                      }}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+91 XXXXX XXXXX"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label>Select Facility</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose facility" />
                            </SelectTrigger>
                            <SelectContent>
                              {facilities.map((f) => (
                                <SelectItem key={f.name} value={f.name}>
                                  {f.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Department</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((d) => (
                                <SelectItem key={d} value={d}>
                                  {d}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" type="date" required />
                      </div>
                      <Button type="submit" className="w-full sm:w-auto">
                        <CalendarCheck className="mr-2 h-4 w-4" />
                        Confirm Appointment
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground text-base">
                    Facility Wait Times
                  </CardTitle>
                  <CardDescription>
                    Estimated current OPD wait times
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    {facilities.map((f) => (
                      <div
                        key={f.name}
                        className="flex items-center justify-between rounded-lg border border-border p-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {f.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {f.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-primary">
                          <Clock className="h-3.5 w-3.5" />
                          {f.wait}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Telemedicine Tab */}
        <TabsContent value="telemedicine">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Video className="h-5 w-5 text-primary" />
                  Telemedicine Consultation
                </CardTitle>
                <CardDescription>
                  Connect with a doctor from the comfort of your home via video
                  call
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                    <Video className="mx-auto h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      Video Consultation
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Free telemedicine consultations available for all Solapur
                      residents. Average wait time: 10-15 minutes.
                    </p>
                    <Button className="mt-4">
                      <Video className="mr-2 h-4 w-4" />
                      Start Consultation
                    </Button>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      How It Works
                    </h4>
                    <div className="flex flex-col gap-3">
                      {[
                        "Register or login with your phone number",
                        "Select your symptoms and preferred language",
                        "Get connected to an available doctor via video",
                        "Receive digital prescription and follow-up SMS",
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Available Doctors
                </CardTitle>
                <CardDescription>
                  Doctors currently online for telemedicine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "Dr. Priya Patil",
                      specialty: "General Medicine",
                      lang: "Marathi, Hindi",
                      status: "Available",
                    },
                    {
                      name: "Dr. Rahul Deshmukh",
                      specialty: "Pediatrics",
                      lang: "Marathi, English",
                      status: "Available",
                    },
                    {
                      name: "Dr. Anjali Kulkarni",
                      specialty: "Gynecology",
                      lang: "Hindi, English",
                      status: "In Consultation",
                    },
                    {
                      name: "Dr. Suresh Jadhav",
                      specialty: "General Medicine",
                      lang: "Marathi, Hindi",
                      status: "Available",
                    },
                    {
                      name: "Dr. Meena Sharma",
                      specialty: "Dermatology",
                      lang: "Hindi, English",
                      status: "In Consultation",
                    },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {doc.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {doc.specialty}
                          </p>
                          <p className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Globe className="h-3 w-3" />
                            {doc.lang}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          doc.status === "Available"
                            ? "bg-chart-2/10 text-chart-2 border-chart-2/20"
                            : "bg-chart-4/10 text-chart-4 border-chart-4/20"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Vaccination Tab */}
        <TabsContent value="vaccination">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Syringe className="h-5 w-5 text-primary" />
                Vaccination Schedule & Reminders
              </CardTitle>
              <CardDescription>
                Universal Immunization Programme and COVID booster schedules for
                Solapur
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="p-4 text-left font-medium text-muted-foreground">
                        Vaccine
                      </th>
                      <th className="p-4 text-left font-medium text-muted-foreground">
                        Eligible Age
                      </th>
                      <th className="p-4 text-left font-medium text-muted-foreground">
                        Next Drive / Availability
                      </th>
                      <th className="p-4 text-left font-medium text-muted-foreground">
                        Location
                      </th>
                      <th className="p-4 text-right font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaccinationSchedule.map((vax) => (
                      <tr
                        key={vax.name}
                        className="border-b border-border/50"
                      >
                        <td className="p-4 font-medium text-foreground">
                          {vax.name}
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {vax.age}
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {vax.nextDrive}
                        </td>
                        <td className="p-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {vax.location}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <Badge
                            variant="outline"
                            className={
                              vax.status === "Active"
                                ? "bg-chart-2/10 text-chart-2 border-chart-2/20"
                                : "bg-chart-4/10 text-chart-4 border-chart-4/20"
                            }
                          >
                            {vax.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <Bell className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Get Vaccination Reminders
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Register your child on the platform to receive automatic
                      SMS reminders for upcoming vaccinations based on age.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Emergency Tab */}
        <TabsContent value="emergency" id="emergency">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-destructive/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  Emergency SOS
                </CardTitle>
                <CardDescription>
                  Report a medical emergency for immediate ambulance dispatch
                </CardDescription>
              </CardHeader>
              <CardContent>
                {emergencyReported ? (
                  <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
                      <CheckCircle2 className="h-8 w-8 text-chart-2" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Emergency Reported!
                    </h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      An ambulance has been dispatched to your location. Estimated
                      arrival: 8-12 minutes. Stay on the line if possible.
                    </p>
                    <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm">
                      <p className="text-foreground">
                        <span className="font-medium">Dispatch ID:</span> #EMR-5921
                      </p>
                      <p className="text-foreground">
                        <span className="font-medium">Ambulance:</span> AMB-002
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setEmergencyReported(false)}
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <form
                    className="flex flex-col gap-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setEmergencyReported(true)
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="emer-name">Your Name</Label>
                      <Input id="emer-name" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="emer-phone">Phone Number</Label>
                      <Input
                        id="emer-phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="emer-location">Location / Address</Label>
                      <Input
                        id="emer-location"
                        placeholder="Enter your current location or address"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>Type of Emergency</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select emergency type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="accident">Road Accident</SelectItem>
                          <SelectItem value="cardiac">Cardiac Emergency</SelectItem>
                          <SelectItem value="breathing">Breathing Difficulty</SelectItem>
                          <SelectItem value="pregnancy">Pregnancy / Delivery</SelectItem>
                          <SelectItem value="burn">Burns / Fire</SelectItem>
                          <SelectItem value="other">Other Medical Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="destructive" type="submit" className="w-full">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Send Emergency SOS
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground text-base">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Helplines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "Ambulance (National)", number: "108" },
                      { name: "Police", number: "100" },
                      { name: "Fire Brigade", number: "101" },
                      { name: "Women Helpline", number: "181" },
                      { name: "Child Helpline", number: "1098" },
                      { name: "SMC Health Helpline", number: "0217-2312345" },
                    ].map((line) => (
                      <div
                        key={line.name}
                        className="flex items-center justify-between rounded-lg border border-border p-3"
                      >
                        <span className="text-sm text-foreground">
                          {line.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {line.number}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground text-base">
                    <Shield className="h-5 w-5 text-primary" />
                    Safety Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {[
                      "One-tap SOS with auto-location detection",
                      "Nearest ambulance dispatch via GPS",
                      "SMS alert to registered emergency contacts",
                      "Live ambulance tracking on map",
                      "Hospital pre-arrival notification",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Awareness Tab */}
        <TabsContent value="awareness">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Bell className="h-5 w-5 text-primary" />
                  Health Alerts & Awareness
                </CardTitle>
                <CardDescription>
                  Latest health advisories and wellness notifications for
                  Solapur citizens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {healthTips.map((tip) => (
                    <div
                      key={tip.title}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground">
                          {tip.title}
                        </span>
                        <Badge
                          variant="outline"
                          className={getPriorityColor(tip.priority)}
                        >
                          {tip.priority}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tip.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Notification Channels
                </CardTitle>
                <CardDescription>
                  How citizens receive health updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      channel: "SMS Alerts",
                      description:
                        "Automated outbreak warnings, vaccination reminders, and health advisories sent to registered phone numbers.",
                      icon: Phone,
                    },
                    {
                      channel: "Mobile App Notifications",
                      description:
                        "Push notifications for appointment confirmations, telemedicine availability, and emergency alerts.",
                      icon: Bell,
                    },
                    {
                      channel: "WhatsApp Integration",
                      description:
                        "Health tips, vaccination schedules, and facility information available via WhatsApp chatbot.",
                      icon: MessageSquare,
                    },
                    {
                      channel: "USSD / IVR",
                      description:
                        "Basic health information and appointment booking available via USSD codes for non-smartphone users.",
                      icon: Globe,
                    },
                  ].map((ch) => (
                    <div
                      key={ch.channel}
                      className="flex items-start gap-3 rounded-lg border border-border p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <ch.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {ch.channel}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {ch.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

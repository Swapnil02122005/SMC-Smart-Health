"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarCheck, CheckCircle2 } from "lucide-react"

const hospitals = [
  { id: "1", name: "Solapur Civil Hospital", slots: 12 },
  { id: "2", name: "PHC - Vijapur Road", slots: 8 },
  { id: "3", name: "PHC - Akkalkot Road", slots: 5 },
  { id: "4", name: "Siddheshwar Hospital", slots: 15 },
  { id: "5", name: "PHC - Kumatha Naka", slots: 3 },
]

const departments = [
  "General Medicine",
  "Pediatrics",
  "Gynecology",
  "Orthopedics",
  "ENT",
  "Dermatology",
  "Ophthalmology",
]

export function AppointmentBooking() {
  const [booked, setBooked] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <CalendarCheck className="h-5 w-5 text-primary" />
          Book an Appointment
        </CardTitle>
        <CardDescription>
          Schedule OPD visit at any government health facility
        </CardDescription>
      </CardHeader>
      <CardContent>
        {booked ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
              <CheckCircle2 className="h-8 w-8 text-chart-2" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Appointment Confirmed!
            </h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Your appointment has been booked. You will receive an SMS confirmation with token number and timing.
            </p>
            <Button variant="outline" onClick={() => setBooked(false)}>
              Book Another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setBooked(true)
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Patient Name</Label>
              <Input id="name" placeholder="Enter full name" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Select Hospital / PHC</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a facility" />
                </SelectTrigger>
                <SelectContent>
                  {hospitals.map((h) => (
                    <SelectItem key={h.id} value={h.id}>
                      <span className="flex items-center gap-2">
                        {h.name}
                        <Badge variant="secondary" className="text-xs">
                          {h.slots} slots
                        </Badge>
                      </span>
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" required />
            </div>
            <Button type="submit" className="mt-2">
              Confirm Appointment
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

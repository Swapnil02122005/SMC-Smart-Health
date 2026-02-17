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
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Phone,
  AlertTriangle,
  Ambulance,
  CheckCircle2,
  Siren,
} from "lucide-react"

const emergencyContacts = [
  { label: "Ambulance (108)", number: "108", icon: Ambulance },
  { label: "SMC Health Helpline", number: "0217-2345678", icon: Phone },
  { label: "District Emergency", number: "112", icon: Siren },
]

export function EmergencySection() {
  const [reported, setReported] = useState(false)

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <Card className="border-destructive/20 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Emergency Health Report
          </CardTitle>
          <CardDescription>
            Report health emergencies for immediate response
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reported ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
                <CheckCircle2 className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Emergency Reported
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Your emergency report has been submitted. Response team has been
                notified and will contact you shortly.
              </p>
              <Badge variant="secondary">Reference: EMR-2025-04782</Badge>
              <Button variant="outline" onClick={() => setReported(false)}>
                Submit Another Report
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setReported(true)
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="eName">Your Name</Label>
                  <Input id="eName" placeholder="Full name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="ePhone">Contact Number</Label>
                  <Input id="ePhone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="eLocation">Location / Ward</Label>
                <Input
                  id="eLocation"
                  placeholder="E.g., Near Kumatha Naka, Ward 3"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="eDesc">Emergency Description</Label>
                <Textarea
                  id="eDesc"
                  placeholder="Describe the health emergency..."
                  required
                  rows={3}
                />
              </div>
              <Button type="submit" variant="destructive" className="mt-2">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Submit Emergency Report
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Emergency Contacts</CardTitle>
          <CardDescription>
            Immediate helpline numbers for Solapur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.label}
                className="flex items-center gap-3 rounded-lg border border-border p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <contact.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {contact.label}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {contact.number}
                  </p>
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-primary/5 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                For life-threatening emergencies, please call 108 immediately.
                This platform is for non-critical health reporting and resource
                coordination.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

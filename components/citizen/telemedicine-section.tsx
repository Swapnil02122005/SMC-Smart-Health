"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Video, Clock, Star, User } from "lucide-react"

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "General Medicine",
    rating: 4.8,
    available: true,
    nextSlot: "10:30 AM",
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    name: "Dr. Rajesh Patil",
    specialty: "Pediatrics",
    rating: 4.9,
    available: true,
    nextSlot: "11:00 AM",
    languages: ["Hindi", "Marathi"],
  },
  {
    name: "Dr. Anita Deshmukh",
    specialty: "Gynecology",
    rating: 4.7,
    available: false,
    nextSlot: "2:00 PM",
    languages: ["Marathi", "English"],
  },
  {
    name: "Dr. Suresh Kulkarni",
    specialty: "Dermatology",
    rating: 4.6,
    available: true,
    nextSlot: "11:30 AM",
    languages: ["Marathi", "Hindi", "English"],
  },
]

export function TelemedicineSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Video className="h-5 w-5 text-primary" />
          Telemedicine
        </CardTitle>
        <CardDescription>
          Connect with doctors via video consultation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="flex items-start justify-between gap-4 rounded-lg border border-border p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {doc.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {doc.specialty}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {doc.languages.map((lang) => (
                      <Badge
                        key={lang}
                        variant="outline"
                        className="px-1.5 py-0 text-[10px]"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-chart-4" />
                      {doc.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Next: {doc.nextSlot}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant={doc.available ? "default" : "outline"}
                disabled={!doc.available}
              >
                {doc.available ? "Consult" : "Busy"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

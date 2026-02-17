import Link from "next/link"
import { Activity } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Surveillance", href: "/surveillance" },
      { label: "Citizen Services", href: "/services" },
      { label: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Implementation Roadmap", href: "/roadmap" },
      { label: "Architecture", href: "/roadmap#architecture" },
      { label: "Tech Stack", href: "/roadmap#tech-stack" },
      { label: "Budget Plan", href: "/roadmap#budget" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "ABDM / NDHM", href: "/roadmap#compliance" },
      { label: "Data Security", href: "/roadmap#security" },
      { label: "IDSP Integration", href: "/surveillance" },
      { label: "Accessibility", href: "/services" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold text-foreground">
                SMC Smart Health
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Integrated Smart Public Health Management System for Solapur
              Municipal Corporation. Building a healthier Solapur through
              technology.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            Solapur Municipal Corporation. Smart Public Health Management System
            Prototype.
          </p>
          <p className="text-xs text-muted-foreground">
            ABDM / NDHM Compliant | Data Secured
          </p>
        </div>
      </div>
    </footer>
  )
}

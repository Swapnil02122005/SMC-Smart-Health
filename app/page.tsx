import { HeroSection } from "@/components/landing/hero-section"
import { ModulesSection } from "@/components/landing/modules-section"
import { ArchitectureSection } from "@/components/landing/architecture-section"
import { UserFlowSection } from "@/components/landing/user-flow-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ModulesSection />
      <ArchitectureSection />
      <UserFlowSection />
    </>
  )
}

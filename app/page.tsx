import BentoGrid from "@/components/bento-grid"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <main className="container mx-auto px-4 py-20">
        <BentoGrid />
      </main>
      <ThemeToggle />
    </div>
  )
}

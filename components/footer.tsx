export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Mahidhar Reddy G. All rights reserved.
        </p>
        <p className="text-foreground/60 text-xs mt-2">Built with Next.js, Tailwind CSS, and Framer Motion</p>
      </div>
    </footer>
  )
}

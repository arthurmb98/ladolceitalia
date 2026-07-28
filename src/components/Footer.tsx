import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-primary pb-10 pt-12 text-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <img
          src={siteConfig.logoFooter}
          alt={siteConfig.brand}
          className="h-10 w-auto object-contain opacity-90"
        />
        <div className="text-sm text-background/70">
          <a
            href={`https://instagram.com/${siteConfig.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-background"
          >
            Instagram @{siteConfig.instagram}
          </a>
          <p className="mt-1">{siteConfig.email}</p>
          <p className="mt-3 text-background/50">
            © {new Date().getFullYear()} {siteConfig.brand}
          </p>
        </div>
      </div>
    </footer>
  )
}

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

type OrderCtaProps = {
  onOrder: () => void
  floating?: boolean
}

export function OrderCta({ onOrder, floating = false }: OrderCtaProps) {
  if (floating) {
    return (
      <Button
        variant="whatsapp"
        size="icon"
        className="fixed bottom-5 right-5 z-40 size-14 shadow-lg transition-transform hover:scale-105"
        onClick={onOrder}
        aria-label="Fazer encomenda no WhatsApp"
      >
        <MessageCircle className="size-6" />
      </Button>
    )
  }

  return (
    <section id="encomendar" className="relative overflow-hidden bg-primary text-background">
      <img
        src="/grafismos/Grafismo_2_azul.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-64 w-auto opacity-25 sm:h-80"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-20">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Faça sua encomenda
          </h2>
          <p className="mt-2 max-w-md text-background/80">
            Conte o que deseja e a data da festa. Respondemos pelo WhatsApp.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-background/70">
            <a
              href={`https://instagram.com/${siteConfig.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-background"
            >
              @{siteConfig.instagram}
            </a>
            <span>{siteConfig.hours}</span>
            <span>{siteConfig.address}</span>
          </div>
        </div>
        <Button variant="whatsapp" size="lg" onClick={onOrder}>
          <MessageCircle className="size-5" />
          Encomendar no WhatsApp
        </Button>
      </div>
    </section>
  )
}

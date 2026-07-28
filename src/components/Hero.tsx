import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

type HeroProps = {
  onOrder: () => void
}

export function Hero({ onOrder }: HeroProps) {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden">
      <img
        src={siteConfig.heroImage}
        alt=""
        className="absolute inset-0 size-full object-cover object-center animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/35 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-dvh max-w-5xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8">
        <img
          src={siteConfig.logoFramed}
          alt={siteConfig.brand}
          className="h-20 w-auto animate-fade-up object-contain sm:h-28 [animation-delay:60ms]"
        />
        <h1 className="mt-6 max-w-xl animate-fade-up font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl [animation-delay:140ms]">
          Doces artesanais para encomendar
        </h1>
        <p className="mt-4 max-w-md animate-fade-up text-base text-muted-foreground sm:text-lg [animation-delay:220ms]">
          {siteConfig.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:300ms]">
          <Button variant="whatsapp" size="lg" onClick={onOrder}>
            <MessageCircle className="size-5" />
            Fazer encomenda
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#doces">Ver doces</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

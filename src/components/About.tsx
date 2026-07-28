import { siteConfig } from '@/config/site'

export function About() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <img
        src="/grafismos/Grafismo_1_laranja.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 h-48 w-auto -translate-y-1/2 opacity-25 sm:-right-6 sm:h-64"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-coral">
          Sobre
        </p>
        <h2 className="mt-3 max-w-lg font-display text-4xl text-foreground sm:text-5xl">
          Qualidade em cada detalhe
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.about}
        </p>
      </div>
    </section>
  )
}

import { siteConfig } from '@/config/site'

export function Products() {
  return (
    <section id="doces" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-coral">
          Doces
        </p>
        <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
          Para celebrar
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          Uma seleção do nosso cardápio. Encomende pelo WhatsApp o que preferir.
        </p>
      </div>

      <div className="mt-10 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:thin]">
        {siteConfig.products.map((product) => (
          <figure
            key={product.name}
            className="w-56 shrink-0 sm:w-64"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <figcaption className="mt-3 font-display text-lg text-foreground">
              {product.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

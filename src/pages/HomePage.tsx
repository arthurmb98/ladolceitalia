import { useState } from 'react'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { LeadCaptureSheet } from '@/components/LeadCaptureSheet'
import { OrderCta } from '@/components/OrderCta'
import { Products } from '@/components/Products'

export function HomePage() {
  const [sheetOpen, setSheetOpen] = useState(false)

  function openOrder() {
    setSheetOpen(true)
  }

  return (
    <div>
      <Hero onOrder={openOrder} />
      <About />
      <Products />
      <OrderCta onOrder={openOrder} />
      <Footer />
      <OrderCta onOrder={openOrder} floating />
      <LeadCaptureSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </div>
  )
}

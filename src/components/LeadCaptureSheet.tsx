import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { leadService } from '@/services/leads'
import { buildWhatsAppUrl, digitsOnly } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

type LeadCaptureSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadCaptureSheet({
  open,
  onOpenChange,
}: LeadCaptureSheetProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  function resetForm() {
    setName('')
    setPhone('')
    setNote('')
    setError(null)
  }

  function handleOpenChange(next: boolean) {
    if (!next) resetForm()
    onOpenChange(next)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const trimmedName = name.trim()
    const phoneDigits = digitsOnly(phone)
    const orderNote = note.trim()

    if (!trimmedName) {
      setError('Informe seu nome.')
      return
    }
    if (phoneDigits.length < 10) {
      setError('Informe um telefone válido com DDD.')
      return
    }
    if (!orderNote) {
      setError('Descreva o que deseja encomendar.')
      return
    }

    setSubmitting(true)

    try {
      leadService.save({
        name: trimmedName,
        phone: phoneDigits,
        note: orderNote,
      })

      const message = `${siteConfig.whatsappMessage}\n\nMeu nome é ${trimmedName}.\nPedido: ${orderNote}`
      const url = buildWhatsAppUrl(siteConfig.whatsapp, message)

      handleOpenChange(false)
      window.open(url, '_blank', 'noopener,noreferrer')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Fazer encomenda</SheetTitle>
          <SheetDescription>
            Conte o que deseja e continue no WhatsApp para finalizar o pedido.
          </SheetDescription>
        </SheetHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="lead-name">Nome</Label>
            <Input
              id="lead-name"
              name="name"
              autoComplete="name"
              placeholder="Seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">Telefone / WhatsApp</Label>
            <Input
              id="lead-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(98) 99999-9999"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-note">O que deseja encomendar?</Label>
            <Textarea
              id="lead-note"
              name="note"
              placeholder="Ex.: 20 tartellettes de frutas para sábado"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              required
            />
          </div>

          {error ? (
            <p className="text-sm text-coral" role="alert">
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="mt-2 w-full"
            disabled={submitting}
          >
            <MessageCircle className="size-5" />
            Continuar no WhatsApp
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export type Lead = {
  id: string
  name: string
  phone: string
  note?: string
  createdAt: string
  source: 'whatsapp_cta'
}

export type LeadInput = {
  name: string
  phone: string
  note?: string
}

export type LeadService = {
  save: (input: LeadInput) => Lead
  list: () => Lead[]
}

const WHATSAPP_NUMBER = '558586813102'
const PARCEIRO_WHATSAPP_NUMBER = '558588970673'
const SAC_WHATSAPP_NUMBER = '5585999099972'

export const whatsappLink = (message: string, phoneNumber = WHATSAPP_NUMBER) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

export const CONSULTOR_URL = whatsappLink('Olá! Quero falar com um consultor da Homeplace Market.')
export const PARCEIRO_URL = whatsappLink(
  'Olá! Quero ser um fornecedor da Homeplace Market.',
  PARCEIRO_WHATSAPP_NUMBER,
)
export const INSTAGRAM_URL = 'https://www.instagram.com/homeplacemarket/'
export const SAC_URL = whatsappLink('Olá! Preciso de atendimento do SAC da Homeplace Market.', SAC_WHATSAPP_NUMBER)

export const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#parceiro', label: 'Seja parceiro' },
  { href: '#faq', label: 'FAQ' },
]

const WHATSAPP_NUMBER = '5585999099972'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const CONSULTOR_URL = whatsappLink('Olá! Quero falar com um consultor da Homeplace Market.')
export const PARCEIRO_URL = whatsappLink('Olá! Quero ser um parceiro Homeplace Market.')
export const INSTAGRAM_URL = 'https://www.instagram.com/homeplacemarket/'
export const SAC_TEL = 'tel:+5585999099972'

export const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#parceiro', label: 'Seja parceiro' },
  { href: '#faq', label: 'FAQ' },
]

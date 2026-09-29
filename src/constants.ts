/* ───────── Endereço do site publicado (usado no SEO: canonical, sitemap, Open Graph) ─────────
   Hoje o site está no GitHub Pages em https://hpm-marketing.github.io/homeplace-site/.
   Se passar a usar um domínio próprio (ex.: https://www.homeplacemarket.com.br),
   troque SITE_ORIGIN pelo domínio e o BASE_PATH_PUBLICADO em next.config.ts por ''. */
export const SITE_ORIGIN = 'https://hpm-marketing.github.io'
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`

export const SITE_NAME = 'Homeplace Market'
export const SITE_TITLE = 'Homeplace Market | Minimercado autônomo para condomínios e empresas'
export const SITE_DESCRIPTION =
  'Homeplace Market: o minimercado autônomo ideal para o seu condomínio ou empresa. Aberto 24h, simples, prático e rápido. São mais de 40 lojas no Ceará.'

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

/* Perguntas do FAQ: usadas na seção e nos dados estruturados do Google (FAQPage) */
export const FAQ_PERGUNTAS = [
  {
    q: 'O que é um mercado autônomo?',
    a: 'É um minimercado de autoatendimento, sem funcionários no caixa: você escolhe os produtos direto na prateleira, escaneia os códigos no totem e paga por aproximação, Pix ou cartão. Tudo em poucos minutos, a qualquer hora.',
  },
  {
    q: 'Como faço para instalar o Homeplace Market no meu condomínio?',
    a: 'Basta falar com um de nossos consultores. Avaliamos o espaço do seu condomínio ou empresa e instalamos o Homeplace Market sem nenhum custo de instalação.',
  },
  {
    q: 'É seguro comprar em um mercado sem funcionário?',
    a: 'Sim. Nossas lojas contam com monitoramento 24 horas e totens com tecnologia de autoatendimento moderna e segura, garantindo tranquilidade para moradores e síndicos.',
  },
  {
    q: 'Quais as formas de pagamento aceitas?',
    a: 'Você pode pagar por aproximação, Pix ou cartão de crédito e débito, diretamente no totem.',
  },
  {
    q: 'O Homeplace Market funciona 24 horas?',
    a: 'Sim! Estamos onde você precisa, 24 horas por dia, todos os dias da semana.',
  },
]

export const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#parceiro', label: 'Seja parceiro' },
  { href: '#faq', label: 'FAQ' },
]

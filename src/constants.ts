/* ───────── Endereço oficial do site (usado no SEO: canonical, sitemap, Open Graph) ─────────
   O site oficial fica no cPanel, em https://homeplacemarket.com.br/.
   A cópia do GitHub Pages aponta o canonical para cá e não é indexada. */
export const SITE_URL = 'https://homeplacemarket.com.br'

/* Subpasta do build atual ('' no cPanel e no dev; '/homeplace-site' no GitHub Pages) */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/* true no build do GitHub Pages: a cópia secundária pede para não ser indexada */
export const IS_COPIA_SECUNDARIA = BASE_PATH !== ''

/* URL absoluta no domínio oficial para um arquivo do build (ex.: `imagem.src`) */
export const urlPublica = (caminho: string) =>
  `${SITE_URL}${caminho.startsWith(BASE_PATH) ? caminho.slice(BASE_PATH.length) : caminho}`

/* ───────── Google Analytics (Tag do Google) ─────────
   Cole aqui o ID de métricas da propriedade do GA4, no formato 'G-XXXXXXXXXX'
   (Analytics → Administrador → Fluxos de dados → Web → ID de métricas).
   Enquanto estiver vazio, a tag não é instalada. */
export const GOOGLE_TAG_ID: string = ''

export const SITE_NAME = 'Homeplace Market'
/* ───────── Textos de SEO e GEO (buscadores e assistentes de IA) ───────── */
export const SITE_TITLE =
  'Homeplace Market | Minimercado autônomo para condomínios e empresas em Fortaleza'

/* <meta name="description">: o resumo que aparece no resultado do Google */
export const SITE_DESCRIPTION =
  'Minimercado autônomo 24h para condomínios e empresas em Fortaleza e no Ceará. Mercadinho de condomínio simples, prático e rápido, sem custo de instalação.'

/* Texto da prévia ao compartilhar o link (WhatsApp, Facebook, LinkedIn, X) */
export const SITE_DESCRIPTION_SOCIAL =
  'Homeplace Market: minimercado autônomo 24h em Fortaleza. Mercadinho de condomínio e mercadinho para empresas com +40 lojas no Ceará. Fale com a gente :)'

/* Descrição da empresa nos dados estruturados (schema.org) */
export const SITE_DESCRIPTION_SCHEMA =
  'Minimercado autônomo 24h para condomínios e empresas no Ceará. O cliente escolhe os produtos, escaneia no totem e paga por aproximação, Pix ou cartão.'

export const SITE_SLOGAN = 'Estamos onde você mais precisa'

export const SITE_KEYWORDS = [
  'minimercado autônomo',
  'minimercado',
  'mercadinho de condomínio',
  'mercadinho para empresas',
  'mercado autônomo 24h',
  'minimercado em condomínio',
  'mercado de autoatendimento',
  'loja autônoma',
  'honest market',
  'Homeplace Market',
  'Fortaleza',
  'Ceará',
]

/* Temas em que a empresa é referência (schema.org `knowsAbout`) */
export const SITE_TEMAS = [
  'minimercado autônomo',
  'mercadinho de condomínio',
  'mercadinho para empresas',
  'mercado de autoatendimento 24h',
]

/* Localização para buscas regionais (meta geo.* e `areaServed`) */
export const GEO_REGIAO = 'BR-CE'
export const GEO_CIDADE = 'Fortaleza'
export const GEO_ESTADO = 'Ceará'

/* Telefone do SAC no formato internacional (schema.org `contactPoint`) */
export const SAC_TELEFONE = '+55-85-99909-9972'

const WHATSAPP_NUMBER = '558591371751'
const PARCEIRO_WHATSAPP_NUMBER = '558588970673'
const SAC_WHATSAPP_NUMBER = '5585999099972'

export const whatsappLink = (message: string, phoneNumber = WHATSAPP_NUMBER) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

export const CONSULTOR_URL = whatsappLink('Olá! Quero falar com a Homeplace Market.')
export const PARCEIRO_URL = whatsappLink(
  'Olá! Quero ser um fornecedor da Homeplace Market.',
  PARCEIRO_WHATSAPP_NUMBER,
)
export const INSTAGRAM_URL = 'https://www.instagram.com/homeplacemarket/'

/* Endereço do Centro de Distribuição (rodapé e dados estruturados do Google) */
export const ENDERECO_CD = {
  rua: 'Av. Nova Fortaleza, 979',
  bairro: 'Planalto Ayrton Senna',
  cidade: 'Fortaleza',
  uf: 'CE',
  cep: '60766-680',
}
export const ENDERECO_CD_MAPA_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Av. Nova Fortaleza, 979 - Planalto Ayrton Senna, Fortaleza - CE, 60766-680')
export const SAC_URL = whatsappLink('Olá! Preciso de atendimento do SAC da Homeplace Market.', SAC_WHATSAPP_NUMBER)

/* Perguntas do FAQ: usadas na seção e nos dados estruturados do Google (FAQPage).
   O texto visível na página e o dos dados estruturados precisam ser o mesmo,
   por isso os dois saem desta lista. */
export const FAQ_PERGUNTAS = [
  {
    q: 'O que é um minimercado autônomo?',
    a: 'É um minimercado de autoatendimento, sem funcionários no caixa. Você escolhe os produtos na prateleira, escaneia os códigos no totem e paga por aproximação, Pix ou cartão, a qualquer hora.',
  },
  {
    q: 'Como instalar um mercadinho no meu condomínio ou empresa?',
    a: 'Fale com um dos nossos atendentes da Homeplace Market. A equipe avalia o espaço do condomínio ou da empresa e instala a loja sem custo de instalação.',
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
    a: 'Sim. As lojas funcionam 24 horas por dia, todos os dias da semana, com monitoramento em tempo real.',
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

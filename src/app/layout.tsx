import type { Metadata, Viewport } from 'next'
import { Carlito, Inter } from 'next/font/google'
import lojaContainer from '../assets/loja-container.png'
import {
  GEO_CIDADE,
  GEO_REGIAO,
  IS_COPIA_SECUNDARIA,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_SOCIAL,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  urlPublica,
} from '../constants'
import GoogleTag from '../components/GoogleTag'
import '../index.css'

/* Fontes baixadas no build e servidas pelo próprio site (sem depender do Google Fonts) */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  display: 'swap',
  variable: '--font-inter',
})

const carlito = Carlito({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-carlito',
})

/* Imagem de compartilhamento (WhatsApp, Facebook, LinkedIn) sempre no domínio oficial */
const OG_IMAGE = urlPublica(lojaContainer.src)

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION_SOCIAL,
    images: [
      {
        url: OG_IMAGE,
        width: lojaContainer.width,
        height: lojaContainer.height,
        alt: 'Loja autônoma Homeplace Market',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION_SOCIAL,
    images: [OG_IMAGE],
  },
  /* Localização para buscas regionais: <meta name="geo.region"> e <meta name="geo.placename"> */
  other: {
    'geo.region': GEO_REGIAO,
    'geo.placename': GEO_CIDADE,
  },
  /* A cópia do GitHub Pages não entra no Google (evita conteúdo duplicado) */
  robots: IS_COPIA_SECUNDARIA ? { index: false, follow: false } : { index: true, follow: true },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#00cf19',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${carlito.variable}`}>
      <body>
        {children}
        <GoogleTag />
      </body>
    </html>
  )
}

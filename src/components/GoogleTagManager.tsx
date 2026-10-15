import { GTM_ID, IS_COPIA_SECUNDARIA } from '../constants'

/*
 * Google Tag Manager, igual aos dois trechos fornecidos pelo Google:
 * - <GoogleTagManager /> vai o mais alto possível dentro do <head>;
 * - <GoogleTagManagerNoScript /> vai logo após a abertura do <body>.
 *
 * Mesma regra da tag do Google: só no site oficial em produção, fora do
 * `npm run dev` e da cópia do GitHub Pages.
 */
const ativo = () => GTM_ID !== '' && !IS_COPIA_SECUNDARIA && process.env.NODE_ENV === 'production'

export function GoogleTagManager() {
  if (!ativo()) return null

  return (
    <script
      id="google-tag-manager"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  )
}

export function GoogleTagManagerNoScript() {
  if (!ativo()) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

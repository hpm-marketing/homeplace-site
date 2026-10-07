import { GOOGLE_TAG_ID, IS_COPIA_SECUNDARIA } from '../constants'

/*
 * Tag do Google (gtag.js) para o Google Analytics 4.
 *
 * Vai direto no <head> do HTML, igual ao trecho fornecido pelo Google, para
 * que o teste de instalação e o Tag Assistant encontrem a tag na página.
 *
 * Só é instalada no site oficial em produção: fica de fora do `npm run dev`
 * e da cópia do GitHub Pages, para os acessos de teste não entrarem nos relatórios.
 */
export default function GoogleTag() {
  const ativa = GOOGLE_TAG_ID !== '' && !IS_COPIA_SECUNDARIA && process.env.NODE_ENV === 'production'
  if (!ativa) return null

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} />
      <script
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`,
        }}
      />
    </>
  )
}

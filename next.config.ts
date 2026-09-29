import type { NextConfig } from 'next'

/*
 * Subpasta onde o site é publicado. No GitHub Pages o endereço é
 * https://hpm-marketing.github.io/homeplace-site/, por isso '/homeplace-site'.
 * Com domínio próprio, troque para '' (e ajuste SITE_ORIGIN em src/constants.ts).
 */
const BASE_PATH_PUBLICADO = '/homeplace-site'

/* Em desenvolvimento (`npm run dev`) o site abre direto em http://localhost:3000/;
   a subpasta só é aplicada no build de publicação (`npm run build`). */
const BASE_PATH = process.env.NODE_ENV === 'production' ? BASE_PATH_PUBLICADO : ''

/*
 * O site é gerado como HTML estático (`output: 'export'`), pronto para o
 * GitHub Pages: cada página já sai com todo o conteúdo no HTML, que é
 * o que os buscadores leem. O resultado do build fica na pasta `out/`.
 */
const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
}

export default nextConfig

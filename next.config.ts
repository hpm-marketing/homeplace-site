import type { NextConfig } from 'next'

/*
 * Subpasta onde o site é publicado.
 *  - cPanel (homeplacemarket.com.br): raiz do domínio, então '' (padrão).
 *  - GitHub Pages (hpm-marketing.github.io/homeplace-site): o workflow
 *    .github/workflows/deploy.yml define BASE_PATH=/homeplace-site no build.
 *  - `npm run dev`: sempre na raiz (http://localhost:3000/).
 */
const BASE_PATH = process.env.BASE_PATH ?? ''

/*
 * O site é gerado como HTML estático (`output: 'export'`): cada página já sai
 * com todo o conteúdo no HTML, que é o que os buscadores leem.
 * O resultado do build fica na pasta `out/`.
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

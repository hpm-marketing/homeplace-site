/*
 * Copia o site gerado em `out/` para a pasta `deploy/`, que vai versionada no
 * git e é publicada pelo cPanel (veja .cpanel.yml).
 *
 * Os vídeos ficam de fora: eles já estão no git em `public/videos/` e o
 * .cpanel.yml copia de lá, evitando guardar ~125 MB duas vezes no repositório.
 *
 * Uso: npm run build:cpanel
 */
import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ORIGEM = 'out'
const DESTINO = 'deploy'

if (!existsSync(join(ORIGEM, 'index.html'))) {
  console.error('✖ Pasta out/ não encontrada. Rode "npm run build:cpanel" (ele faz o build antes).')
  process.exit(1)
}

// O build do cPanel precisa estar na raiz do domínio (sem /homeplace-site)
const html = readFileSync(join(ORIGEM, 'index.html'), 'utf8')
if (html.includes('/homeplace-site/_next/')) {
  console.error('✖ O build em out/ foi gerado para o GitHub Pages (com BASE_PATH). Rode "npm run build:cpanel".')
  process.exit(1)
}

rmSync(DESTINO, { recursive: true, force: true })
cpSync(ORIGEM, DESTINO, {
  recursive: true,
  filter: (caminho) => {
    const rel = relative(ORIGEM, caminho)
    return rel !== 'videos' && !rel.startsWith(`videos${sep}`)
  },
})

console.log('✔ Site pronto em deploy/. Agora faça commit e push, e no cPanel use "Update from Remote" e "Deploy HEAD Commit".')

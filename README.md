# Homeplace Market — site

Landing page do Homeplace Market em Next.js (React + TypeScript), feita a partir do
layout mobile do Figma **SITE-HOMEPLACE** e adaptada para todas as larguras de tela.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build          # gera o site estático (HTML pronto) em out/
npm run build:cpanel   # gera o site para o cPanel na pasta deploy/
```

### Terminal no VS Code (Windows)

O PowerShell deste computador bloqueia scripts, o que impede `npm`/`npx`
(`npm.ps1 não pode ser carregado...`). Por isso `.vscode/settings.json` define o
**Prompt de Comando** como terminal padrão do projeto, e `.vscode/tasks.json`
traz as tarefas *Rodar site (dev)*, *Gerar build* e *Instalar dependências*
(`Ctrl+Shift+B` roda o dev server).

Para usar o npm também no PowerShell, rode uma vez (vale só para o seu usuário):

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## Publicação no cPanel (site oficial: https://homeplacemarket.com.br)

O cPanel publica pelo **Git Version Control** usando o arquivo `.cpanel.yml`.
O site é gerado no computador (a hospedagem não precisa de Node.js) e o servidor
só copia os arquivos prontos para o `public_html`.

A cada atualização:

1. `npm run build:cpanel` — gera o site e salva em `deploy/`.
2. Commit e push (a pasta `deploy/` vai junto no git).
3. No cPanel: **Git Version Control → Manage → Pull or Deploy** →
   **Update from Remote** e depois **Deploy HEAD Commit**.

O `.cpanel.yml` apaga só a pasta `_next` antiga, copia `deploy/` (inclui o
`.htaccess`) e os vídeos de `public/videos/` para `$HOME/public_html`. Os demais
arquivos do `public_html` não são apagados.

O `public/.htaccess` força HTTPS, redireciona `www` para o domínio sem `www`,
define a página 404 e o cache/compressão.

Configuração inicial no cPanel (uma vez): **Git Version Control → Create**,
ative *Clone a Repository*, informe a URL do repositório no GitHub e um caminho
fora do `public_html` (ex.: `/home/USUARIO/repositories/homeplace-site`).
Repositório privado precisa de chave SSH cadastrada no GitHub.

## Cópia no GitHub Pages

Cada push na `main` também roda `.github/workflows/deploy.yml`, que gera o site
com `BASE_PATH=/homeplace-site` e publica em
https://hpm-marketing.github.io/homeplace-site/. Essa cópia aponta o canonical
para o domínio oficial e tem `noindex`, para não competir com ele no Google.

- Em **Settings → Pages → Build and deployment → Source**, a opção precisa ser
  **GitHub Actions**.
- O endereço oficial fica em `SITE_URL` (`src/constants.ts`).

## SEO

O site é gerado como HTML estático (`output: 'export'`): todo o conteúdo já
vem no HTML, que é o que o Google lê. Além disso:

- `src/app/layout.tsx`: título, descrição, palavras-chave, canonical,
  Open Graph (WhatsApp/Facebook/LinkedIn) e Twitter card.
- `src/app/page.tsx`: dados estruturados schema.org (Organization, WebSite e
  FAQPage, a partir de `FAQ_PERGUNTAS` em `src/constants.ts`).
- `src/app/sitemap.ts` e `src/app/robots.ts`: geram `sitemap.xml` e `robots.txt`.
- `src/app/icon.svg`: favicon.
- Fontes (Inter e Carlito) via `next/font`, servidas pelo próprio site.

## Estrutura

```
src/
  app/
    layout.tsx         # <html>, fontes e metadados de SEO
    page.tsx           # ordem das seções + dados estruturados
    sitemap.ts / robots.ts / icon.svg
  constants.ts         # URL do site, textos de SEO, FAQ, links de WhatsApp, Instagram, SAC e menu
  index.css            # tokens (cores, fontes) e a unidade de escala --u
  assets/              # imagens e SVGs exportados do Figma
public/
  videos/              # vídeos de depoimentos (servidos como arquivos estáticos)
  components/
    Header             # barra fixa; menu hambúrguer no mobile, links no desktop
    Hero               # "O minimercado ideal..."
    Presenca           # "Somos +40 lojas" + "Estamos onde você precisa"
    ComoFunciona       # "Simples, prático e rápido"
    Diferenciais       # itens em arco ao redor da foto
    Tecnologia         # totens
    Marcas             # marcas parceiras
    Parceiro           # "Seja um parceiro HomePlace"
    Faq                # accordion
    Footer
    CtaButton          # botão de WhatsApp (branco/verde)
```

## Responsividade

Todas as medidas usam `calc(N * var(--u))`, onde `N` é o valor em pixels do
frame mobile do Figma (440px de largura).

- **< 1024px (celular e tablet):** layout do Figma em uma coluna. `--u`
  acompanha a largura da tela (até 540px), mantendo as proporções exatas.
- **>= 1024px (desktop e widescreen):** cada seção em duas colunas, com
  container de até 1200px (1380px em telas largas).

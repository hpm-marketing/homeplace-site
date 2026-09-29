# Homeplace Market — site

Landing page do Homeplace Market em Next.js (React + TypeScript), feita a partir do
layout mobile do Figma **SITE-HOMEPLACE** e adaptada para todas as larguras de tela.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático (HTML pronto) em out/
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

## Publicação (GitHub Pages)

Cada push na `main` roda `.github/workflows/deploy.yml`, que faz o build e
publica a pasta `out/` em https://hpm-marketing.github.io/homeplace-site/.

- Em **Settings → Pages → Build and deployment → Source**, a opção precisa ser
  **GitHub Actions** (com "Deploy from a branch" o Pages publica o código-fonte
  e a página fica em branco).
- `BASE_PATH_PUBLICADO` em `next.config.ts` deve ter o mesmo nome do repositório
  (`/homeplace-site`). Se o repositório for renomeado ou o site passar a usar
  domínio próprio, atualize esse valor e o `SITE_ORIGIN` em `src/constants.ts`.

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

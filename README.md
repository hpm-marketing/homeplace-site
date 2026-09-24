# Homeplace Market — site

Landing page do Homeplace Market em React + TypeScript (Vite), feita a partir do
layout mobile do Figma **SITE-HOMEPLACE** e adaptada para todas as larguras de tela.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build localmente
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

## Estrutura

```
src/
  App.tsx              # ordem das seções
  constants.ts         # links de WhatsApp, Instagram, SAC e menu
  index.css            # tokens (cores, fontes) e a unidade de escala --u
  assets/              # imagens e SVGs exportados do Figma
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

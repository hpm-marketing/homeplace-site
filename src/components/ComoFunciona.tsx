import type { ReactNode } from 'react'
import iconeEscolha from '../assets/icone-escolha.svg'
import iconeEscaneie from '../assets/icone-escaneie.svg'
import iconePague from '../assets/icone-pague.svg'
import './ComoFunciona.css'

type Passo = { icon: string; title: string; text: ReactNode }

const PASSOS: Passo[] = [
  {
    icon: iconeEscolha,
    title: 'Escolha',
    text: (
      <>
        Escolha seus produtos <span className="hl-green">direto na prateleira</span>,
        <br />
        sem cartão ou senha na entrada.
      </>
    ),
  },
  {
    icon: iconeEscaneie,
    title: 'Escaneie',
    text: (
      <>
        Escaneie os códigos dos produtos na tela do totem,
        <br />
        de forma <span className="hl-green">simples e rápida.</span>
      </>
    ),
  },
  {
    icon: iconePague,
    title: 'Pague',
    text: (
      <>
        Pague por aproximação, Pix ou cartão e confira
        <br />
        os produtos. <span className="hl-green">Pronto, é só levar!</span>
      </>
    ),
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como" aria-labelledby="como-titulo">
      <div className="como__inner">
        <h2 id="como-titulo" className="como__title t-black">
          simples, prático
          <br />
          e rápido
        </h2>

        <ol className="como__steps">
          {PASSOS.map((passo) => (
            <li key={passo.title} className="como__step">
              <img className="como__icon" src={passo.icon} alt="" width={65} height={65} />
              <div className="como__text">
                <h3 className="como__step-title t-black">{passo.title}</h3>
                <p className="como__step-desc t-body">{passo.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

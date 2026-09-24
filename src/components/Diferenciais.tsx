import type { CSSProperties, ReactNode } from 'react'
import lojaInterior from '../assets/loja-interior.png'
import iconeMonitoramento from '../assets/icone-monitoramento.svg'
import iconeFranqueados from '../assets/icone-franqueados.svg'
import iconeMix from '../assets/icone-mix.svg'
import iconeLogistica from '../assets/icone-logistica.svg'
import iconeDistribuicao from '../assets/icone-distribuicao.svg'
import caminhao from '../assets/caminhao.svg'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Diferenciais.css'

type Diferencial = {
  icon: string
  label: ReactNode
  /* Posição do ícone e deslocamento vertical do texto no arco (px do Figma) */
  x: number
  y: number
  textY: number
  extra?: ReactNode
}

const DIFERENCIAIS: Diferencial[] = [
  {
    icon: iconeMonitoramento,
    label: (
      <>
        monitoramento
        <br />
        24 horas
      </>
    ),
    x: 101,
    y: 0,
    textY: 3,
  },
  {
    icon: iconeFranqueados,
    label: (
      <>
        não somos
        <br />
        franqueados
      </>
    ),
    x: 144,
    y: 65,
    textY: 3,
  },
  {
    icon: iconeMix,
    label: (
      <>
        maior mix de
        <br />
        produtos para
        <br />
        minimercado
      </>
    ),
    x: 172,
    y: 130,
    textY: 0,
  },
  {
    icon: iconeLogistica,
    label: (
      <>
        equipe de
        <br />
        logistica
      </>
    ),
    x: 167,
    y: 204,
    textY: 9,
    extra: <img className="dif__truck" src={caminhao} alt="" width={44} height={28} />,
  },
  {
    icon: iconeDistribuicao,
    label: (
      <>
        centro de
        <br />
        distribuição
      </>
    ),
    x: 124,
    y: 270,
    textY: 9,
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="dif" aria-labelledby="dif-titulo">
      <div className="dif__inner">
        <div className="dif__header">
          <h2 id="dif-titulo" className="dif__title">
            <span className="dif__title-light t-medium">principais</span>
            <span className="t-black">diferenciais</span>
          </h2>
          <div className="dif__bar" aria-hidden="true" />
        </div>

        <div className="dif__stage">
          <img className="dif__photo" src={lojaInterior} alt="Interior de uma loja Homeplace Market" />
          <ul className="dif__list">
            {DIFERENCIAIS.map((item, i) => (
              <li
                key={i}
                className="dif__item"
                style={{ '--x': item.x, '--y': item.y, '--ty': item.textY } as CSSProperties}
              >
                <img className="dif__icon" src={item.icon} alt="" width={65} height={65} />
                {item.extra}
                <span className="dif__label t-black">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <CtaButton
          className="dif__cta"
          variant="green"
          href={CONSULTOR_URL}
          label="quero falar com um consultor"
        />
      </div>
    </section>
  )
}

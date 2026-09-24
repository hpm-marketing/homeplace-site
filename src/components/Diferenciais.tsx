import lojaInterior from '../assets/loja-interior.png'
import lojaInteriorDesktop from '../assets/loja-interior-desktop.png'
import iconeMonitoramento from '../assets/icone-monitoramento.svg'
import iconeFranqueados from '../assets/icone-franqueados.svg'
import iconeMix from '../assets/icone-mix.svg'
import iconeLogistica from '../assets/icone-logistica.svg'
import iconeDistribuicao from '../assets/icone-distribuicao.svg'
import caminhao from '../assets/caminhao.svg'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Diferenciais.css'

const DIFERENCIAIS = [
  {
    icon: iconeMonitoramento,
    label: (
      <>
        MONITORAMENTO
        <br />
        24 HORAS
      </>
    ),
  },
  {
    icon: iconeFranqueados,
    label: (
      <>
        NÃO SOMOS
        <br />
        FRANQUEADOS
      </>
    ),
  },
  {
    icon: iconeMix,
    label: (
      <>
        MAIOR MIX DE
        <br />
        PRODUTOS PARA
        <br />
        MINIMERCADO
      </>
    ),
  },
  {
    icon: iconeLogistica,
    label: (
      <>
        EQUIPE DE
        <br />
        LOGÍSTICA
      </>
    ),
    extra: <img className="dif-card__truck" src={caminhao} alt="" width={44} height={28} />,
  },
  {
    icon: iconeDistribuicao,
    label: (
      <>
        CENTRO DE
        <br />
        DISTRIBUIÇÃO
      </>
    ),
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="dif-card" aria-labelledby="dif-titulo">
      <div className="dif-card__header">
        <h2 id="dif-titulo" className="dif-card__title">
          <span className="dif-card__title-light t-medium">PRINCIPAIS</span>
          <span className="dif-card__bar" aria-hidden="true" />
          <span className="dif-card__title-bold t-black">DIFERENCIAIS</span>
        </h2>
      </div>

      <div className="dif-card__body">
        <div className="dif-card__photo-container">
          <picture>
            <source media="(min-width: 1024px)" srcSet={lojaInteriorDesktop} />
            <img className="dif-card__photo" src={lojaInterior} alt="Interior de uma loja Homeplace Market" />
          </picture>
        </div>
        <ul className="dif-card__list">
          {DIFERENCIAIS.map((item, i) => (
            <li key={i} className="dif-card__item">
              <div className="dif-card__icon-box">
                <img className="dif-card__icon" src={item.icon} alt="" />
                {item.extra}
              </div>
              <span className="dif-card__label t-black">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dif-card__footer">
        <CtaButton
          className="dif-card__cta"
          variant="green"
          href={CONSULTOR_URL}
          label="QUERO FALAR COM UM CONSULTOR"
        />
      </div>
    </section>
  )
}

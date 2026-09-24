import seloLata from '../assets/selo-lata.png'
import { PARCEIRO_URL } from '../constants'
import CtaButton from './CtaButton'
import './Parceiro.css'

export default function Parceiro() {
  return (
    <section id="parceiro" className="parceiro" aria-labelledby="parceiro-titulo">
      <div className="parceiro__inner">
        <div className="parceiro__content">
          <h2 id="parceiro-titulo" className="parceiro__title">
            <span className="parceiro__title-light t-medium">Seja um</span>
            <span className="t-black">
              parceiro
              <br />
              HomePlace
            </span>
          </h2>
          <p className="parceiro__text t-body">
            Síndicos, administradoras e construtoras: leve o{' '}
            <span className="hl-black">Homeplace Market</span> para o seu empreendimento sem nenhum
            custo de instalação. Aumente o valor percebido do condomínio e ofereça um benefício real
            para quem mora ali.
          </p>
          <CtaButton
            className="parceiro__cta"
            size="compact"
            href={PARCEIRO_URL}
            label="quero ser um parceiro"
          />
        </div>

        <div className="parceiro__selo" aria-hidden="true">
          <img src={seloLata} alt="" />
        </div>
      </div>
    </section>
  )
}

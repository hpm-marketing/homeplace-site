import iconesProdutos from '../assets/icones-produtos.png'
import lojaContainer from '../assets/loja-container.png'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <img className="hero__icons" src={iconesProdutos} alt="" width={202} height={28} />
          <h1 className="hero__title t-black">
            o minimercado
            <br />
            ideal para o seu
            <br />
            <span className="hl-ink">
              condomínio
              <br />
              ou empresa
            </span>
          </h1>
          <CtaButton className="hero__cta" href={CONSULTOR_URL} label="quero falar com um consultor" />
        </div>

        <div className="hero__media">
          <img
            src={lojaContainer}
            alt="Loja autônoma Homeplace Market em container, com prateleiras abastecidas"
            width={409}
            height={261}
          />
        </div>
      </div>
    </section>
  )
}

import somos40 from '../assets/somos-40.svg'
import mapaCeara from '../assets/mapa-ceara.png'
import seloEstamos from '../assets/selo-estamos.png'
import sacola from '../assets/sacola.svg'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Presenca.css'

export default function Presenca() {
  return (
    <section className="presenca" aria-labelledby="presenca-titulo">
      <div className="presenca__top">
        <div className="presenca__top-inner">
          <img className="presenca__somos" src={somos40} alt="Somos +40 lojas no Ceará" width={300} height={196} />
          <img className="presenca__mapa" src={mapaCeara} alt="Mapa do Ceará" width={214} height={200} />
        </div>
      </div>

      <div className="presenca__band">
        <div className="presenca__band-inner">
          <div className="presenca__selo" aria-hidden="true">
            <img src={seloEstamos} alt="" />
          </div>

          <div className="presenca__content">
            <h2 id="presenca-titulo" className="presenca__title t-black">
              estamos onde
              <br />
              você precisa.
              <br />
              <span className="hl-black">24h por dia</span>
            </h2>
            <CtaButton className="presenca__cta" href={CONSULTOR_URL} label="quero falar com um consultor" />
          </div>

          <img className="presenca__sacola" src={sacola} alt="" width={116} height={179} />
        </div>
      </div>
    </section>
  )
}

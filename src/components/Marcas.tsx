import marcaAmbev from '../assets/marca-ambev.png'
import marcaBaly from '../assets/marca-baly.png'
import marcaFloresta from '../assets/marca-floresta.png'
import marcaFrosty from '../assets/marca-frosty.png'
import marcaHeineken from '../assets/marca-heineken.png'
import marcaJa from '../assets/marca-ja.png'
import marcaNestle from '../assets/marca-nestle.png'
import marcaNsFatima from '../assets/marca-nsfatima.png'
import marcaPanevita from '../assets/marca-panevita.png'
import marcaPepsico from '../assets/marca-pepsico.png'
import marcaPurina from '../assets/marca-purina.png'
import marcaRoma from '../assets/marca-roma.png'
import marcaSantaclara from '../assets/marca-santaclara.png'
import marcaSolar from '../assets/marca-solar.png'
import './Marcas.css'

const row1Logos = [
  { src: marcaAmbev.src, alt: 'Ambev', name: 'ambev' },
  { src: marcaBaly.src, alt: 'Baly Brasil', name: 'baly' },
  { src: marcaFloresta.src, alt: 'Floresta', name: 'floresta' },
  { src: marcaFrosty.src, alt: 'Frosty', name: 'frosty' },
  { src: marcaHeineken.src, alt: 'Heineken', name: 'heineken' },
  { src: marcaJa.src, alt: 'J&A', name: 'ja' },
  { src: marcaNestle.src, alt: 'Nestlé', name: 'nestle' },
]

const row2Logos = [
  { src: marcaNsFatima.src, alt: 'Nossa Senhora de Fátima', name: 'nsfatima' },
  { src: marcaPanevita.src, alt: 'Panevita', name: 'panevita' },
  { src: marcaPepsico.src, alt: 'PepsiCo', name: 'pepsico' },
  { src: marcaPurina.src, alt: 'Purina', name: 'purina' },
  { src: marcaRoma.src, alt: 'Roma', name: 'roma' },
  { src: marcaSantaclara.src, alt: 'Santa Clara', name: 'santaclara' },
  { src: marcaSolar.src, alt: 'Solar Coca-Cola', name: 'solar' },
]

export default function Marcas() {
  const row1Duplicated = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos]
  const row2Duplicated = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos]

  return (
    <section id="marcas" className="marcas" aria-labelledby="marcas-titulo">
      <div className="marcas__inner">
        <div className="marcas__content">
          <h2 id="marcas-titulo" className="marcas__title t-black">
            marcas
            <br />
            parceiras
          </h2>
          <p className="marcas__text t-body">
            Produtos das marcas que você já confia, selecionados para o seu dia a dia.
          </p>
        </div>

        <div className="marcas__marquee-container" aria-label="Marcas parceiras em carrossel">
          {/* Fileira 1 - Sentido Esquerda */}
          <div className="marcas__marquee-row">
            <ul className="marcas__marquee-track marcas__marquee-track--left">
              {row1Duplicated.map((logo, index) => (
                <li key={`r1-${index}`} className={`marcas__card marcas__card--${logo.name}`}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          {/* Fileira 2 - Sentido Direita */}
          <div className="marcas__marquee-row">
            <ul className="marcas__marquee-track marcas__marquee-track--right">
              {row2Duplicated.map((logo, index) => (
                <li key={`r2-${index}`} className={`marcas__card marcas__card--${logo.name}`}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


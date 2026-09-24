import marcaSolar from '../assets/marca-solar.png'
import marcaPurina from '../assets/marca-purina.png'
import marcaBaly from '../assets/marca-baly.png'
import marcaNestle from '../assets/marca-nestle.png'
import './Marcas.css'

export default function Marcas() {
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

        <ul className="marcas__logos" aria-label="Marcas parceiras">
          <li className="marcas__logo marcas__logo--solar">
            <img src={marcaSolar} alt="Solar Coca-Cola" />
          </li>
          <li className="marcas__logo marcas__logo--purina">
            <img src={marcaPurina} alt="Purina — Your Pet, Our Passion" />
          </li>
          <li className="marcas__logo marcas__logo--baly">
            <img src={marcaBaly} alt="Baly Brasil" />
          </li>
          <li className="marcas__logo marcas__logo--nestle">
            <img src={marcaNestle} alt="Nestlé" />
          </li>
        </ul>
      </div>
    </section>
  )
}

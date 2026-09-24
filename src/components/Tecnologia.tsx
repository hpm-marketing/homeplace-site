import totens from '../assets/totens.png'
import './Tecnologia.css'

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="tec-card" aria-labelledby="tec-titulo">
      <div className="tec-card__header">
        <h2 id="tec-titulo" className="tec-card__title">
          <span className="tec-card__title-dark t-medium">TECNOLOGIA</span>
          <span className="tec-card__title-light t-black">
            INTELIGENTE{' '}
            <br />E SEGURA
          </span>
        </h2>
      </div>

      <p className="tec-card__text t-body">
        Nossos totens foram desenvolvidos com o que há de mais moderno em tecnologia de
        autoatendimento, unindo segurança, praticidade e monitoramento constante para dar mais
        tranquilidade a moradores e síndicos.
      </p>

      <div className="tec-card__image-container">
        <img
          className="tec-card__totens"
          src={totens}
          alt="Totens de autoatendimento Homeplace Market"
        />
      </div>
    </section>
  )
}

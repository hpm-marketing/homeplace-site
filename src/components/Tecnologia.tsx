import totens from '../assets/totens.png'
import './Tecnologia.css'

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="tec" aria-labelledby="tec-titulo">
      <div className="tec__box">
        <div className="tec__content">
          <h2 id="tec-titulo" className="tec__title">
            <span className="tec__title-light t-medium">tecnologia</span>
            <span className="t-black">
              inteligente e
              <br />
              segura
            </span>
          </h2>
          <p className="tec__text t-body">
            Nossos totens foram desenvolvidos com o que há de mais moderno em tecnologia de
            autoatendimento, unindo segurança, praticidade e monitoramento constante para dar mais
            tranquilidade a moradores e síndicos.
          </p>
        </div>

        <img
          className="tec__totens"
          src={totens}
          alt="Totens de autoatendimento Homeplace Market"
          width={371}
          height={333}
        />
      </div>
    </section>
  )
}

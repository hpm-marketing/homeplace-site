import iconesProdutos from '../assets/icones-produtos.svg'
import './ChamadaFinal.css'

export default function ChamadaFinal() {
  return (
    <section className="chamada-final" aria-labelledby="chamada-final-titulo">
      <h2 id="chamada-final-titulo" className="chamada-final__titulo">
        A VIDA PEDE MAIS <strong>PRATICIDADE!</strong>
      </h2>
      <img
        className="chamada-final__icones"
        src={iconesProdutos.src}
        alt=""
        width={202}
        height={28}
      />
    </section>
  )
}
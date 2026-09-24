import Header from './components/Header'
import Hero from './components/Hero'
import Presenca from './components/Presenca'
import ComoFunciona from './components/ComoFunciona'
import Diferenciais from './components/Diferenciais'
import Tecnologia from './components/Tecnologia'
import Marcas from './components/Marcas'
import Parceiro from './components/Parceiro'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Presenca />
        <ComoFunciona />
        <section className="features-section">
          <div className="features-cards-container">
            <Diferenciais />
            <Tecnologia />
          </div>
        </section>
        <Marcas />
        <Parceiro />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

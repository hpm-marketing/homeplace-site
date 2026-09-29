import Header from '../components/Header'
import Hero from '../components/Hero'
import Presenca from '../components/Presenca'
import ComoFunciona from '../components/ComoFunciona'
import Diferenciais from '../components/Diferenciais'
import Tecnologia from '../components/Tecnologia'
import Monitoramento from '../components/Monitoramento'
import Marcas from '../components/Marcas'
import Parceiro from '../components/Parceiro'
import Faq from '../components/Faq'
import ChamadaFinal from '../components/ChamadaFinal'
import Footer from '../components/Footer'
import logoHeader from '../assets/logo-header.png'
import lojaContainer from '../assets/loja-container.png'
import {
  FAQ_PERGUNTAS,
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  urlPublica,
} from '../constants'

/* Dados estruturados (schema.org) lidos pelo Google: empresa, site e perguntas frequentes */
const dadosEstruturados = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organizacao`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: urlPublica(logoHeader.src),
      image: urlPublica(lojaContainer.src),
      description: SITE_DESCRIPTION,
      areaServed: { '@type': 'State', name: 'Ceará' },
      sameAs: [INSTAGRAM_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_URL}/#organizacao` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: FAQ_PERGUNTAS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados).replace(/</g, '\\u003c') }}
      />
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
        <Monitoramento />
        <Marcas />
        <Parceiro />
        <Faq />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  )
}

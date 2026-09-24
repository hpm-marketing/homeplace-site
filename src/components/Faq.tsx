import { useId, useState } from 'react'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Faq.css'

const PERGUNTAS = [
  {
    q: 'O que é um mercado autônomo?',
    a: 'É um minimercado de autoatendimento, sem funcionários no caixa: você escolhe os produtos direto na prateleira, escaneia os códigos no totem e paga por aproximação, Pix ou cartão. Tudo em poucos minutos, a qualquer hora.',
  },
  {
    q: 'Como faço para instalar o Homeplace Market no meu condomínio?',
    a: 'Basta falar com um de nossos consultores. Avaliamos o espaço do seu condomínio ou empresa e instalamos o Homeplace Market sem nenhum custo de instalação.',
  },
  {
    q: 'É seguro comprar em um mercado sem funcionário?',
    a: 'Sim. Nossas lojas contam com monitoramento 24 horas e totens com tecnologia de autoatendimento moderna e segura, garantindo tranquilidade para moradores e síndicos.',
  },
  {
    q: 'Quais as formas de pagamento aceitas?',
    a: 'Você pode pagar por aproximação, Pix ou cartão de crédito e débito, diretamente no totem.',
  },
  {
    q: 'O Homeplace Market funciona 24 horas?',
    a: 'Sim! Estamos onde você precisa, 24 horas por dia, todos os dias da semana.',
  },
]

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)
  const baseId = useId()

  return (
    <section id="faq" className="faq" aria-labelledby="faq-titulo">
      <div className="faq__inner">
        <div className="faq__header">
          <h2 id="faq-titulo" className="faq__title t-black">
            faq
          </h2>
          <CtaButton
            className="faq__cta"
            variant="green"
            href={CONSULTOR_URL}
            label="quero falar com um consultor"
          />
        </div>

        <ul className="faq__list">
          {PERGUNTAS.map((item, i) => {
            const open = aberta === i
            const panelId = `${baseId}-painel-${i}`
            const buttonId = `${baseId}-botao-${i}`
            return (
              <li key={item.q} className={`faq__item ${open ? 'is-open' : ''}`}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq__question"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setAberta(open ? null : i)}
                  >
                    <span className="faq__question-text">{item.q}</span>
                    <span className="faq__plus" aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className="faq__answer">
                  <div className="faq__answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

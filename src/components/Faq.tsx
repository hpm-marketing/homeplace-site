'use client'

import { useId, useState } from 'react'
import { CONSULTOR_URL, FAQ_PERGUNTAS } from '../constants'
import CtaButton from './CtaButton'
import './Faq.css'

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
            label="quero falar com a Homeplace"
          />
        </div>

        <ul className="faq__list">
          {FAQ_PERGUNTAS.map((item, i) => {
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

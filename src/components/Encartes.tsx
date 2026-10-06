'use client'

import { useEffect, useRef, useState } from 'react'
import { BASE_PATH, CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Encartes.css'

/*
 * Encartes da semana (formato de stories: 1080 x 1920 px).
 *
 * Como atualizar:
 *  1. Salve as imagens em `public/encartes/` (ex.: encarte-1.jpg, encarte-2.jpg...).
 *  2. Informe o nome do arquivo em `arquivo` e descreva a oferta em `alt`
 *     (o Google e leitores de tela leem esse texto).
 *
 * Enquanto `arquivo` estiver vazio, o card mostra um espaço reservado.
 * Trocando a imagem por outra com o mesmo nome, não é preciso mexer aqui.
 */
type Encarte = { arquivo?: string; alt: string }

const ENCARTES: Encarte[] = [
  { arquivo: 'encarte-1.png', alt: 'encarte-1' },
  { arquivo: 'encarte-2.png', alt: 'encarte-2' },
  { arquivo: 'encarte-3.png', alt: 'encarte-3' },
  { arquivo: 'encarte-4.png', alt: 'encarte-4' },
]

const DESTAQUES = [
  'Novas ofertas toda semana',
  'Descontos nas marcas que você já confia',
  'Direto na loja do seu condomínio ou empresa',
]

export default function Encartes() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [ativo, setAtivo] = useState(0)
  const [noInicio, setNoInicio] = useState(true)
  const [noFim, setNoFim] = useState(false)

  const atualizar = () => {
    const track = trackRef.current
    if (!track || track.clientWidth === 0) return
    const slides = Array.from(track.children) as HTMLElement[]
    const inicio = track.getBoundingClientRect().left
    let maisProximo = 0
    let menorDist = Infinity
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - inicio)
      if (dist < menorDist) {
        menorDist = dist
        maisProximo = i
      }
    })
    const fim = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    setNoInicio(track.scrollLeft <= 4)
    setNoFim(fim)
    setAtivo(fim ? slides.length - 1 : maisProximo)
  }

  useEffect(() => {
    atualizar()
    window.addEventListener('resize', atualizar)
    return () => window.removeEventListener('resize', atualizar)
  }, [])

  const passar = (direcao: 1 | -1) => {
    const track = trackRef.current
    const slide = track?.children[0] as HTMLElement | undefined
    if (!track || !slide) return
    const passo = slide.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0)
    track.scrollBy({ left: passo * direcao, behavior: 'smooth' })
  }

  const irPara = (index: number) => {
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    if (!track || !slide) return
    /* O track é `position: relative`, então offsetLeft já é relativo a ele */
    const recuo = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0
    track.scrollTo({ left: slide.offsetLeft - recuo, behavior: 'smooth' })
  }

  return (
    <section id="encartes" className="encartes" aria-labelledby="encartes-titulo">
      <div className="encartes__inner">
        <div className="encartes__content">
          <p className="encartes__kicker t-medium">Encartes</p>
          <h2 id="encartes-titulo" className="encartes__title t-black">
            ofertas novas <span className="hl-green">toda semana</span>
          </h2>
          <p className="encartes__text t-body">
            Toda semana preparamos um encarte com ofertas especiais dos produtos que você mais
            compra. Mais economia sem sair do seu condomínio ou da sua empresa.
          </p>

          <ul className="encartes__destaques">
            {DESTAQUES.map((texto) => (
              <li key={texto} className="encartes__destaque t-body">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {texto}
              </li>
            ))}
          </ul>

          <CtaButton
            className="encartes__cta"
            variant="green"
            href={CONSULTOR_URL}
            label="quero falar com a Homeplace"
          />
        </div>

        <div
          className="encartes__carrossel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Encartes de ofertas da semana"
        >
          <ul ref={trackRef} className="encartes__track" onScroll={atualizar}>
            {ENCARTES.map((encarte, i) => (
              <li key={i} className="encartes__slide" aria-label={`${i + 1} de ${ENCARTES.length}`}>
                {encarte.arquivo ? (
                  <img
                    src={`${BASE_PATH}/encartes/${encarte.arquivo}`}
                    alt={encarte.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="encartes__reservado" role="img" aria-label={encarte.alt}>
                    <span className="encartes__reservado-selo t-black">oferta</span>
                    <strong className="encartes__reservado-titulo t-black">
                      encarte
                      <br />
                      da semana
                    </strong>
                    <span className="encartes__reservado-texto">Em breve</span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="encartes__controles">
            <button
              type="button"
              className="encartes__seta"
              onClick={() => passar(-1)}
              disabled={noInicio}
              aria-label="Encarte anterior"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            <div className="encartes__dots">
              {ENCARTES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`encartes__dot ${i === ativo ? 'is-active' : ''}`}
                  onClick={() => irPara(i)}
                  aria-label={`Ir para o encarte ${i + 1}`}
                  aria-current={i === ativo}
                />
              ))}
            </div>

            <button
              type="button"
              className="encartes__seta"
              onClick={() => passar(1)}
              disabled={noFim}
              aria-label="Próximo encarte"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

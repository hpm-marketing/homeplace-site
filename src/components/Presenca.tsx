'use client'

import { useEffect, useState, useRef } from 'react'
import mapaCeara from '../assets/mapa-ceara.png'
import seloEstamos from '../assets/selo-estamos.png'
import sacola from '../assets/sacola.svg'
import fotoCondominio from '../assets/estrutura-loja.png'
import fotoEmpresa from '../assets/estrutura-florence.png'
import fotoInterior from '../assets/estrutura-loja-container.png'
import { CONSULTOR_URL } from '../constants'
import CtaButton from './CtaButton'
import './Presenca.css'

/* Galeria de lojas ao lado de "estamos onde você precisa".
   Para trocar ou adicionar fotos, basta editar esta lista:
   - `tipo`: 'empresa' ou 'condominio' (define a cor e o texto pequeno da tag)
   - `nome`: nome da empresa ou do condomínio, exibido em destaque na tag
   - `posicao` (opcional): qual parte da foto fica visível no card quadrado,
     ex.: 'center', 'left', 'right', '30% 50%' (padrão: centro) */
type TipoLoja = 'empresa' | 'condominio'

const TAGS: Record<TipoLoja, string> = {
  empresa: 'loja em empresa',
  condominio: 'loja em condomínio',
}

type FotoLoja = {
  src: string
  alt: string
  tipo: TipoLoja
  nome: string
  posicao?: string
  className?: string
}

const GALERIA: FotoLoja[] = [
  {
    src: fotoCondominio.src,
    tipo: 'empresa',
    nome: 'P&P',
    alt: 'Loja Homeplace na empresa P&P',
  },
  {
    src: fotoInterior.src,
    tipo: 'condominio',
    nome: 'Grand Village',
    alt: 'Loja Homeplace na Grand Village',
    className: 'is-zoom',
  },
  {
    src: fotoEmpresa.src,
    tipo: 'condominio',
    nome: 'Parque Florence',
    alt: 'Loja Homeplace no Parque Florence',
  },
]

export default function Presenca() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp: number | null = null
          const duration = 1600
          const endValue = 40

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * endValue))

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(endValue)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  /* Animação de entrada da frase "Estamos onde você precisa" ao rolar até a faixa */
  const bandRef = useRef<HTMLDivElement>(null)
  const [bandArmed, setBandArmed] = useState(false)
  const [bandVisible, setBandVisible] = useState(false)

  useEffect(() => {
    const band = bandRef.current
    if (!band) return
    setBandArmed(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBandVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(band)
    return () => observer.disconnect()
  }, [])

  /* Carrossel de fotos: setas e indicadores acompanham a rolagem (também por arraste) */
  const trackRef = useRef<HTMLUListElement>(null)
  const [slideAtivo, setSlideAtivo] = useState(0)
  const [noInicio, setNoInicio] = useState(true)
  const [noFim, setNoFim] = useState(false)

  const atualizarCarrossel = () => {
    const track = trackRef.current
    if (!track) return
    const slides = Array.from(track.children) as HTMLElement[]
    const inicio = track.getBoundingClientRect().left
    let maisProximo = 0
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - inicio)
      const distAtual = Math.abs(slides[maisProximo].getBoundingClientRect().left - inicio)
      if (dist < distAtual) maisProximo = i
    })
    const fim = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    setNoInicio(track.scrollLeft <= 4)
    setNoFim(fim)
    setSlideAtivo(fim ? slides.length - 1 : maisProximo)
  }

  useEffect(() => {
    atualizarCarrossel()
    window.addEventListener('resize', atualizarCarrossel)
    return () => window.removeEventListener('resize', atualizarCarrossel)
  }, [])

  const irParaSlide = (index: number) => {
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    if (!track || !slide) return
    /* O track é `position: relative`, então offsetLeft já é relativo a ele */
    const recuo = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0
    track.scrollTo({ left: slide.offsetLeft - recuo, behavior: 'smooth' })
  }

  const passarSlide = (direcao: 1 | -1) => {
    const track = trackRef.current
    const slide = track?.children[0] as HTMLElement | undefined
    if (!track || !slide) return
    const passo = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0')
    track.scrollBy({ left: passo * direcao, behavior: 'smooth' })
  }

  const bandClass = [
    'presenca__band',
    bandArmed ? 'is-armed' : '',
    bandVisible ? 'is-visible' : '',
  ].join(' ')

  return (
    <section className="presenca" aria-labelledby="presenca-titulo">
      <div className="presenca__top">
        <div className="presenca__top-inner">
          <div ref={counterRef} className="presenca__somos-graphic">
            <span className="presenca__somos-label t-black">SOMOS</span>
            <div className="presenca__somos-number t-black">
              <span className="presenca__plus">+</span>
              <span className="presenca__count">{count}</span>
            </div>
            <span className="presenca__somos-sublabel t-black">LOJAS NO CEARÁ</span>
          </div>
          <img className="presenca__mapa" src={mapaCeara.src} alt="Mapa do Ceará" width={214} height={200} />
        </div>
      </div>

      <div ref={bandRef} className={bandClass}>
        <div className="presenca__band-inner">
          <div className="presenca__selo" aria-hidden="true">
            <img src={seloEstamos.src} alt="" />
          </div>

          <div className="presenca__content">
            <h2 id="presenca-titulo" className="presenca__title t-black">
              <span className="presenca__line">estamos onde</span>
              <span className="presenca__line">você precisa.</span>
              <span className="presenca__line presenca__line--destaque hl-black">24h por dia</span>
            </h2>
            <CtaButton className="presenca__cta" href={CONSULTOR_URL} label="quero falar com a Homeplace" />
          </div>

          <div className="presenca__galeria" role="region" aria-roledescription="carrossel" aria-label="Fotos de lojas Homeplace">
            <ul ref={trackRef} className="presenca__track" onScroll={atualizarCarrossel}>
              {GALERIA.map((foto, i) => (
                <li
                  key={`${foto.src}-${i}`}
                  className={`presenca__foto ${foto.className ?? ''}`}
                  aria-label={`${i + 1} de ${GALERIA.length}`}
                >
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    decoding="async"
                    style={foto.posicao ? { objectPosition: foto.posicao } : undefined}
                  />
                  <span className={`presenca__tag presenca__tag--${foto.tipo}`}>
                    <span className="presenca__tag-tipo">{TAGS[foto.tipo]}</span>
                    <span className="presenca__tag-nome">{foto.nome}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="presenca__controles">
              <button
                type="button"
                className="presenca__seta"
                onClick={() => passarSlide(-1)}
                disabled={noInicio}
                aria-label="Foto anterior"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>

              <div className="presenca__dots">
                {GALERIA.map((foto, i) => (
                  <button
                    key={`dot-${foto.src}-${i}`}
                    type="button"
                    className={`presenca__dot ${i === slideAtivo ? 'is-active' : ''}`}
                    onClick={() => irParaSlide(i)}
                    aria-label={`Ir para a foto ${i + 1}`}
                    aria-current={i === slideAtivo}
                  />
                ))}
              </div>

              <button
                type="button"
                className="presenca__seta"
                onClick={() => passarSlide(1)}
                disabled={noFim}
                aria-label="Próxima foto"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <img className="presenca__sacola" src={sacola.src} alt="" width={116} height={179} />
        </div>
      </div>
    </section>
  )
}


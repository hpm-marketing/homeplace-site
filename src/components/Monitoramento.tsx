import type { ReactNode } from 'react'
import cameraCondominio from '../assets/time-monitoramento.png'
import cameraEmpresa from '../assets/relacionamento.png'
import cameraContainer from '../assets/monitoramento-cameras.png'
import { CONSULTOR_URL, SAC_URL } from '../constants'
import CtaButton from './CtaButton'
import './Monitoramento.css'

/* Telas da "central de monitoramento". Troque as fotos/legendas aqui. */
const CAMERAS = [
  { src: cameraCondominio.src, legenda: 'CAM 01 · Condomínio' },
  { src: cameraEmpresa.src, legenda: 'CAM 02 · Empresa' },
  { src: cameraContainer.src, legenda: 'CAM 03 · Loja container' },
]

function IconeCamera() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3z" />
      <path d="M16 11l5-3v8l-5-3" />
      <circle cx="7" cy="12" r="1.5" />
    </svg>
  )
}

function IconeEquipe() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.9.4 5 2.8 5 5.8" />
    </svg>
  )
}

function IconeAcao() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  )
}

function IconeSuporte() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  )
}

type Item = { icone: ReactNode; titulo: string; texto: ReactNode }

/* Itens da lista: revise os textos para refletir exatamente a operação da equipe */
const ITENS: Item[] = [
  {
    icone: <IconeCamera />,
    titulo: 'Câmeras ao vivo',
    texto: 'Todas as lojas são acompanhadas em tempo real pela nossa central.',
  },
  {
    icone: <IconeEquipe />,
    titulo: 'Equipe dedicada',
    texto: 'Profissionais atentos 24 horas, inclusive fins de semana e feriados.',
  },
  {
    icone: <IconeAcao />,
    titulo: 'Ação rápida',
    texto: 'Qualquer ocorrência é identificada e tratada na hora.',
  },
  {
    icone: <IconeSuporte />,
    titulo: 'Suporte ao cliente',
    texto: (
      <>
        Precisou de ajuda na loja?{' '}
        <a className="monit__link" href={SAC_URL} target="_blank" rel="noopener noreferrer">
          Fale com o nosso SAC
        </a>
        .
      </>
    ),
  },
]

export default function Monitoramento() {
  return (
    <section id="monitoramento" className="monit" aria-labelledby="monit-titulo">
      <div className="monit__inner">
        <div className="monit__content">
          <p className="monit__kicker t-medium">Monitoramento</p>
          <h2 id="monit-titulo" className="monit__title t-black">
            de olho na sua loja <span className="hl-green">24h por dia</span>
          </h2>
          <p className="monit__text t-body">
            Uma equipe dedicada acompanha todas as lojas Homeplace em tempo real, dia e noite,
            todos os dias da semana. Mais segurança para moradores, colaboradores e síndicos, e a
            loja sempre pronta para a sua compra.
          </p>

          <ul className="monit__lista">
            {ITENS.map((item) => (
              <li key={item.titulo} className="monit__item">
                <span className="monit__icone">{item.icone}</span>
                <div>
                  <h3 className="monit__item-titulo t-black">{item.titulo}</h3>
                  <p className="monit__item-texto t-body">{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <CtaButton
            className="monit__cta"
            variant="green"
            href={CONSULTOR_URL}
            label="quero falar com um consultor"
          />
        </div>

        {/* Painel ilustrativo da central de monitoramento */}
        <div className="monit__painel" aria-hidden="true">
          <div className="monit__painel-topo">
            <span className="monit__ao-vivo">
              <span className="monit__rec" />
              ao vivo
            </span>
            <span className="monit__painel-nome">Central Homeplace</span>
          </div>

          <ul className="monit__telas">
            {CAMERAS.map((camera) => (
              <li key={camera.legenda} className="monit__tela">
                <img src={camera.src} alt="" loading="lazy" decoding="async" />
              </li>
            ))}
            <li className="monit__tela monit__tela--status">
              <strong className="monit__status-numero t-black">24h</strong>
              <span className="monit__status-texto">7 dias por semana</span>
              <span className="monit__status-ok">
                <span className="monit__ok-dot" />
                central ativa
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

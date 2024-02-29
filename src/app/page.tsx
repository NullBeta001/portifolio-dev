'use client'

import { CaretDoubleDown, DiscordLogo, Envelope, GithubLogo, LinkedinLogo, RedditLogo } from 'phosphor-react';
import React from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = React.useRef(null);
  const iconStyle: string = "hover:scale-[115%] transition-transform hover:cursor-pointer duration-500";

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front End Develper', 'UX Designer', 'Content Creator'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  //TODO: revisar functione retirar funcionalidades inuteis
  function scrollToNextSection() {
    // Obtém a altura da janela de visualização
    const windowHeight: number = window.innerHeight;
    console.log("windowHeight:", windowHeight);

    // Obtém a posição do topo da próxima seção
    const nextSection: HTMLElement | null = document.querySelector('.next-section');
    console.log("nextSection:", nextSection);
    if (!nextSection) return; // Verifica se a próxima seção foi encontrada
    const nextSectionTop: number = nextSection.offsetTop;
    console.log("nextSectionTop:", nextSectionTop);

    // Calcula a posição para rolar
    const scrollTo: number = nextSectionTop - windowHeight + 1000;
    console.log("scrollTo:", scrollTo);

    // Rola a página para baixo até a próxima seção
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth' // Para uma animação suave
    });
  }



  return (
    <div className="h-screen">
      <div className="items-center justify-center bg-[#272727] flex flex-col h-screen">
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="mb-3 mt-[-3rem] flex flex-col font-medium font-chakra-petch items-center text-[4.8rem] bg-gradient-to-b from-green-600 via-blue-500 to-purple-700 text-transparent bg-clip-text">
            <p>Fábio</p>
            <p className="mt-[-2rem]">Oliveira</p>
          </div>
          <h1 className="typewrite font-sans font-extralight text-2xl">
            <span className="ml-2 font-extralight font-chakra-petch text-[#f6ff00]" ref={el} />
          </h1>
          <div className="mt-8 flex space-x-4">
            <LinkedinLogo className={iconStyle} size={40} color="#ffffff" weight="light" />
            <DiscordLogo className={iconStyle} size={40} color="#ffffff" weight="light" />
            <Envelope className={iconStyle} size={40} color="#ffffff" weight="light" />
            <RedditLogo className={iconStyle} size={40} color="#ffffff" weight="light" />
            <GithubLogo className={iconStyle} size={40} color="#ffffff" weight="light" />
          </div>
        </div>
        <CaretDoubleDown className={`${iconStyle}`} size={48} onClick={scrollToNextSection} color="#ffffff" weight="light" />
      </div>
      <div className="next-section">
        <div className="border-[1px] border-stone-100 w-full">
          <div className="h-[100vh]">
            Aqui
          </div>
        </div>
      </div>
      <div className="next-section">
        <div className="border-[1px] border-stone-100 w-full">
          <div className="h-[100vh]">
            Aqui
          </div>
        </div>
      </div>
    </div>
  )
}

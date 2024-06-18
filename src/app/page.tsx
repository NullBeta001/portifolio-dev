'use client'

import About from '@/components/About';
import { Tooltip } from 'antd';
import { CaretDoubleDown, DiscordLogo, Envelope, GithubLogo, LinkedinLogo, RedditLogo } from 'phosphor-react';
import React from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = React.useRef(null);
  const iconStyle: string = "hover:scale-[115%] transition-transform hover:cursor-pointer duration-500";

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front End Engineer', 'UX Designer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  //TODO: revisar function e retirar funcionalidades inuteis
  function scrollToNextSection() {
    const windowHeight: number = window.innerHeight;
    const nextSection: HTMLElement | null = document.querySelector('.next-section');
    if (!nextSection) return;
    const nextSectionTop: number = nextSection.offsetTop;

    const scrollTo: number = nextSectionTop - windowHeight + 810;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  };

  const handleClick = (param: number) => {
    let url: string;
    switch (param) {
      case 1:
        url = 'https://www.linkedin.com/in/fabio-oliveira-nb/';
        break;
      case 2:
        url = 'https://www.linkedin.com/in/fabio-oliveira-nb/';
        break;
      case 3:
        url = 'mailto:fabiooli221297@gmail.com?subject=Assunto do Email&body=Olá Fábio,';
        break;
      case 4:
        url = 'https://www.linkedin.com/in/fabio-oliveira-nb/';
        break;
      case 5:
        url = 'https://github.com/NullBeta001';
        break;
      default:
        url = 'https://www.linkedin.com/in/fabio-oliveira-nb/'
    }
    console.log(url)
    window.open(url, '_blank')
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
            <Tooltip title="LinkeIn">
              <LinkedinLogo className={iconStyle} size={40} color="#ffffff" weight="light" onClick={() => handleClick(1)} />
            </Tooltip>
            <Tooltip title="Discord">
              <DiscordLogo className={iconStyle} size={40} color="#ffffff" weight="light" onClick={() => handleClick(2)} />
            </Tooltip>
            <Tooltip title="E-Mail">
              <Envelope className={iconStyle} size={40} color="#ffffff" weight="light" onClick={() => handleClick(3)} />
            </Tooltip>
            <Tooltip title="Reddit">
              <RedditLogo className={iconStyle} size={40} color="#ffffff" weight="light" onClick={() => handleClick(4)} />
            </Tooltip>
            <Tooltip title="GitHub">
              <GithubLogo className={iconStyle} size={40} color="#ffffff" weight="light" onClick={() => handleClick(5)} />
            </Tooltip>
          </div>
        </div>
        <CaretDoubleDown className={`${iconStyle}`} size={48} onClick={scrollToNextSection} color="#ffffff" weight="light" />
      </div>
      <div className="next-section">
        <div className="w-full">
          <About />
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

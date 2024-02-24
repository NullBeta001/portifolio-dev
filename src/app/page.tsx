'use client'

import React from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = React.useRef(null);

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

  return (
    <div className="items-center justify-center bg-[#272727] flex h-[95vh]">
      <div className="inline-block font-extralight text-xl">
        <h1 className="typewrite font-sans">
          Fábio Oliveira
          <span className="ml-2 font-sans text-[#fff270]" ref={el} />
        </h1>
      </div>
    </div>
  )
}

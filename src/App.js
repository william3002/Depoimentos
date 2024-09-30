import React, { useState } from 'react';
import './index.css';
import Tanya from './Componentes/imgs/image-tanya.jpg';
import John from './Componentes/imgs/image-john.jpg';
import ImagemDeFundo from './Componentes/imgs/pattern-bg.svg'
import Aspas from './Componentes/imgs/pattern-quotes.svg';
import IconeNext from './Componentes/imgs/icon-next.svg';
import IconePrev from './Componentes/imgs/icon-prev.svg';
import Curve from './Componentes/imgs/pattern-curve.svg';

export default function App() {
  const [oculto, setOculto] = useState(true);

  const mostrarAnterior = () => {
    setOculto(true);
  };

  const mostrarProximo = () => {
    setOculto(false);
  };

  return (
    <>
      <div className='h-screen flex justify-center items-center font-inter'>
        <div className='mt-56 xl:mt-0 xl:flex flex-row-reverse'>

          <div className={`flex flex-col justify-center items-center h-96 mt-44 ms-4 xl:mt-20 ${oculto ? 'block' : 'hidden'}`}>
            <img id='imagemDeFundo' className='absolute xl:me-28' src={ImagemDeFundo} alt='imagem de fundo'></img>
            <img id='tanya' className='absolute w-96 xl:w-1/3 shadow-xl xl:me-36' src={Tanya} alt='Imagem da Tanya' />
            <button className='flex justify-center gap-5 items-center relative right-0 top-48 bg-gray-200 w-20 h-10 rounded-full xl:right-56 xl:top-64'>
              <img className='w-4' src={IconePrev} alt='Voltar' onClick={mostrarAnterior} />
              <img className='w-4' src={IconeNext} alt='Próximo' onClick={mostrarProximo} />
            </button>
          </div>

          <div className={`flex flex-col justify-center items-center h-96 mt-44 ms-4 xl:mt-20 ${oculto ? 'hidden' : 'block'}`}>
            <img id='imagemDeFundo' className='absolute xl:me-28' src={ImagemDeFundo} alt='imagem de fundo'></img>
            <img id='john' className='absolute w-96 xl:w-1/3 shadow-xl xl:me-36' src={John} alt='Imagem do John' />
            <button className='flex justify-center gap-5 items-center relative right-0 top-48 bg-gray-200 w-20 h-10 rounded-full xl:right-56 xl:top-64'>
              <img className='w-4' src={IconePrev} alt='Voltar' onClick={mostrarAnterior} />
              <img className='w-4' src={IconeNext} alt='Próximo' onClick={mostrarProximo} />
            </button>
          </div>

          <div className='xl:block'>
            <img className='relative top-20 left-44 xl:left-0' src={Aspas} alt='aspas' />

            <h1 className='h-40 mx-14 mt-10 text-lg text-center xl:text-3xl xl:text-left xl:relative xl:mt-14 xl:right-44'>
              {oculto
                ? '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
                : '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'}
            </h1>

            <p className='h-40 flex flex-col sm:inline-block items-center text-lg font-bold text-blue-950 mt-10 xl:mt-16 xl:relative xl:right-32 xl:ms-2'>
              {oculto ? 'Tanya Sinclair' : 'John Tarkpor'}
              <span className='text-gray-400 xl:ms-4 font-normal'>
                {oculto ? 'UX Engineer' : 'Junior Front-end Developer'}
              </span>
            </p>
            <img id='curva' className='xl:absolute xl:left-0 xl:top-450' src={Curve} alt='curva' />
          </div>
        </div>
      </div>
    </>
  );
}



import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    {/* hero start */}
      <section className="hero" id='home'>

        <div className="container hero__container">

          <div className="hero__text-box">
            <h1 className="hero__title">Assalomu Alaykum! <br /> <b className="primary"><span>Qudratulloh</span> Uz</b> portfolio saytiga xush kelibsiz!</h1>
            <Link className="btn hero__btn">Men haqimda ❯</Link>
          </div>
          
        </div>

      </section>
    {/* hero end */}
    </>
  );
}

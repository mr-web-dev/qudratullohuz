import React, { useState } from 'react'
import MyImg from "../img/about__img.jpg"
import Resume from '../pdf/resume.pdf'
import { Link } from 'react-router-dom';

export default function About() {
  const [miniLoad , SetMiniLoad] = useState(true);
  function removeMiniLoad(){
    setTimeout(() => {
      SetMiniLoad(false);
    }, 1000);
  }
  return (
    <>
    {/* about start */}
      <section className="about" id="about">

        <div className="container about__container">

          <div onLoad={(e)=> removeMiniLoad()} className="about__img-box">
            <img draggable="false" src={MyImg} alt="Me" className={miniLoad == true ? "about__img about__img-hidden" : "about__img"} />
            <span className={miniLoad == true ? "mini-loader" : "mini-loader mini-loader-hidden"}></span>
          </div>

          <div className="about__text-box">
            <h2 className="about__title">Men haqimda</h2>
            <p className="about__text">Assalomu alaykum. Mening ismim <b>Qudratulloh</b>. Mening familiyam <b>Mahammadjonov</b>. Men <b>14</b> yoshdaman. Men <b>2009</b> yili <b>O'zbekiston</b> respublikasining <b>Andijon</b> shahrida tug'ilganman. Men <b>front-end</b> dasturchiman.</p>
            <div className="btn-box about__btn-box">
              <a href={Resume} download="resume" className="btn about__btn">Rezyume 📄</a>
              <Link to="/portfolio" className="btn about__btn">Loyihalar ❯</Link>
            </div>
          </div>


        </div>
      
      </section>
    {/* about end */}</>
  );
}

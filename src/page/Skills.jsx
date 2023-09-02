import React from 'react'
import FaHtml5 from '../img/skills/Fa/FaHtml5.svg'
import FaCss3Alt from '../img/skills/Fa/FaCss3Alt.svg'
import FaBootstrap from '../img/skills/Fa/FaBootstrap.svg'
import SiTailwindcss from '../img/skills/Si/SiTailwindcss.svg'
import FaSass from '../img/skills/Fa/FaSass.svg'
import SiJavascript from '../img/skills/Si/SiJavascript.svg'
import FaReact from '../img/skills/Fa/FaReact.svg'
import SiBem from '../img/skills/Si/SiBem.svg'
import FaGithub from '../img/skills/Fa/FaGithub.svg'
import SiNetlify from '../img/skills/Si/SiNetlify.svg'
import SiVercel from '../img/skills/Si/SiVercel.svg'
import FaFigma from '../img/skills/Fa/FaFigma.svg'

export default function Skills() {
  const obj = [
    {
      id: 1,
      img: FaHtml5,
      title: "html"
    },
    {
      id: 2,
      img: FaCss3Alt,
      title: "css"
    },
    {
      id: 3,
      img: FaBootstrap,
      title: "bootstrap"
    },
    {
      id: 4,
      img: SiTailwindcss,
      title: "tailwindcss"
    },
    {
      id: 5,
      img: FaSass,
      title: "sass"
    },
    {
      id: 6,
      img: SiJavascript,
      title: "javascript"
    },
    {
      id: 7,
      img: FaReact,
      title: "reactjs"
    },
    {
      id: 8,
      img: SiBem,
      title: "bem"
    },
    {
      id: 9,
      img: FaGithub,
      title: "github"
    },
    {
      id: 10,
      img: SiNetlify,
      title: "netlify"
    },
    {
      id: 11,
      img: SiVercel,
      title: "vercel"
    },
    {
      id: 12,
      img: FaFigma,
      title: "figma"
    },
  ]
  return (
    <>
    {/* skills start */}
    <section className="skills">

      <div className="container skills__container">

        <h2 className="skills__title">Ko'nikmalarim</h2>
        
        <div className="skills__card-wrap">
          {obj.map((item)=> {
            return (
              <div key={item.id} className="skills__card">

                <div className="skills__card__img-box">
                  <img draggable="false" src={item.img} alt={item.title} className="skills__card__img" />
                </div>
                
                <div className="skills__card__text-box">
                  <h3 className="skills__card__title">{item.title}</h3>
                </div>

              </div>
            )
          })}
        </div>

      </div>

    </section>
    {/* skills end */}
    </>
  );
}

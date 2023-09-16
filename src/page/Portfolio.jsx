import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Img from "../img/hero__img.svg"
import CardImg1 from '../img/portfolio/CardImg1.jpg'
import CardImg2 from '../img/portfolio/CardImg2.jpg'
import CardImg3 from '../img/portfolio/CardImg3.jpg'
import CardImg4 from '../img/portfolio/CardImg4.jpg'
import CardImg5 from '../img/portfolio/CardImg5.jpg'
import CardImg6 from '../img/portfolio/CardImg6.jpg'
import CardImg7 from '../img/portfolio/CardImg7.jpg'
import CardImg8 from '../img/portfolio/CardImg8.jpg'
import CardImg9 from '../img/portfolio/CardImg9.jpg'
import CardImg10 from '../img/portfolio/CardImg10.jpg'
import CardImg11 from '../img/portfolio/CardImg11.jpg'
// import CardImg12 from '../img/portfolio/CardImg12.jpg'
// import CardImg13 from '../img/portfolio/CardImg13.jpg'

export default function Portfolio() {
  const githubUsername = "mr-web-dev";
  const [miniLoad , setMiniLoad] = useState(true);
  function removeMiniLoad(){
    setTimeout(() => {
      setMiniLoad(false);
    }, 1000);
  }
  const obj = [
    {
      id: 1,
      img: CardImg1,
      randomImg: "https://picsum.photos/300",
      title: "Mr. Adam",
      link: "https://mr-adam.netlify.app",
      git: `https://github.com/${githubUsername}/mr.adam`
    },
    {
      id: 2,
      img: CardImg2,
      randomImg: "https://picsum.photos/300",
      title: "Apple Watch",
      link: "https://figma-apple-watch.netlify.app",
      git: `https://github.com/${githubUsername}/apple-watch`
    },
    {
      id: 3,
      img: CardImg3,
      randomImg: "https://picsum.photos/300",
      title: "AnsorMed",
      link: "https://figma-ansormed.netlify.app",
      github: `https://github.com/${githubUsername}/ansormed`
    },
    {
      id: 4,
      img: CardImg4,
      randomImg: "https://picsum.photos/300",
      title: "Translated",
      link: "https://translated-fun.netlify.app",
      github: `https://github.com/${githubUsername}/translated.fun`
    },
    {
      id: 5,
      img: CardImg5,
      randomImg: "https://picsum.photos/300",
      title: "Akademnashr",
      link: "https://figma-akademnashr.netlify.app",
      github: `https://github.com/${githubUsername}/akademnashr`
    },
    {
      id: 6,
      img: CardImg6,
      randomImg: "https://picsum.photos/300",
      title: "Free Landing Page",
      link: "https://figma-free-landing-page.netlify.app",
      github: `https://github.com/${githubUsername}/free-landing-page`
    },
    {
      id: 7,
      img: CardImg7,
      randomImg: "https://picsum.photos/300",
      title: "Qudratulloh Mahammadjonov",
      link: "https://qudratulloh.netlify.app",
      github: `https://github.com/${githubUsername}/portfolio`
    },
    {
      id: 8,
      img: CardImg8,
      randomImg: "https://picsum.photos/300",
      title: "Burj Al-Arab",
      link: "https://burj-alarab-page.netlify.app",
      github: `https://github.com/${githubUsername}/burj-al-arab`
    },
    {
      id: 9,
      img: CardImg9,
      randomImg: "https://picsum.photos/300",
      title: "Nometa",
      link: "https://nometa-uz.netlify.app",
      github: `https://github.com/${githubUsername}/nometauz`
    },
    {
      id: 10,
      img: CardImg10,
      randomImg: "https://picsum.photos/300",
      title: "Game | Qudratulloh",
      link: "https://game-qudratulloh.netlify.app",
      github: `https://github.com/${githubUsername}/game`
    },
    {
      id: 11,
      img: CardImg11,
      randomImg: "https://picsum.photos/300",
      title: "Bayram muborak!",
      link: "https://8mart.netlify.app",
      github: `https://github.com/${githubUsername}/8-mart`
    },
    {
      id: 12,
      // img: CardImg12,
      randomImg: "https://picsum.photos/300",
      title: "Qudratulloh Mahammadjonov",
      link: "https://i-dev.netlify.app",
      github: `https://github.com/${githubUsername}/idev`
    },
    {
      id: 13,
      // img: CardImg13,
      randomImg: "https://picsum.photos/300",
      title: "NAMANGANLIKLAR 24",
      link: "https://figma-n24.netlify.app",
      github: `https://github.com/${githubUsername}/n24`
    },
  ];
  return (
    <>
    {/* portfolio start */}
    <section className="portfolio" id='portfolio'>

      <div className="container portfolio__container">

        <h2 className="portfolio__title">Loyihalarim</h2>

        <div className="portfolio__card-wrap">

          {obj.map((item) => {
            return (
              <div key={item.id} className="portfolio__card">

                <div onLoad={()=> removeMiniLoad()} className="portfolio__card__img-box">
                  <img draggable="false" src={item.img || item.randomImg + "?random" + item.id} alt={item.title} className={miniLoad == true ? "portfolio__card__img portfolio__card__img-hidden" : "portfolio__card__img"} />
                  <span className={miniLoad == true ? "mini-loader" : "mini-loader mini-loader-hidden"}></span>
                </div>

                <div className="portfolio__card__text-box">
                  <h3 className="portfolio__card__title">{item.title}</h3>
                  <a target='_blank' href={item.link} className="btn portfolio__card__btn">Sayt 🌐</a>
                  <a target='_blank' href={item.github} className="btn portfolio__card__btn">Github 😺</a>
                </div>
                
              </div>
            )
          })}

        </div>

        <Link to="/skills" className="btn portfolio__btn">Ko'nikmalar ❯</Link>

      </div>

    </section>
    {/* portfolio end */}
    </>
  );
}

import React from 'react'

export default function Portfolio() {
  const githubUsername = "mr-web-dev"
  const obj = [
    {
      id: 1,
      img: "https://picsum.photos/300",
      title: "Mr. Adam",
      link: "https://mr-adam.netlify.app",
      git: `https://github.com/${githubUsername}/mr.adam`
    },
    {
      id: 2,
      img: "https://picsum.photos/300",
      title: "Apple Watch",
      link: "https://figma-apple-watch.netlify.app",
      git: `https://github.com/${githubUsername}/apple-watch`
    },
    {
      id: 3,
      img: "https://picsum.photos/300",
      title: "AnsorMed",
      link: "https://figma-ansormed.netlify.app",
      github: `https://github.com/${githubUsername}/ansormed`
    },
    {
      id: 4,
      img: "https://picsum.photos/300",
      title: "AnsorMed",
      link: "https://translated-fun.netlify.app",
      github: `https://github.com/${githubUsername}/translated.fun`
    },
    {
      id: 5,
      img: "https://picsum.photos/300",
      title: "Akademnashr",
      link: "https://figma-akademnashr.netlify.app",
      github: `https://github.com/${githubUsername}/akademnashr`
    },
    {
      id: 6,
      img: "https://picsum.photos/300",
      title: "Free Landing Page",
      link: "https://figma-free-landing-page.netlify.app",
      github: `https://github.com/${githubUsername}/free-landing-page`
    },
    {
      id: 7,
      img: "https://picsum.photos/300",
      title: "Qudratulloh Mahammadjonov",
      link: "https://qudratulloh.netlify.app",
      github: `https://github.com/${githubUsername}/portfolio`
    },
    {
      id: 8,
      img: "https://picsum.photos/300",
      title: "Burj Al-Arab",
      link: "https://burj-alarab-page.netlify.app",
      github: `https://github.com/${githubUsername}/burj-al-arab`
    },
    {
      id: 9,
      img: "https://picsum.photos/300",
      title: "Nometa",
      link: "https://nometa-uz.netlify.app",
      github: `https://github.com/${githubUsername}/nometauz`
    },
    {
      id: 10,
      img: "https://picsum.photos/300",
      title: "Game | Qudratulloh",
      link: "https://game-qudratulloh.netlify.app",
      github: `https://github.com/${githubUsername}/game`
    },
    {
      id: 11,
      img: "https://picsum.photos/300",
      title: "Bayram muborak!",
      link: "https://8mart.netlify.app",
      github: `https://github.com/${githubUsername}/8-mart`
    },
    {
      id: 12,
      img: "https://picsum.photos/300",
      title: "Qudratulloh Mahammadjonov",
      link: "https://i-dev.netlify.app",
      github: `https://github.com/${githubUsername}/idev`
    },
    {
      id: 13,
      img: "https://picsum.photos/300",
      title: "NAMANGANLIKLAR 24",
      link: "https://figma-n24.netlify.app",
      github: `https://github.com/${githubUsername}/n24`
    },
  ]
  return (
    <>
    {/* portfolio start */}
    <section className="portfolio">

      <div className="container portfolio__container">

        <h2 className="portfolio__title">Loyihalarim</h2>

        <div className="portfolio__card-wrap">

          {obj.map((item) => {
            return (
              <div key={item.id} className="portfolio__card">

                <div className="portfolio__card__img-box">
                  <img draggable="false" src={item.img} alt={item.title} className="portfolio__card__img" />
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

      </div>

    </section>
    {/* portfolio end */}
    </>
  );
}

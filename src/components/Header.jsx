import React from 'react'
import { Link , NavLink } from 'react-router-dom'

export default function Header() {
  const navData = [
    {
      id: 1,
      title: "Bosh sahifa",
      link: "/"
    },
    {
      id: 2,
      title: "Men haqimda",
      link: "about"
    },
    {
      id: 3,
      title: "Loyihalar",
      link: "portfolio"
    },
    {
      id: 4,
      title: "Ko'nikmalar",
      link: "skills"
    },
    {
      id: 5,
      title: "Bog'lanish",
      link: "contact"
    }
  ]
  return (
    <>
    {/* header start */}
    <header className="header">

      <div className="container header__container">

        <Link to="/" className="header__logo">Qudratulloh Uz</Link>

        <nav className="nav">

          <button className="bars-btn">
            <i className="fas fa-bars open-bars"></i>
            <i className="fas fa-times close-bars"></i>
          </button>

          <ul className="nav__list">

            {navData.map((item)=> {
              return (
                <li key={item.id} className="nav__item">
                  <NavLink to={item.link} className="nav__link">{item.title}</NavLink>
                </li>
              )
            })}

          </ul>
          
        </nav>

      </div>

    </header>
    {/* header end */}
    </>
  );
}

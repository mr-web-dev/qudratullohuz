import React, { useState } from 'react'
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
  ];
  const [btn, setBtn] = useState(true);
  return (
    <>
    {/* header start */}
    <header id='top' className={btn == true ? "header" : "header header-active"}>

      <div className="container header__container">

        <button onClick={()=> setBtn(true)} className={btn == false ? "times-btn" : "btn-active"}>
          <i className="fas fa-times"></i>
        </button>

        <div className="header__top">

          <Link to="/" className="header__logo">Qudratulloh Uz</Link>

          <div className="btn-wrap">

            <button onClick={()=> setBtn(false)} className={btn == true ? "bars-btn" : "btn-active"}>
              <i className="fas fa-bars"></i>
            </button>

          </div>

        </div>

        <nav className="nav">

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

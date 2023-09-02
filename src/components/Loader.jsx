import React, { useState } from 'react'
import LoaderImg from '../img/loader.svg'

export default function Loader({Load}) {
  const [myLoad , setMyLoad] = useState(true);
  function loadFunc(){
    setTimeout(() => {
        setMyLoad(false)
    }, 1000);
  }
  return (
    <>
    {/* loader start */}
    <section onLoad={()=> loadFunc()} className={myLoad == true ? "loader" : "loader loader-active"}>

        <div className="container loader__container">

            <div className="loader__img-box">
                <img src={LoaderImg} alt="Loading..." className="loader__img" />
            </div>

            <div className="loader__text-box">
                <h3 className="loader__title">Loading</h3>
            </div>

        </div>

    </section>
    {/* loader end */}
    </>
  );
}

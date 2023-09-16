import React from 'react'
import TopImg from '../img/top.svg'

export default function Top() {
  return (
    <>
    <a href="#" id='top-btn' className="btn">
      <img src={TopImg} alt="Top" className="top__img" />
    </a>
    </>
  );
}

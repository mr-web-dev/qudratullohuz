import React, { useState } from 'react'

export default function Content() {
  const [content , setContent] = useState(false);
  setInterval(() => {
    setContent(true);
  }, 300000);
  return (
    <>
    {/* content start */}
    <section className={content == true ? "content content-active" : "content content-hidden"}>
      <div className="container content__container">
        <div className="content-card">
          <button onClick={()=> setContent(false)} className="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <p className="content__text">Eng so‘ngi yangiliklaridan xabardor bo‘lish uchun rasmiy sahifamga obuna bo‘ling!</p>
          <div className="btn-box content__btn-box">
            <a href="https://t.me/qudratullohuz" className="btn content__btn">Telegram ❯</a>
            <a href="https://instagram.com/qudratullohuz" className="btn content__btn">Instagram ❯</a>
          </div>
        </div>
      </div>
    </section>
    {/* content end */}
    </>
  );
}

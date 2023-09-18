import React from 'react'

export default function Contact() {
  return (
    <>
    {/* contact start */}
      <section className="contact" id="contact">

        <div className="container contact__container">

          <h2 className="contact__title">Bog'lanish</h2>

          <form action='https://formspree.io/f/mayzzdkp' method='POST' id="form">

            <input required className='inp' type="text" name="name" id="name" placeholder='Ism'/>
            
            <input required className='inp' type="tel" name="tel" id="tel" placeholder='Telefon raqam'/>
            
            <input required className='inp' type="email" name="email" id="email" placeholder='Elektron pochta'/>

            <textarea required className='inp' name="Message" id="message" placeholder='Xabar'></textarea>
            
            <button className='btn' id="submit" type='submit'>Jo'natmoq</button>

          </form>

        </div>

      </section>
    {/* contact end */}
    </>
  );
}

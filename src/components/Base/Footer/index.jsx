import React from 'react'

import './styles.module.scss'

const Footer = () => {
  const Phones = ['+38 (056) 740-31-65']

  const replacePhoneNumber = (NumberPhone) => NumberPhone.replace(/\D/g, '')

  return (
    <footer className="footer container-fluid row" id='contact'>

      <div className="footer__contacts col-lg-7 col-md-11 col-12">
        <div className="footer__contacts_info col-12">

            <div className="footer__contact col-lg-3 col-md-3 col-9">
              <h4 className='footer__contact_title'>Телефон:</h4>
              <span></span>
              {Phones.map((e) => (
                <a key={Phones} href={`tel:${replacePhoneNumber(e)}`} className="footer_mob">
                  <p>{e}</p>
                </a>
              ))}
            </div>

            <div className="footer__contact col-lg-3 col-md-3 col-9">
              <h4 className='footer__contact_title'>Адреса:</h4>
              <a href="https://is.gd/P6luSp" 
                target="_blank"
                rel="noreferrer">
                  <p>м.Дніпро, вул.Воскресенська 23</p>
              </a>
            </div>

          

            <div className="footer__contact col-lg-3 col-md-3 col-9">
              <h4 className='footer__contact_title'>E-mail:</h4>
              <a href="mailto:johnmccainlibrary@gmail.com">
                johnmccainlibrary@gmail.com
              </a>
            </div>

            <div className="footer__contact col-lg-3 col-md-3 col-9">
              <h4 className='footer__contact_title'>Соціальні мережі:</h4>
              <a
                href="https://www.facebook.com/JohnMcCainLibrary/"
                className="footer__link_social"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          
        </div>  
      </div>

      <div className="footer__corp col-lg-3 col-md-12 col-12">
        <p>Бібліотека ім. Джона Маккейна © 2019 — {new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}

export default Footer

/* eslint-disable react/no-array-index-key */
import React from 'react'

import Team from '../../../assets/images/about/team.jpg'
import Stas from '../../../assets/images/about/stas.jfif'
import Dima from '../../../assets/images/about/dima.jpg'
import Luda from '../../../assets/images/about/luda.jfif'
import Stasya from '../../../assets/images/about/stasya.jfif'
import Lubava from '../../../assets/images/about/lubava.jpg'
import Ivan from '../../../assets/images/about/ivan.jfif'

import './styles.module.scss'

const About = () => {

  return (
    <div className="about container-fluid">

      <div className="about__container col-xl-10 col-lg-11 col-md-12 col-12 d-flex">

        <div className="about__team_img col-xl-12 col-lg-12 col-md-12 col-12 d-flex">
          <img className='w-100' src={Team} alt="Наша команда" />
        </div>

        <h2>Наша команда:</h2>

        <div className="about__team_main col-xl-12 col-md-12 col-12 d-flex">
          
          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">

            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Stas} alt="" />
            </div>
            
            <h5 className="title_person">Маслюк Станіслав</h5>
            <p className="position_person">Директор Біюлиотеки</p>

          </div>

          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">

            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Dima} alt="" />
            </div>
            
            <h5 className="title_person">Хлюпік Дмитро</h5>
            <p className="position_person">Головний біюліотекар</p>

          </div>

          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">

            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Luda} alt="" />
            </div>
            
            <h5 className="title_person">Сутула Людмила</h5>
            <p className="position_person">Бухгалтер</p>

          </div>

          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">

            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Stasya} alt="" />
            </div>
            
            <h5 className="title_person">Горбач Стася</h5>
            <p className="position_person">Адміністратор</p>

          </div>

          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">
          
            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Lubava} alt="" />
            </div>

            <h5 className="title_person">Шніцель Любава</h5>
            <p className="position_person">Адміністратор</p>

          </div>

          <div className="person__team col-xl-3 col-lg-4 col-md-6 col-12">

            <div className="person__img_block col-lg-3 d-flex">
              <img className='person__img w-100' src={Ivan} alt="" />
            </div>

            <h5 className="title_person">Стицько Іван</h5>
            <p className="position_person">Адміністратор</p>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About

import React, {useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { fetchNews, fetchOneNews, fetchThreeNews } from '../../../http/newsAPI';
import moment from 'moment'
import ThreeNews from '../ThreeNews';
import { render } from '@testing-library/react';

import './styles.module.scss'

const News = () => {

  const [oneNews, setOneNews] = useState([])
  const [threeNews, setThreeNews] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchOneNews(id).then(data => setOneNews(data))
    fetchThreeNews().then(data => setThreeNews(data))
  }, [id])

  const navigate = useNavigate();

  function formatDate(data){
    const formatDate = moment(data).format('DD.MM.YYYY')
    return formatDate
  } 
  function formatTime(data){
    const formatTime = moment(data).format('h:mm')
    return formatTime
  }

  return (
    <div className="news container-fluid row">

      {oneNews.map(onenews => {
        return (
          <div className="news__container col-xl-10 col-md-11 col-12" key={onenews.id}>

            <div className="news__block_img col-xl-12 col-12">
              <img src={onenews.backURL} className="news__img w-100" alt="title foto" />
            </div>

            <div className="news__title_block">
              <h1 className='news__title'>{onenews.name}</h1>
            </div>

            <div className="news__data d-flex col-xl-12 col-12">
              <p className='news__data_item'>{formatDate(onenews.publickDate)}</p>
              <p className='news__data_item'>{formatTime(onenews.publickDate)}</p>
            </div>

            <div className="news__body col-xl-12 col-12">
              <p className='news__text'>{onenews.text}</p>
            </div>
          </div>
        )
      }
      )}

      {/* <ThreeNews/> */}
      <div className="other__news col-xl-10 col-md-11 col-12">
        <div className="title__other_news">
          <h2>Інші новини</h2>
        </div>

        <div className="other__news_container d-flex">

          {threeNews.map(threenews => {
            return (
              <div
                onClick={() => navigate('/newscatalog/news/' + threenews.id)}
                key={threenews.id}
                className="other__news_item col-xl-3 col-md-3 col-12"
              >

                <div className="other__news_img d-flex">
                  <img className='w-100' src={threenews.backURL} alt="" />
                </div>

                <div>
                  <h5 className='other__item_title'>{threenews.name}</h5>
                </div>

              </div>
            );
            
          })}

        </div>
      </div>
    </div>
  )
}

export default News
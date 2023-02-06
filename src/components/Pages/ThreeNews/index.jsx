import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
// import './styles.module.scss'
import { fetchThreeNews } from '../../../http/newsAPI';

const ThreeNews = () => {

  const [threeNews, setThreeNews] = useState([])

  useEffect(() => {
    fetchThreeNews().then(data => setThreeNews(data))
  }, [fetchThreeNews])

  const navigate = useNavigate();

  return (
    <div className="news container-fluid row">
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
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ThreeNews
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchNews } from "../../../http/newsAPI";

import "./styles.module.scss";

const NewsCatalog = () => {

    const [news, setNews] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        fetchNews().then(data => setNews(data))
        setIsVisible(true)
    }, [fetchNews])

    const navigate = useNavigate();

    return (
        <div className="catalog container-fluid column">

            <div className="catalog__content col-xl-10 col-lg-10 col-md-10 col-11 row ">

                <h2>Новини</h2>

                {news.map(news => {
                    return (
                        <div 
                            onClick={() => navigate('/newscatalog/news/' + news.id)} 
                            key={news.id} 
                            className="card"
                        >
                            <div className="card__container d-flex col-xl-12 col-lg-12 col-md-12 col-12">

                                <div className="card-body col-xl-9 col-lg-9 col-md-9 col-11">
                                    <h3 className="card-title">{news.name}</h3>
                                    <p className="card-text">{news.text}</p>
                                </div>

                                <div className="card__footer col-xl-3 col-lg-3 col-md-3">
                                    <a className="btn btn-primary">Детальніше</a>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default NewsCatalog;
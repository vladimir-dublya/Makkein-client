import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Preview from '../../../assets/images/home/preview.jpg'
import { fetchBooks } from '../../../http/bookAPI'
import { fetchThreeNews } from '../../../http/newsAPI'

import './styles.module.scss'

const Home = () => {
    const [books, setBooks] = useState([])
    const [threeNews, setThreeNews] = useState([])

    useEffect(() => {
        fetchBooks(1).then(data => setBooks(data))
        fetchThreeNews().then(data => setThreeNews(data))
    }, [fetchBooks, fetchThreeNews])

    const navigate = useNavigate();

    return (
        <div className="column home__container">
            <div className="home">
                <img src={Preview} alt="Біблиотека української діаспори ім. Маккейна" />
                <div className="home__text">
                    <h1>Бібліотека української діаспори ім. Джона Маккейна</h1>
                    <p>Бібліотека нараховує 5000 приблизно примірників</p>
                </div>
            </div>

            <div className="main column ">
                <div className="news column">
                    <h2>Новини</h2>

                    <div className="news__contents d-flex">

                        {threeNews.map(threenews => {
                            return (
                                <div className="news__content container-fluid row col-lg-4 col-md-12 col-12">

                                    <div
                                        onClick={() => navigate('/newscatalog/news/' + threenews.id)}
                                        key={threenews.id}
                                        className='news__blocks column col-xl-12 col-lg-11 col-md-12 col-12'
                                    >
                                        <div className="news__block news__block_main column">
                                            <div className='news__block_img'>
                                                <img className='news__img w-100' src={threenews.backURL} alt="news" />
                                            </div>

                                            <div className="news__block_text">
                                                <h3 className='news__title'>{threenews.name}</h3>
                                                <p className='news__pretext'>{threenews.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="news__right_block column col-xl-4 col-lg-11 col-md-12 col-12">

                                        <div
                                            onClick={() => navigate('/newscatalog/news/' + threenews.id)}
                                            key={threenews.id}
                                            className='news__blocks column col-xl-8 col-lg-11 col-md-12 col-12'
                                        >
                                            <div className="news__block news__block_main column">
                                                <div className='news__block_img'>
                                                    <img className='news__img w-100' src={threenews.backURL} alt="news" />
                                                </div>

                                                <div className="news__block_text">
                                                    <h3 className='news__title'>{threenews.name}</h3>
                                                    <p className='news__pretext'>{threenews.text}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => navigate('/newscatalog/news/' + threenews.id)}
                                            key={threenews.id}
                                            className='news__blocks column col-xl-8 col-lg-11 col-md-12 col-12'
                                        >
                                            <div className="news__block news__block_main column">
                                                <div className='news__block_img'>
                                                    <img className='news__img w-100' src={threenews.backURL} alt="news" />
                                                </div>

                                                <div className="news__block_text">
                                                    <h3 className='news__title'>{threenews.name}</h3>
                                                    <p className='news__pretext'>{threenews.text}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className="books column">
                    <h2>Книжки</h2>

                    <div className="books__content container-fluid row justify-content-center align-items-center m-auto">
                        {books.map(book => {
                            return (
                                <div key={book.id} className="book__block column center col-lg-3 col-md-6 col-12">
                                    <div
                                        className="books__block column center"
                                        onClick={() => navigate('/bookscatalog/book/' + book.id)}
                                    >
                                        <div className='books__block_img'>
                                            <img
                                                className='books__img w-100'
                                                src={book.coverURL}
                                                alt="title-img-book"
                                            />
                                        </div>

                                        <div className="books__block_text">
                                            <h3 className='books__title'>{book.name}</h3>
                                            <p className='books__pretext'>{book.author}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
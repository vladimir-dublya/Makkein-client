import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneBook } from '../../../http/bookAPI';
import './styles.module.scss'

const Book = () => {

    const [oneBook, setOneBook] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetchOneBook(id).then(data => setOneBook(data))
        setIsVisible(true)
        console.log(isVisible)
    }, [fetchOneBook])

    return (
        <div>

            {oneBook.map(onebook => {
                return (
                    <div className='book container-fluid row'>
                        <div className='col-lg-4 col-12 book__selected'>
                            <div className="book__prev col-lg-12 col-12">
                                <div className="suka d-flex col-lg-12 col-12">
                                    <div className='book__block_img col-lg-5 col-12'>
                                        {isVisible ?
                                            <img className='book__img w-100' src={onebook.coverURL} alt="title foto" />
                                            :
                                            <div>load</div>
                                        }
                                    </div>

                                    <div className='book__titles col-lg-6 col-12'>
                                        <h3 className='books__title'>{onebook.name}</h3>
                                        <p className='books__pretext'>{onebook.author}</p>
                                    </div>
                                </div>

                                <div className="books__block_text col-lg-10">
                                    <div className="book__selected_info">
                                        <p className='book__selected_about'>
                                           {onebook.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="book__reader col-lg-8">
                            {isVisible ?
                                <iframe className='book__reading' src={onebook.bookURL} width="100%" height="700px" />
                                :
                                <div>load</div>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Book
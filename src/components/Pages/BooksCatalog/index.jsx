import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchAllAuthors, fetchBooks, searchBook } from "../../../http/bookAPI";
import { fetchCategories } from "../../../http/categoriesAPI";
import { fetchCurrentPages } from "../../../http/currentPagesAPI";
import axios from "axios";
import Paginator from 'react-hooks-paginator';
import "./styles.module.scss";

const BooksCatalog = () => {

  const [nameBook, setNameBook] = useState('')
  const [endAge, setEndAge] = useState('')
  const [categories, setCategories] = useState([])
  const [allAuthor, setAllAuthor] = useState([])

  const [books, setBooks] = useState([])
  const [searchFilterBook, setSearchFilterBook] = useState({})
  const [pagination, setPagination] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const [currentCategory, setCurrentCategory] = useState('')
  const [currentAuthor, setCurrentAuthor] = useState('')
  const pageLimit = 10;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    fetchCategories().then(data => setCategories(data))
    fetchCurrentPages().then(data => setPagination(data))
    fetchAllAuthors().then(data => setAllAuthor(data))
    fetchBooks().then(data => setBooks(data))
    fetchBooks().then(data => setVisibleBooks(data))

    setVisibleBooks(books);

    setIsVisible(true)
  }, [fetchBooks, fetchCategories, fetchCurrentPages, fetchAllAuthors, searchBook])

  const navigate = useNavigate();

  async function displayActivePage(page) {
    const data = await fetchBooks(page)
    await setVisibleBooks(data)
  }

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  const [visibleBooks, setVisibleBooks] = useState(books)

  const searchBooks = (e) => {
    e.preventDefault()
    setVisibleBooks(visibleBooks.filter(book => {
    console.log(books);
      return (book.name.includes(nameBook) && book.author.includes(currentAuthor) && book.createDate.toString().includes(endAge) && book.category.toString().includes(currentCategory))
    }))
    //searchBook(nameBook, endAge, currentCategory, currentAuthor, 1).then(data => setBooks(data))
  }

  const clearInput = (e) => {
    e.preventDefault()
    setVisibleBooks(books);
    setNameBook('');   setCurrentAuthor('');
    setEndAge('');     setCurrentCategory('');
  }

  return (
    <div className="library">
      <h2 className="library__title">Книжки</h2>
      <div className="library__blocks container-fluid row d-flex">

        <div className="filter__block col-lg-3 col-md-4 col-12">
          <form>
            <h4 className="filter__title">Фільтри:</h4>

            <div className="search__block col-lg-12 col-12">
              <input
                className="search__input"
                type="search"
                name="search"
                placeholder="Знайти книгу"
                value={nameBook}
                onChange={e => setNameBook(e.target.value)}
              />
            </div>

            <h4 className="filter__title">Рік:</h4>

            <div className="years__block col-lg-12 col-12 d-flex">

              {/* <input
                className="years__input"
                type="search"
                name="search book"
                placeholder="Від"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              /> */}
              {/* <div className="liner">-</div> */}

              <input
                className="years__input"
                type="search"
                name="searchage"
                placeholder="Рік"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                value={endAge}
                onChange={e => setEndAge(e.target.value)}
              />

            </div>

            <h4 className="filter__title">Жанр:</h4>

            <div className="dropdown">
              <select value={currentCategory} onChange={(e) => setCurrentCategory(e.target.value)}>
                <option value="" selected disabled hidden>Вибрати категорію</option>
                {categories.map(category => {
                  return (
                    <option
                      key={category.id}
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  )
                })}
              </select>
            </div>

            <h4 className="filter__title">Автор:</h4>

            <div className="dropdown">
              <select value={currentAuthor} onChange={(e) => setCurrentAuthor(e.target.value)}>
                <option value="" selected disabled hidden>Вибрати автора</option>
                {allAuthor.map(author => {
                  return (
                    <option
                      key={author.author}
                    >
                      {author.author}
                    </option>
                  )
                })}
              </select>
            </div>
          
            <button
              className="mt-3 align-self-end p-2 m-1"
              onClick={searchBooks}
            >
              Знайти
            </button>
            <button
              className="mt-3 align-self-end p-2"
              onClick={clearInput}
            >
              Очистити
            </button>
          </form>


        </div>

        <div className="library__info_block col-lg-9 col-md-8 col-12 row justify-content-evenly">

          {visibleBooks.map(book => {
            return (
              <div key={book.id} className="library__book__block col-lg-3 col-md-6 col-8 mb-3">
                {isVisible ?
                  <div
                    onClick={() => navigate('/bookscatalog/book/' + book.id)}
                    className="books__block"
                  >
                    <div className="books__block_img">
                      <img
                        className="books__img w-100"
                        src={book.coverURL}
                      />
                    </div>

                    <div className="books__block_text">
                      <h3 className="books__title">
                        {book.name}
                      </h3>
                      <p className="books__author">{book.author}</p>
                    </div>
                  </div>
                  :
                  <div className="spinner-border text-dark" role="status">
                    w
                  </div>
                }
              </div>
            )
          })}

          {/* <div className="paginations__block">
            {pagination.map(page => {
              return (
                <div
                  className="paginations__block_page"
                  key={page}
                  style={{ display: 'flex', marginRight: 20 }}
                  onClick={() => displayActivePage(page)}
                >
                  <button className="paginations_button" style={{ padding: '5px 10px' }}>{page}</button>
                </div>
              )
            })}
          </div> */}

      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
        </div>

      </div>
    </div>
  );
};

export default BooksCatalog;

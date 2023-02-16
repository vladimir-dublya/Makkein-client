import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  fetchAllAuthors,
  fetchBooks,
  searchBook,
  count,
} from "../../../http/bookAPI";
import { fetchCategories } from "../../../http/categoriesAPI";
import "./styles.module.scss";

const BooksCatalog = () => {
  const [nameBook, setNameBook] = useState("");
  const [endAge, setEndAge] = useState("");
  const [categories, setCategories] = useState([]);
  const [allAuthor, setAllAuthor] = useState([]);

  const [books, setBooks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [amountOfBooks, setAmountOfBooks] = useState([1]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
    fetchAllAuthors().then((data) => setAllAuthor(data));
    !nameBook
      ? fetchBooks(currentPage).then((data) => {
          console.log(data);
          setBooks(data.books);
          setAmountOfBooks(data.pages);
        })
      : searchBook(
          nameBook,
          endAge,
          currentCategory,
          currentAuthor,
          currentPage
        ).then((data) => {
          console.log(data);

          setBooks(data.books);
          setAmountOfBooks(data.pages);
        });

    setIsVisible(true);
  }, [fetchBooks, fetchCategories, fetchAllAuthors, searchBook, currentPage]);

  const navigate = useNavigate();

  const submit = () => {
    searchBook(
      nameBook,
      endAge,
      currentCategory,
      currentAuthor,
      currentPage
    ).then((data) => {
      setBooks(data.books);
      setAmountOfBooks(data.pages);
    });
  };

  const clearInput = (e) => {
    e.preventDefault();
    setNameBook("");
    setCurrentAuthor("");
    setEndAge("");
    setCurrentCategory("");
    fetchBooks(currentPage).then((data) => {
      console.log(data);
      setBooks(data.books);
      setAmountOfBooks(data.pages);
    });
  };

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
                onChange={(e) => {
                  setNameBook(e.target.value);
                }}
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
                onChange={(e) => setEndAge(e.target.value)}
              />
            </div>

            <h4 className="filter__title">Жанр:</h4>

            <div className="dropdown">
              <select
                value={currentCategory}
                onChange={(e) => {
                  console.log(e.target.value);
                  setCurrentCategory(e.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Вибрати категорію
                </option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <h4 className="filter__title">Автор:</h4>

            <div className="dropdown">
              <select
                value={currentAuthor}
                onChange={(e) => setCurrentAuthor(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  Вибрати автора
                </option>
                {allAuthor.map((author) => {
                  return <option key={author.author}>{author.author}</option>;
                })}
              </select>
            </div>

            <div className="button_Con">
              <div className="button" onClick={submit}>
                Пошук
              </div>
              <div className="button" onClick={clearInput}>
                Очистити
              </div>
              <Link className="button" to="/bookAdd">
                Додати книгу
              </Link>
            </div>
          </form>
        </div>

        <div className="library__info_block col-lg-9 col-md-8 col-12 row justify-content-evenly">
          {books.map((book) => {
            return (
              <div
                key={book.id}
                className="library__book__block col-lg-3 col-md-6 col-8 mb-3"
              >
                {isVisible ? (
                  <div
                    onClick={() => navigate("/bookscatalog/book/" + book.id)}
                    className="books__block"
                  >
                    <div className="books__block_img">
                      <img className="books__img w-100" src={book.coverURL} />
                    </div>

                    <div className="books__block_text">
                      <h3 className="books__title">{book.name}</h3>
                      <p className="books__author">{book.author}</p>
                    </div>
                  </div>
                ) : (
                  <div className="spinner-border text-dark" role="status">
                    w
                  </div>
                )}
              </div>
            );
          })}

          <div className="paginations__block">
            {amountOfBooks.map((amount) => (
              <div
                className="paginations__block_page"
                onClick={() => setCurrentPage(amount)}
              >
                <div className="paginations_button">{amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCatalog;

import React from 'react';
import "./BooksCatalog/styles.module.scss";

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginations__block">
            {pageNumbers.map(page => {
              return (
                <div
                  className="paginations__block_page"
                  key={page}
                  style={{ display: 'flex', marginRight: 20 }}
                  onClick={() => paginate(page)}
                >
                  <button className="paginations_button" style={{ padding: '5px 10px' }}>{page}</button>
                </div>
              )
            })}
          </div>
  )
}

export default Pagination;
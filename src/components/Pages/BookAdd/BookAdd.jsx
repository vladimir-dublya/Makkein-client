import React, { useEffect, useRef, useState } from "react";
import { addBook, addImage } from "../../../http/bookAPI";
import { fetchCategories } from "../../../http/categoriesAPI";

export const BookAdd = () => {
  const [newBook, setNewBook] = useState();
  const imageRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  });

  const onAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageRef.current.files[0]);
    console.log(imageRef.current.files[0]);

    const image = await addImage(formData);
    addBook(newBook, image.url);
  };
  return (
    <div className="d-flex flex-column">
      <div>
        author:
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        BookURL:
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, bookURL: e.target.value })}
        />
        category:
        <div className="dropdown">
          <select
            onChange={(e) => {
              setNewBook({ ...newBook, category: e.target.value });
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
        picture:
        <input type="file" name="filename" ref={imageRef} />
        date:
        <input
          type="text"
          onChange={(e) =>
            setNewBook({ ...newBook, createDate: e.target.value })
          }
        />
        name:
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
        text:
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, text: e.target.value })}
        />
        <button type="submit" onClick={(e) => onAdd(e)}>
          Add
        </button>
      </div>
    </div>
  );
};

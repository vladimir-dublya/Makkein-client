import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Base/Footer'
import Header from './components/Base/Header'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import BooksCatalog from './components/Pages/BooksCatalog'
import NewsCatalog from './components/Pages/NewsCatalog'
// import Contact from './components/Pages/Contact'
import Book from './components/Pages/Book'
import News from './components/Pages/News'
import {Authorization} from './components/Pages/Authorization/Authorization'
import {BookAdd} from './components/Pages/BookAdd/BookAdd'
import { Context } from './Context.js'  
import './App.scss';
import { useState, useEffect } from 'react'
// import ThreeNews from './components/Pages/ThreeNews'



function App() {
  //  document.addEventListener("mousemove", (event) => {
  //       let mousex = event.clientX - 15;
  //       let mousey = event.clientY - 15;
  //       let elem = document.querySelector('.cursor-glow');
  //       elem.style.left = mousex + 'px';
  //       elem.style.top = mousey + 'px';
  //   });

  const [userIsInside, setUserIsInside] = useState();

  useEffect(() => {
    let user = localStorage.getItem('user');
    console.log(user);
    setUserIsInside(user ? true : false);
  })

  return (
    <div className="App">
      {/* <div class="cursor-glow"></div> */}
      <Context.Provider value={{
        userIsInside,
        setUserIsInside
      }}>
        <BrowserRouter>
          <Header />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/bookscatalog' element={<BooksCatalog />} />
            <Route path={'bookscatalog/book' +'/:id'} element={<Book />} />
            <Route path='/newscatalog' element={<NewsCatalog />} />
            <Route path={'newscatalog/news' + '/:id'} element={<News />} />
            <Route path={'/authorization'} element={<Authorization />} />
            <Route path={'/bookAdd'} element={<BookAdd />} />
            {/* <Route path={'newscatalog/news/lastnews' + '/:id'} element={<News />} /> */}
            {/* <Route path='/contact' element={<Contact />} /> */}

            <Route path="*" element={<Home />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

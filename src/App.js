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

import './App.scss';
// import ThreeNews from './components/Pages/ThreeNews'



function App() {
  //  document.addEventListener("mousemove", (event) => {
  //       let mousex = event.clientX - 15;
  //       let mousey = event.clientY - 15;
  //       let elem = document.querySelector('.cursor-glow');
  //       elem.style.left = mousex + 'px';
  //       elem.style.top = mousey + 'px';
  //   });

  return (
    <div className="App">
      {/* <div class="cursor-glow"></div> */}
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bookscatalog' element={<BooksCatalog />} />
          <Route path={'bookscatalog/book' +'/:id'} element={<Book />} />
          <Route path='/newscatalog' element={<NewsCatalog />} />
          <Route path={'newscatalog/news' + '/:id'} element={<News />} />
          {/* <Route path={'newscatalog/news/lastnews' + '/:id'} element={<News />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}

          <Route path="*" element={<Home />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

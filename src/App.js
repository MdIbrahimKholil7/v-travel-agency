import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Places from './components/places/Places';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import { FetchData } from './hooks/FetchData';
import { createContext } from 'react';
export const ContextGallery = createContext()
function App() {
  const [gallery, setGallery] = FetchData()
  const productImg={
    gallery:gallery
  }
  console.log(gallery)
  return (
    <div className="App">
      <ContextGallery.Provider value={productImg}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/place' element={<Places />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </ContextGallery.Provider>
    </div>
  );
}

export default App;

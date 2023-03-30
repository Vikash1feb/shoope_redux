import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Category from './Category';
import NotFound from './NotFound';
import Header from './templet/Header';
import Menubar from './templet/Menubar';
import Footer from './templet/Footer';
function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <div className='row content-area'>
            <div className='col'>
              <Header />
              <Menubar />
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/category' element={<Category />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;

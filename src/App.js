import React from 'react';
import { Home, About, Service, Contact } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
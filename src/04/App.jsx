import React from 'react'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Leyout from './components/routing/Leyout'
import Home from './components/routing/Home'
import About from './components/routing/About'
import ErrorPages from './components/routing/error'

const App = () => {
  return (
    <>
      <FuncComponent />
      <ClassComponent />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Leyout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<ErrorPages />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

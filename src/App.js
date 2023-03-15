import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import './App.css'
import Error404 from './pages/Error404'


const App = () => {
    return (
        <div>
          <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/details/:id" element={<Details/>} />
                    <Route path="/404" element={<Error404/>} />
                    <Route path="/*" element={<Error404/>} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
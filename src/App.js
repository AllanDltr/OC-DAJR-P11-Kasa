import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'


const App = () => {
    return (
        <div>
          <Header> </Header>
            <main>
                <Banner> </Banner>
                <Gallery> </Gallery>
            </main>
            <Footer> </Footer>
        </div>
    )
}

export default App
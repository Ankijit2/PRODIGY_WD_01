import React from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import Slogan from './components/slogan/Slogan.jsx'
import Trending from './components/Trending/Trending'
import Cover from './components/cover/Cover.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Slogan/>
        <Trending/>
        <Cover/>
      </main>
      <Footer/>
    </>
  )
}

export default App
import React from 'react'
import Section1 from '../Components/Home/Section1'
import Section2 from '../Components/Home/Section2'
import Section3 from '../Components/Home/Section3'
import Footer from '../Components/Home/Footer'
import ThemeToggle from '../Components/Home/ThemeToggle'
import '../App.css'
const Home = () => {
  return (
    <div className="light-mode">
      <ThemeToggle>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </ThemeToggle>
    </div>

  )
}

export default Home
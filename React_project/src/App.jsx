import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouting from './mainRouting/MainRouting'
import Navbar from './utiliti/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Footer from './utiliti/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>

            <Navbar />
            {/* <Home /> */}
            <MainRouting />
            {/* <Contact/> */}
            <Footer />
       </>
  );
}

export default App

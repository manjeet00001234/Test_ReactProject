import React from 'react'
import './home.css'
import image from '../../image/hero.jpg'
import Gellery from '../Gellery/Gellery'
import Contact from '../Contact/Contact'
import ShowData from '../ShowData/ShowData'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {


  const contentStyle= {
    height: '90vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
 

  const sliderimage = {
    image: "https://staticlearn.shine.com/l/m/images/blog/UI-UX.webp",
    image1: "https://monomousumi.com/wp-content/uploads/Software-Development-Company.jpg",
    image2: "https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg",
    image3: "https://www.teahub.io/photos/full/178-1787609_digital-marketing-seo-company.png",
};

  return (
    <div className='home_contaner'>




<Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img  className="w-full h-full" src={sliderimage.image} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img className="w-full h-full"  src={sliderimage.image1} alt="" />

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img className="w-full h-full" src={sliderimage.image2} alt="" />

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img className="w-full h-full" src={sliderimage.image3} alt="" />

      </h3>
    </div>
  </Carousel>





      <Gellery />
      <Contact/>
      {/* <ShowData/> */}
    </div>
  )
}

export default Home






import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import  image from "../image/logo.jpg"

const Navbar = () => {
  return (
       <div className="nav_contaner flex justify-around w-full text-lg text-white font-semibold bg-slate-400">
            <div className="logo w-1/4">
                 <img src={image} alt="" />
            </div>
            <div className="link flex justify-around w-3/4">
                 <Link to={"/"}>Home</Link>
                 <Link to={"/gellery"}>Gellery</Link>
                 <Link to={"/contact"}>Contact</Link>
                 <Link to={"/showdata"}>ShowData</Link>
            </div>
       </div>
  );
}

export default Navbar
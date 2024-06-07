import React, { useState } from 'react'
import axios from 'axios'
import "./contact.css"
import image from '../../image/logo.jpg'



let initialValue = {
  name: "",
  email:""
}
const Contact = () => {
  const [data, setData] = useState(initialValue);


  const userData = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]:value
    }))
  }

//   // **************post Data*******************

  const postData = async() => {
try {
  let pres = await axios.post("http://localhost:8080/data", data);

} catch (error) {
console.log(error);
}
  }


//   // ***************subit Data********************
  const submitdata = (e) => {
    e.preventDefault();
postData();
  }
  return (
       <div>
            <h1 className="heading my-5 text-4xl font-semibold text-center">
                 Contect
            </h1>
            <div className="main_contaner">
                 <div className="img_contaner">
                      <img src={image} alt="" />
                 </div>

                 <div className="form_contaner">
                      <h1 className="text-3xl font-semibold text-center">
                           Registration
                      </h1>
                      <img
                           className="m-auto w-12 h-12 rounded-full"
                           src={image}
                           alt=""
                      />
                      <form action="">
                           <label htmlFor="">Name</label>
                           <br />
                           <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={userData}
                                // placeholder="Enter your Name"
                           />
                           <br />
                           <label htmlFor="">Mobile Number</label>
                           <br />
                           <input
                                type="text"
                                name="mobile"
                                value={data.mobile}
                                onChange={userData}
                                // placeholder="Enter your Mobile"
                           />
                           <br />
                           <label htmlFor="">Email</label>
                           <br />
                           <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={userData}
                                // placeholder="Enter your Email"
                           />
                           <br />
                           <button
                                className="btn bg-blue-500 shadow-lg shadow-blue-500/50  m-auto block py-2.5 px-9"
                                onClick={submitdata}>
                                submit
                           </button>
                      </form>
                 </div>
            </div>
       </div>
  );
 }

 export default Contact


































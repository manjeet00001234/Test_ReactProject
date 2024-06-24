import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./contact.css"
import image from '../../image/logo.jpg'



let initialValue = {
  name: "",
  mobile:"",
  email:""
}
const Contact = () => {
  const [data, setData] = useState(initialValue);
  const [showdata, setShowData] = useState([]);
    const [updateId,setUpdateId]=useState(null)
<<<<<<< HEAD
  
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306


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
<<<<<<< HEAD
  let pres = await axios.post("http://localhost:8080/data", data);
=======
  let pres = await axios.post(
       "https://renderserver-z3g5.onrender.com/data",
       data
  );
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306

  getData();

} catch (error) {
console.log(error);
}
  }

  // ------------------get Data--------------------
  const getData = async () => {
     try {
<<<<<<< HEAD
         let gres = await axios.get("http://localhost:8080/data");
         setShowData(gres.data)
         
         
=======
         let gres = await axios.get(
              "https://renderserver-z3g5.onrender.com/data"
         );
         setShowData(gres.data)


>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
     } catch (error) {
         console.log(error);
     }
 }

 // ------------------delete Data---------------------

 const deleteData= async(id)=>{
try {
<<<<<<< HEAD
 let dres=await axios.delete(`http://localhost:8080/data/${id}`)
alert("deleted data");
 getData()
 
=======
 let dres = await axios.delete(
      `https://renderserver-z3g5.onrender.com/data/${id}`
 );
alert("deleted data");
 getData()

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
} catch (error) {
 console.log(error);
}
 }



   // ------------------------path Data----------------------------------

   const pathData=async()=>{
     try {
<<<<<<< HEAD
         let fres=await axios.patch(`http://localhost:8080/data/${updateId}`,data)
=======
         let fres = await axios.patch(
              `https://renderserver-z3g5.onrender.com/data/${updateId}`,
              data
         );
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
         getData();
     } catch (error) {
         console.log(error);
     }
 }
<<<<<<< HEAD
 
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
 // -----------------------inbox value update---------------------------

 const handleUpdate=(id)=>{
     const selectItem=showdata.find((item)=>item.id===id);
if(selectItem){
 setData(selectItem);

setUpdateId(id);
}
 }

<<<<<<< HEAD
 
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306


//   // ***************subit Data********************
  const submitdata = async(e) => {
    e.preventDefault();
    if(updateId){
     pathData();
     alert('updated');
     setData(initialValue);
setUpdateId(null);

    }else{

<<<<<<< HEAD
   
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
         postData();
         alert("added")
     setData(initialValue);



     }

}


     // -------------------useEffect-------------------------------
     useEffect(()=>{
          getData();
     },[]);
<<<<<<< HEAD
    
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
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
<<<<<<< HEAD
                    
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                      <form action="">
                           <label htmlFor="">Name</label>
                           <br />
                           <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={userData}
<<<<<<< HEAD
                                
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                           />
                           <br />
                           <label htmlFor="">Mobile Number</label>
                           <br />
                           <input
                                type="text"
                                name="mobile"
                                value={data.mobile}
                                onChange={userData}
<<<<<<< HEAD
                               
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                           />
                           <br />
                           <label htmlFor="">Email</label>
                           <br />
                           <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={userData}
<<<<<<< HEAD
                                
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
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





            {/* ---------------------------table show data------------------------------ */}


            <div className='main_table'>
          <h1>Registration Data</h1>
              <table>
<<<<<<< HEAD
               
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                   <thead>
                        <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Mobile</th>
                             <th>Email</th>
                             <th>Action</th>
                        </tr>
                   </thead>

                   <tbody>
                    {showdata.map((item) => {
                         console.log(showdata,197);
                        return (
                             <tr>
                                <td data-column="id">{item.id}</td>
                                <td data-column="Name">{item.name}</td>
                                <td data-column="Mobile">{item.mobile}</td>
                                <td data-column="Email">{item.email}</td>
                                <td data-column="Action">
                                   <button onClick={()=>handleUpdate(item.id)}>Edit</button>
                                   <button onClick={()=>deleteData(item.id)}>Delete</button>
<<<<<<< HEAD
                                
=======

>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                                </td>
                             </tr>
                        );
                        })}

                   </tbody>
              </table>
         </div>

       </div>
  );
 }

 export default Contact


































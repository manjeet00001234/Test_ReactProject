import axios from 'axios';
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
import "./showdata.css"

const ShowData = () => {
  
    const [showdata, setShowData] = useState([]);
    
   



    


// ------------------get Data--------------------
<<<<<<< HEAD
=======
=======

const ShowData = () => {
    const [showdata, setShowData] = useState([]);

>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
    const getData = async () => {
        try {
            let gres = await axios.get("http://localhost:8080/data");
            setShowData(gres.data)
<<<<<<< HEAD
            console.log(gres.data,19);
=======
<<<<<<< HEAD
            console.log(gres.data,19);
=======
            console.log(gres.data);
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
    // ------------------delete Data---------------------

    const deleteData= async(id)=>{
try {
    let dres=await axios.delete(`http://localhost:8080/data/${id}`)
alert("deleted Data")
    getData();

    
} catch (error) {
    console.log(error);
}
    }
    
    
   
    
   
    
    
    
<<<<<<< HEAD
=======
=======
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
    useEffect(() => {
        getData();
    }, [])
    
    return (
         <div className='main_table'>
<<<<<<< HEAD
          <h1>Registration Data</h1>
              <table>
               
=======
<<<<<<< HEAD
          <h1>Registration Data</h1>
              <table>
               
=======
              <table border={1}>
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                   <thead>
                        <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Mobile</th>
                             <th>Email</th>
<<<<<<< HEAD
                             <th>Action</th>
=======
<<<<<<< HEAD
                             <th>Action</th>
=======
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                        </tr>
                   </thead>

                   <tbody>
                    {showdata.map((item) => {
                        return (
                             <tr>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                                <td data-column="id">{item.id}</td>
                                <td data-column="Name">{item.name}</td>
                                <td data-column="Mobile">{item.mobile}</td>
                                <td data-column="Email">{item.email}</td>
                                <td data-column="Action">
                                   <button style={{backgroundColor:"red"}} onClick={()=>deleteData(item.id)}>Delete</button>
                                
                                </td>
<<<<<<< HEAD
=======
=======
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <tr>{item.email}</tr>
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
                             </tr>
                        );
                        })}

                   </tbody>
              </table>
         </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
    






);
<<<<<<< HEAD
=======
=======
    );
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
>>>>>>> b2c1a811e2a5f291170d625274d4d33e7c883306
}

export default ShowData
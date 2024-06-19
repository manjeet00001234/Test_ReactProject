import axios from 'axios';
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import "./showdata.css"

const ShowData = () => {
  
    const [showdata, setShowData] = useState([]);
    
   



    


// ------------------get Data--------------------
=======

const ShowData = () => {
    const [showdata, setShowData] = useState([]);

>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
    const getData = async () => {
        try {
            let gres = await axios.get("http://localhost:8080/data");
            setShowData(gres.data)
<<<<<<< HEAD
            console.log(gres.data,19);
=======
            console.log(gres.data);
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
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
    
    
   
    
   
    
    
    
=======
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
    useEffect(() => {
        getData();
    }, [])
    
    return (
         <div className='main_table'>
<<<<<<< HEAD
          <h1>Registration Data</h1>
              <table>
               
=======
              <table border={1}>
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
                   <thead>
                        <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Mobile</th>
                             <th>Email</th>
<<<<<<< HEAD
                             <th>Action</th>
=======
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
                        </tr>
                   </thead>

                   <tbody>
                    {showdata.map((item) => {
                        return (
                             <tr>
<<<<<<< HEAD
                                <td data-column="id">{item.id}</td>
                                <td data-column="Name">{item.name}</td>
                                <td data-column="Mobile">{item.mobile}</td>
                                <td data-column="Email">{item.email}</td>
                                <td data-column="Action">
                                   <button style={{backgroundColor:"red"}} onClick={()=>deleteData(item.id)}>Delete</button>
                                
                                </td>
=======
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <tr>{item.email}</tr>
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
                             </tr>
                        );
                        })}

                   </tbody>
              </table>
         </div>
<<<<<<< HEAD
    






);
=======
    );
>>>>>>> 4fad55e698815246da7c4fd0b544b107d8218f67
}

export default ShowData
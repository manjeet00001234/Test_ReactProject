import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ShowData = () => {
    const [showdata, setShowData] = useState([]);

    const getData = async () => {
        try {
            let gres = await axios.get("http://localhost:8080/data");
            setShowData(gres.data)
            console.log(gres.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    
    return (
         <div className='main_table'>
              <table border={1}>
                   <thead>
                        <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Mobile</th>
                             <th>Email</th>
                        </tr>
                   </thead>

                   <tbody>
                    {showdata.map((item) => {
                        return (
                             <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <tr>{item.email}</tr>
                             </tr>
                        );
                        })}

                   </tbody>
              </table>
         </div>
    );
}

export default ShowData
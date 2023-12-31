import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Form(){
    
    const [data,setdata]=useState([]);
    
    
    useEffect(()=>{
    axios.get('http://localhost:5000/formations')
    .then(res=> setdata(res.data))
    .catch(esr=>console.log(esr))
    
    
    },[])

return(
    <>
    <div className='container'>
    
      
        <table className='table'>
    
            <thead>
    <tr>
    <th>id</th>
    <th>titre</th>
    <th>domaine</th>
    <th>niveau</th>
    <th>description</th>
    </tr>
    </thead>
    
    <tbody>
        {data.map((d,i)=>(
            <tr key={i}>
            <td>{d.id}</td>   
            <td>{d.titre}</td> 
            <td>{d.domaine}</td> 
            <td>{d.niveau}</td> 
            <td>{d.description}</td> 
            </tr>
        ))}
        </tbody>
         </table>

         </div>
         </>
)}
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';


export default function Formateur(){

const [data,setdata]=useState([]);
const navigate = useNavigate()

useEffect(()=>{
axios.get('http://localhost:5000/utilisateurs')
.then(res=> setdata(res.data))
.catch(esr=>console.log(esr))


},[])

function handeledelete(id){
    const confirmed = window.confirm('Are you sure?');
    if(confirmed){
      axios.delete('http://localhost:5000/utilisateurs/' + id)
        .then(res => {
          alert('Deleted');
          navigate('/');
        })
        .catch(error => {
          console.error('Delete error:', error);
        });
    }
  }

  
  



    return(
<>
<div className='container'>

  
    <table className='table'>

        <thead>
<tr>
<th>id</th>
<th>nom</th>
<th>role</th>
<th>formations_inscrites</th>
</tr>
</thead>

<tbody>
    {data.map((d,i)=>(
        <tr key={i}>
        <td>{d.id}</td>   
        <td>{d.nom}</td> 
        <td>{d.role}</td> 
        <td>{d.formations_inscrites}</td>  
        <td>
        <Link className='btn btn-sm text-decoration btn-success' to={`/Log/${d.id}`}>Update</Link>

            <button className='btn btn-danger' onClick={e=>handeledelete(d.id)}>delete</button> 
        </td>


        </tr>
    ))}











</tbody>


    </table>


</div>




</>




    )
}



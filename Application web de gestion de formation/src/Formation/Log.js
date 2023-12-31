import { useEffect, useState } from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import axios from 'axios'



export default function Login(){
    
    const [nom,setNom]=useState(null);
    const [email,setEmail]=useState(null)
    const [role,setRole]=useState(null)
    const [password,setPassword]=useState(null)
    const navigate=useNavigate()

   /* useEffect(()=>{
        document.body.style.background = 'black'
    },[])*/
    const handleInscription =(e)=>{
        e.preventDefault()
        if(nom===''||nom===null){
            alert("Veuillez saisir votre nom")
        }
        else if (email === '' || email == null) {
            alert("Veuillez saisir votre E-mail");
        }
        else if(role === ''|| role===null){
            alert("Please enter your Role")
        }
        else if (password==='' || password===null){
            alert("Please enter your Password")
        }
        else{
            let user={
                "nom": nom,
                "email": email,
                "role": role,
                "password": password,
                "formations_inscrites":'103'
            }

            axios.post('http://localhost:5000/utilisateurs',user)
            .then(()=>{
                alert('god job')
                navigate('/dkhol')
            })
        }
    }

    return(
        <>


  <div className='container'>
<form class="form_container">

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Prénom"onChange={e=>setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Adresse Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nom de famille"  onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">mot de pass</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="mot de passe"  onChange={e=>setPassword(e.target.value)} />
                </div>



                <div >
                        <label>Rôle : Participant / Formateur</label>
                        <select name="role" id="" onChange={e => setRole(e.target.value)} >
                            <option value="">select</option>
                            <option value="Participant">Participant</option>
                            <option value="Formateur">Formateur</option>
                        </select>
                    </div>
                    <Link className='btn btn-sm text-decoration btn-success'onClick={handleInscription} to={'/dkhol'}>Inscription</Link>
                   


</form>


</div>
































        </>
    )
}
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios'

export default function Login() {
  const [nom, setNom] = useState(null);
  const [role, setRole] = useState(null);
  const[users,setusers]=useState()
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5000/utilisateurs')
    .then((res)=> setusers(res.data))
    
    
    },[])

  const handleLogin = (e) => {
    e.preventDefault();
    if (nom===''||nom===null || (role === ''|| role===null) || role === 'select') {
      alert("Veuillez sélectionner votre nom et votre rôle");
    } else {
      const loggedInUser = users.find((user) => user.nom === nom && user.role === role);
      if (loggedInUser) {
        if (loggedInUser.role === 'Participant') {
          navigate('/dkhol');
        } else if (loggedInUser.role === 'Formateur') {
          navigate('/dkhole');
        } else {
          alert("Vérifiez votre nom ou votre rôle.");
        }
      } else {
        alert("Vérifiez votre nom ou votre rôle.");
      }
    }
  };


  

  return (
    <>
      <div className='container'>
        <form className="form_container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Prénom" onChange={e => setNom(e.target.value)} />
          </div>

          <div>
            <label>Rôle : Participant / Formateur</label>
            <select name="role" id="" onChange={e => setRole(e.target.value)} >
              <option value="">select</option>
              <option value="Participant">Participant</option>
              <option value="Formateur">Formateur</option>
            </select>
          </div>

          <button className='btn btn-sm text-decoration btn-success' onClick={handleLogin}>ok</button>
          {/* Utilisez un bouton pour soumettre le formulaire */}
        </form>
      </div>
    </>
  );
}

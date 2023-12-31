import './st.css';
import { Link} from 'react-router-dom';


export default function azerty(){









    
return(

    <>






<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">La Connaissance</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <Link to={'/wach'} className='nav-link text-dark' id='ma'>log in </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>









<div className='container'>


    <h1>Centre de formation la Connaissance</h1>

    
    



    <div className="d-flex flex-row">
    <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' ,marginRight: '80px'}}>
  <div class="card-header">gestion des projet agiles</div>
  <div class="card-body">
    <h5 class="card-title">gestion des projet agiles</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
    
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-secondary mb-3" style={{ maxWidth: '18rem',marginRight: '80px' }}>
  <div class="card-header">	Design Graphique pour le Web</div>
  <div class="card-body">
    <h5 class="card-title">	Design Graphique pour le Web</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
    
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-success mb-3" style={{ maxWidth: '18rem',marginRight: '80px' }}>
  <div class="card-header">Design Graphique pour le Web</div>
  <div class="card-body">
    <h5 class="card-title">Design</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
  
    <Link className='btn btn-sm text-decoration btn-success' to={`/log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-danger mb-3" style={{ maxWidth: '18rem' ,marginRight: '80px'}}>
  <div class="card-header">site web statique</div>
  <div class="card-body">
    <h5 class="card-title">site web statique</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
    
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-warning mb-3" style={{ maxWidth: '18rem',marginRight: '80px' }}>
  <div class="card-header">gestion des projet agiles</div>
  <div class="card-body">
    <h5 class="card-title">gestion des projet agiles</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
    
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
</div>
<div className="d-flex flex-row">
<div class="card text-bg-info mb-3" style={{ maxWidth: '18rem',marginRight: '80px' }}>
  <div class="card-header">gestion des projet agiles</div>
  <div class="card-body">
    <h5 class="card-title">gestion des projet agiles</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>

    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-light mb-3" style={{ maxWidth: '18rem',marginRight:'80px' }}>
  <div class="card-header">gestion des projet agiles</div>
  <div class="card-body">
    <h5 class="card-title">gestion des projet agiles</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
 
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>
<div class="card text-bg-dark mb-3" style={{ maxWidth: '18rem' ,marginRight: '80px' }}>
  <div class="card-header">gestion des projet agiles</div>
  <div class="card-body">
    <h5 class="card-title">gestion des projet agiles</h5>
    <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>

    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
  </div>
</div>



        <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem', marginRight: '80px'  }}>
          <div className="card-header">gestion des projet agiles</div>
          <div className="card-body">
            <h5 className="card-title">gestion des projet agiles</h5>
            <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
   
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
          </div>
        </div>

        <div className="card text-bg-secondary mb-3" style={{ maxWidth: '18rem', marginRight: '80px' }}>
          <div className="card-header">site web dénamique</div>
          <div className="card-body">
            <h5 className="card-title">site web dénamique</h5>
            <p class="card-text">niveaux Débutant</p>
    <p class="card-text">niveaux intérmidiaire</p>
    <p class="card-text">niveaux éxpert</p>
    
    <Link className='btn btn-sm text-decoration btn-success' to={`/Log/:id`}>Inscription</Link>
          </div>
        </div>
        {/* ... ajoutez les autres cartes avec des styles différents */}
      </div>

      </div>
      </>
    



)


}
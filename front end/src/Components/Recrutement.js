

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useEffect } from "react"
import Footer from "./Footer";
export default function Recrutement() {


    const [pdfFile, setPDFFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);
    const[na,setNa]=useState('')
    const[da,setda]=useState('')
    const[email,setemail]=useState('')
    const[tel,settel]=useState('')
    const[com,setcom]=useState('')

  useEffect(()=>{
        document.title='App hospital-Recrutement'
      },[])

    const fileType = ['application/pdf'];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = (e) => {
                    setPDFFile(e.target.result);
                };
            } else {
                setPDFFile(null);
            }
        } else {
            console.log("Please select a PDF");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    };

    const newPlugin = defaultLayoutPlugin();




    const handleChangee = (e) => {
        const value = e.target.value;
        setNa(value);
      }
      const prda = (e) => {
        const v = e.target.value;
        setda(v);
      }


      const mail = (e) => {
        const value = e.target.value;
        setemail(value);
      }
      const num = (e) => {
        const v = e.target.value;
        settel(v);
      }



      const Commentaire = (e) => {
        const v = e.target.value;
        setcom(v);
      }
       
  const styleforvideo={
    width:' 100%',
    height: '100%',
    position: 'fixed',
    zIndex: '-1',
    objectFit: 'cover',
    filter: 'blur(8px)'
};

return(

    <>
 <video className='videoTag' autoPlay loop muted style={styleforvideo}>
        <source src='./fvid/video.mp4' type='video/mp4' />
      </video>



 <div class="banner-card">
    
  <img src='pexels-pixabay-40568.jpg' alt="Votre image"  width='1450px' height='500px'/>
  <div className="banner-text" style={{ textAlign: 'center' }}>
    <h2>Rejoignez le groupe leader</h2>
    <h2>de la santé privée au Maroc</h2>
  </div>
</div>
<h1 style={{ textAlign: 'center' }}>REJOIGNEZ NOTRE ÉQUIPE!
</h1>

    
<div className='container'>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Prénom</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Prénom" onChange={handleChangee}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nom de famille</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nom de famille"onChange={prda}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">address Email </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"onChange={mail}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Téléphone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="+212" onChange={num}/>
</div>





<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
Commentaires/questions</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={Commentaire}></textarea>
</div>
<button onClick={() => console.log(na,da,email,tel,com)} type='submit'>ok</button>
    
<div id="pdf">
    <form onSubmit={handleSubmit}>
<input  type='file' className='form-control' onChange={handleChange} />
<button type='submit' className='btn btn-success'  >view pdf</button>
</form> 


  </div>

  <h3>View PDF</h3>
            <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    {viewPdf ? (
                        <Viewer fileUrl={viewPdf} plugins={[newPlugin]} />
                    ) : (
                        <div>No PDF</div>
                    )}
                </Worker>

</div>
</div>
<Footer />
    </>
)



}


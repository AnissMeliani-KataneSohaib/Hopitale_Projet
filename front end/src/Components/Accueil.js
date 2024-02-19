import { useEffect } from "react";
import  DarkVariant from "./ImageSlider";

import './about.css'
const Acceuil = () => {
  useEffect(()=>{
    document.title='App hospital-Accueil'
  },[])
  return (
    <div>
  
      < DarkVariant />
      
    </div>
  );
};

export {Acceuil};
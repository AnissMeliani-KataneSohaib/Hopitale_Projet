import { useEffect } from "react";
import  DarkVariant from "./ImageSlider";
import About from "./about";
import './about.css'
const Acceuil = () => {
  useEffect(()=>{
    document.title='App hospital | Home'
  },[])
  return (
    <div>
  
      < DarkVariant />
      {/* <About /> */}
    </div>
  );
};

export {Acceuil};
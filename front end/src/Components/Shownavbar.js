import React ,{useEffect,useState}from 'react'
import { useLocation } from 'react-router-dom'

export const Shownavbar=({children})=> {
    const[Shownavbar,SetShownavbar]=useState(false)
    const Location=useLocation()
    useEffect(()=>{
       console.log('location is:',Location)
       if (Location.pathname==='/moderateur/login'){
         SetShownavbar(false)
       }else{
        SetShownavbar(true)
       }
    },[Location])
  return (
    <div> {Shownavbar && children} </div>
  )
}


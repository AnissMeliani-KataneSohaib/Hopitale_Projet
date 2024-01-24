import { useEffect } from "react"
export const Infos=()=>{
  useEffect(()=>{
    document.title='App hospital-Infos'
  },[])
    return(
        <>
          <h1>Infos</h1>
        </>
    )
}
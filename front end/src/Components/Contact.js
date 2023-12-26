import { useEffect } from "react"

export const Contact=()=>{
  useEffect(()=>{
    document.title='App hospital | Contact'
  },[])
    return(
        <>
          <h1>Contact</h1>
        </>
    )
}
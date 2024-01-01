import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {

//  const [data,setData]=useState({})


var navigate= useNavigate()
var data =localStorage.getItem("name")

const Loguot= () =>{
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("createpass")
    localStorage.removeItem("confirsmpas")
navigate('/Login')
}

    return (
        <>
        <h1>Home</h1>
        <h3 style={{color:"yellow"}}>Hello {data},Welcome to the Website</h3>
        <button type="button" onClick={Loguot}>Loguot</button>
        </>
    )
}
export default Home;
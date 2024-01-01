import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Changestyle.css";
import swal from 'sweetalert';
import Swal from 'sweetalert2';


function Changepassword(){
  var navigate=useNavigate();
  
    const [oldpass,setOldpass]=useState("");
    const [Erroroldpass,setErroroldpass]=useState("")
    const [newpass,setNewpass]=useState("");
    const [Errornewpass,setErrornewpass]=useState("")
    const [changepass,setChangepass]=useState("");
    const [Errorchangepass,setErrorchangepass]=useState("")


const submitValue = (event)=>{
event.preventDefault()
  var o = oldpass;
  var n= newpass;
  var p= changepass;

  if (o===""){
    setErroroldpass("Enter your pass")
  }else{
    setErroroldpass("")
  }

  if (n===""){
    setErrornewpass("Enter your pass")
  }else{
    setErrornewpass("")
  }

  if (p===""){
    setErrorchangepass("Enter your pass")
  }else{
    setErrorchangepass("")
  }

  var cp =localStorage.getItem('confirsmpas');
  if(cp===o){
    if(n===p){
        localStorage.setItem('confirsmpas',p)
        swal({
          title: "Good job!",
          text: "Change Pass Success Full:-"+p,
          icon: "success",
        });
      navigate('/Login')
    }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NewPassword and ConfirmPassword Not Match!",
    
    });
  }
}else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Old PassWord Is Not Match!",
  
  });
}
}

    return(
        <>
         <div className="continer">
            <div className="Main">
              <center>  <form className="Forme" onSubmit={submitValue}>
              <label style={{color:"yellow"}}>Oldpassword</label>
               <input type="text"  className="inputse" name="oldpass" placeholder="Oldpassword" defaultValue={Erroroldpass} onChange={(e)=>setOldpass(e.target.value)} /><br/><br/>
               <label style={{color:"yellow"}}>Newpassword</label>
               <input type="text"  className="inputse" name="newpass" placeholder="Newpassword" defaultValue={Errornewpass} onChange={(e)=>setNewpass(e.target.value)} /><br/><br/>
               <label style={{color:"yellow"}}>Changepassword</label>
               <input type="text"  className="inputse" name="changepass" placeholder="Changepassword" defaultValue={Errorchangepass} onChange={(e)=>setChangepass(e.target.value)} /><br/><br/>
               <input type="submit" className="button"  value="Change" />
                </form></center>

            </div>
         </div>
        
        
        </>
    )


}
export default Changepassword;
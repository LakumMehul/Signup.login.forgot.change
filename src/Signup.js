import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signupstyle.css";
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function Signup() {

  const [name, setName] = useState("");
  const [Errorname,setErrorname]=useState("")
  const [email, setEmail] = useState("");
  const [Erroremail,setErroremail]=useState("")
  const [createpass, setCreatepass] = useState("");
  const [Errorcreatepass,setErrorcreatepass]=useState("")
  const [confirmpass, setCaonfirmpass] = useState("");
  const [Errorconfirmpass,setErrorconfirmpass]=useState("")


  var navigate = useNavigate()
  const submitValue = (event) => {
    event.preventDefault()
    var m = name;
    var e = email;
    var c = createpass;
    var cp = confirmpass;
    localStorage.setItem("name", m);
    localStorage.setItem("email", e);
    localStorage.setItem("createpass", c);
    localStorage.setItem('confirsmpas', cp);
    // console.log(m)
    // console.log(e)
    // console.log(c)
    // console.log(cp)
       
    if(name===""){
      setErrorname("Enter Your Name")
    }else{
      setErrorname("")
    }
    if(email===""){
      setErroremail("Enter Your Email")
    }else{
      setErroremail("")
    }
    if(createpass===""){
      setErrorcreatepass("Enter Your Createpass ")
    }else{
      setErrorcreatepass("")
    }
    if(confirmpass===""){
      setErrorconfirmpass("Enter Your Confirmpass")
    }else{
      setErrorconfirmpass("")
    }

    if (c === cp) {
      swal({
        title: "Good job!",
        text: "Data Success Fuli Add",
        icon: "success",
      });
    
    }
    else {

      // swal({
      //   title: "Good job!",
      //   text: "Createpass and Confirmpass not match",
      //   icon: "success",
      // });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Createpass and Confirmpass not match!",

      });
      navigate('/Signup')
    }


  }

  return (
    <>

      <div className="registration">
        <header className="label">Signup</header>
        <center><form className="Forme" onSubmit={submitValue}>
          <div>
          <label className="label">Name</label><br />
          <input type="text" className="input" name="name" placeholder=" Name" defaultValue={Errorname} autoComplete="off" onChange={(e) => setName(e.target.value)}  />
       
          </div><br/>
         
         <div>
         <label className="label">Email</label><br />
          <input type="email" className="input" name="email" placeholder="Email" defaultValue={Erroremail} autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
         </div><br/>
         
         <div>
         <label className="label">Createpass</label><br />
          <input type="text" className="input" name="createpass" placeholder="Password" defaultValue={Errorcreatepass} autoComplete="off" onChange={(e) => setCreatepass(e.target.value)}  /> 
         </div><br/>
         
         <div>
         <label className="label">confirmpass</label><br />
          <input type="text" className="input" name="confirmpass" placeholder="Password" defaultValue={Errorconfirmpass} autoComplete="off" onChange={(e) => setCaonfirmpass(e.target.value)}/>  
         </div><br/>
         
          <input type="submit" />
        </form></center>
      </div>
    </>
  )
}
export default Signup;
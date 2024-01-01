import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginstyle.css";
import swal from 'sweetalert';
import Swal from 'sweetalert2';


function Login() {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [ErrorEmaile,setErrorEmaile]=useState("");
  const [ErrorPassword,setErrorPassword]=useState("");

  var navigate = useNavigate()
  var submitValue = (e) => {
    e.preventDefault()
    var a = email;
    var b = password;

    var e = localStorage.getItem("email")
    var cp = localStorage.getItem('confirsmpas')
    if (a === e && b === cp) {
      localStorage.setItem('is_loggedin', false);
      swal({
        title: "Good job!",
        text: "Login Success Full",
        icon: "success",
      });

      navigate('/Home')
    }else if (a==="" && b==="") {
      setErrorEmaile("Enter Your Email");
      setpassword("Enter Your Email");
      setErrorPassword("Enter Your PassWord")
      setemail("Enter Your Password")
      
} else {
   setErrorEmaile(""); 
   setErrorPassword("");  
   
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Details Not Match!",
  
  });
}

   
  }

 

  var Change = () => {
    // navigate('/Changepassword')
    window.open("http://localhost:3000/#/Changepassword")
  }

  var Forgot = () => {
    // navigate('/Forgotpassword')
    window.open("http://localhost:3000/#/Forgotpassword")
  }



  return (

    <div className="container" >
      <div className="login form">
        <header>Login</header>
        <center>  <form className="Formes"  onSubmit={submitValue}>
          <label style={{ color: "yellow" }}>Email</label><br />
          <input type="email" className="inputs" name="email " defaultValue={ErrorEmaile} placeholder="Email"  onChange={(e) => setemail(e.target.value)} /><br /><br />
          {/* {Error && <p style={{color:"red"}}>Enter Your Email</p>} */}
          <label style={{ color: "yellow" }} >password</label ><br />
         <input type="text" className="inputs" name="password" defaultValue={ErrorPassword} placeholder="Password" onChange={(e) => setpassword(e.target.value)} /><br /><br />
         {/* {Error && <p style={{color:"red"}}>Enter Your password</p>} */}
          <a href="/" className="links" onClick={Forgot}>Forgot password?</a><br /><br />
          <a href="/" className="links" onClick={Change}>Change password?</a><br /><br />
          <input type="submit" className="button" value="Login" />
        </form></center>
      </div>
    </div>

  )
}
export default Login;
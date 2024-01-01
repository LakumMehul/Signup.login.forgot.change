import { useState } from "react";
import "./Forgotstyle.css";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function Forgotpassword() {
    const [email,setemail]=useState("")
    var navigate=useNavigate()

    const submitValue =(e)=>{
e.preventDefault()
        var m= email;
        var e =localStorage.getItem("email")
        if(e===m){
          var z =localStorage.getItem("confirsmpas")

          swal({
            title: "Good job!",
            text: "Forgot Pass Success Full:-"+z,
            icon: "success",
          });
          navigate("/Login")
          console.log(z)
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "check your email and try again!",
              
              });
        }
    }


    return(
<>
     <center><form className="Formm" onSubmit={submitValue}>
       <br/><br/><br/> <br/><label style={{color:"yellow"}} >Email</label>
<br/> <input type="text"  className="inputt" name="email" placeholder=" email" onChange={(e)=>setemail(e.target.value)} /><br/><br/>
 <input type="submit" value="Forgot"  />
 </form></center>
</>

    )
}
export default Forgotpassword;
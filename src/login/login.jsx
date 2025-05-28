
import  { useState,useContext } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Signcontext } from "../components/homepage/signcontext";
export default function Login(){
    const {setSignn} = useContext(Signcontext)
 const navigate = useNavigate();
let[inputval,setInputval ] = useState({
    "email":"",
    "password":""
});


function inputsubmit(e){
const{name,value} = e.target;
setInputval({
    ...inputval,
    [name]:value
})
};

function successhandle(msg){
    setSignn(false),
toast.success(msg, {
      position: "bottom-left",
    })
}

function errhandle(msg){
toast.error(msg, {
      position: "bottom-left",
    })
}


async function submit(e){
    e.preventDefault();
   try{

 const {data} = await axios.post("https://zerodhabackend-tszm.onrender.com/login",{
        ...inputval
    },
      { withCredentials: true }
    )

    const {success,message}= data;
    if(success){
        successhandle(message);
        setTimeout(()=>{
            navigate("/")
        },2000)
    }else{
        errhandle(message)
    }

   }

   catch(err){
    console.log(err);
   }


   setInputval({
    ...inputval,
    "email":"",
    "password":""
   })
}



    return(
      <div className="container">
        <div className="row p-5">
            <div id="login-div" className="col p-5">
                <div className="loginOuter">
                    <div className="loginDiv">
                   <div className="innerLogin">
                    <form onSubmit={submit} action="">
                        <label  htmlFor="">Email</label>
                        <input onChange={inputsubmit} name="email" id="logininput" value={inputval.email}  type="email" placeholder="email"/>
                            <label htmlFor="">password</label>
                        <input onChange={inputsubmit} name="password" value={inputval.password}  id="logininput" type="password" placeholder="password"/>
                        <button type="submit" id="btn" className="btn btn-primary">login</button>
                    </form>

                   </div>
                </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
      </div>
    )
}
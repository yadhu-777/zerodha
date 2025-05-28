import { useState ,useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { Signcontext } from "../homepage/signcontext";


export default function Signup(){

 const {setSignnn} = useContext(Signcontext);
      const navigate = useNavigate();
let [inputval,setInputval] = useState({
    name:"",
    email:"",
    password:""
});

function userval(e){
    const {name,value} = e.target;
   setInputval({
    ...inputval,
    [name]: value
   })
}
function successHandle(msg){
    setSignnn(false),
toast.success(msg, {
      position: "top-right",
}


)

}
 const handleError = (err) =>{
    toast.error(err, {
      position: "bottom-left",
    })};

async function Submithandle(e){
e.preventDefault();
try{
    const {data} = await axios.post("https://zerodhabackend-tszm.onrender.com/Signup",{
    ...inputval
},{
    withCredentials:true
})



const {message,success} = data;
if(success){
    successHandle(message)
    
    setTimeout(()=>{
        navigate("/")
    },1000);
}
else{
    handleError(message);
}
}
catch(err){
console.log(err)
}

setInputval(
    {
        name:"",
        email:"",
        password:""
    }
)

}

    
    return(
        <div className="container">
            <div className="row text-center p-2">
                <div id="herosignup" className="col p-2 ">
                    <h1 className="mb-4">Open a free demat and trading account online</h1>
                    <h4>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
                </div>
            </div>
             <div id="signuprow"  style={{padding:"6rem"}} className="row">
                <div id="signupimg" className="col-md-6 p-5">
                    <img src="media/image/account_open.svg" alt="signup-image"/>
                </div>
                 <div id="inputfield" className="col-md-6 p-5">
                    <h2>
                        Signup now
                    </h2>
                    <p>Or track your existing application</p>
                   <form onSubmit={Submithandle} >

                     <input onChange={userval} name="name"  value={inputval.name}  placeholder="Enter your name"/>
                      <input  onChange={userval} name="email"  value={inputval.email}  placeholder="Enter your email" />
                        <input onChange={userval} name="password"  value={inputval.password}   placeholder="Enter your password" />
                        <button type="submit" style={{width:"30%",marginTop:"1rem"}} className="btn btn-primary">Signup</button>
                   </form>
                     <ToastContainer />
                </div>
            </div>
        </div>
    )

}

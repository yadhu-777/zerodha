
import { toast } from "react-toastify";
import {Link} from "react-router-dom"
import { Signcontext } from "./components/homepage/signcontext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";


export default function Navbar(){

  function Checkwidth(e){
    e.preventDefault();
    if(window.innerWidth < 950){
      toast.error("Kite Trading Platform is not supported on mobile devices.",{
        position:"top-center"
      });
    }
    else  window.open("https://dashboard-yadhu-777s-projects.vercel.app/", "_blank");
  }


  const {Signnn} = useContext(Signcontext);
    return(
      <nav  id="navloc" className="navbar navbar-expand-lg bg-body-tertiary  mb-2 ">
      <div id="outnav" class="container">
        <a id="anc"  class="navbar-brand" href="/"><img id="imgnav" style={{width:"40%"}} src="media/image/logo.svg"/></a>
         


       
        <div className="disapper" >
          <div id="navoptions" class="navbar-nav ms-auto">
          {Signnn &&  <Link id="options" className="nav-link active" to={"/Signup"}>Signup</Link>}
            <Link id="options"  className="nav-link active" to={"/About"}>About</Link>
            <Link   id="options"    className="nav-link active" to={"/Product"}>Product</Link>
            <Link   id="options"   className="nav-link active" to={"/Price"}>Pricing</Link>
            <Link   id="options"   className="nav-link active" to={"/Support"}>Support</Link>
              {Signnn && <Link   id="options"   className="nav-link active" to={"/Login"}>Login</Link>}
                  </div>
          <div class="dropdown">
    <button className="btn btn-white " type="button" id="hamburgerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
     <span  className="navbar-toggler-icon" ></span>
    </button>



  
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="hamburgerDropdown">
      <div className="navfirst">
 <img style={{width:"15%"}} src="media/image/tradekite.png"/>
      <a onClick={Checkwidth} className="dropdown-item" href="https://dashboard-yadhu-777s-projects.vercel.app/" target="blank">Kite - Trading platform</a>

       </div>
      <div className="tadejump">
       
  <div className="first">
   { Signnn &&    <Link id="optionss" className="nav-link active" to={"/Signup"}>Signup</Link>}
            <Link id="optionss"  className="nav-link active" to={"/About"}>About</Link>
            <Link   id="optionss"    className="nav-link active" to={"/Product"}>Product</Link>

  </div>
<div className="second">
  
              <Link   id="optionss"   className="nav-link active" to={"/Price"}>Pricing</Link>
            <Link   id="optionss"   className="nav-link active" to={"/Support"}>Support</Link>
             {   Signnn &&    <Link   id="optionss"   className="nav-link active" to={"/Login"}>Login</Link>}
</div>
      </div>
    </ul>
</div>
<ToastContainer/>

  </div>
 
       
        </div>
  
    </nav>
      
    )
   
}
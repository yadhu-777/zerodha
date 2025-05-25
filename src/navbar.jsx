

import {Link} from "react-router-dom"



export default function Navbar(){
    return(
      <nav  id="navloc" className="navbar navbar-expand-lg bg-body-tertiary  mb-2 ">
      <div id="outnav" class="container">
        <a id="imgnav" class="navbar-brand" href="/"><img style={{width:"30%"}} src="media/image/logo.svg"/></a>
         


       
        <div className="disapper" >
          <div id="navoptions" class="navbar-nav ms-auto">
            <Link id="options" className="nav-link active" to={"/Signup"}>Signup</Link>
            <Link id="options"  className="nav-link active" to={"/About"}>About</Link>
            <Link   id="options"    className="nav-link active" to={"/Product"}>Product</Link>
            <Link   id="options"   className="nav-link active" to={"/Price"}>Pricing</Link>
            <Link   id="options"   className="nav-link active" to={"/Support"}>Support</Link>
               <Link   id="options"   className="nav-link active" to={"/Login"}>Login</Link>
                  </div>
          <div class="dropdown">
    <button className="btn btn-white " type="button" id="hamburgerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
     <span  className="navbar-toggler-icon" ></span>
    </button>
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="hamburgerDropdown">
      <div className="tadejump">
       <div className="navfirst">
 <img style={{width:"15%"}} src="media/image/tradekite.png"/>
      <li><a className="dropdown-item" href="https://dashboard-yadhu-777s-projects.vercel.app/" target="blank">Kite - Trading platform</a></li>

       </div>
   <Link id="optionss" className="nav-link active" to={"/Signup"}>Signup</Link>
            <Link id="optionss"  className="nav-link active" to={"/About"}>About</Link>
            <Link   id="optionss"    className="nav-link active" to={"/Product"}>Product</Link>
            <Link   id="optionss"   className="nav-link active" to={"/Price"}>Pricing</Link>
            <Link   id="optionss"   className="nav-link active" to={"/Support"}>Support</Link>
               <Link   id="optionss"   className="nav-link active" to={"/Login"}>Login</Link>
      </div>
    </ul>
  </div>

       
        </div>
      </div>
    </nav>
    )
}
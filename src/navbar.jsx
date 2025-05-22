

import {Link} from "react-router-dom"



export default function Navbar(){
    return(
      <nav style={{height:"6rem"}} class="navbar navbar-expand-lg bg-body-tertiary  mb-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img style={{width:"30%"}} src="media/image/logo.svg"/></a>
         


       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div id="navoptions" class="navbar-nav ms-auto">
            <Link id="options" className="nav-link active" to={"/Signup"}>Signup</Link>
            <Link id="options"  className="nav-link active" to={"/About"}>About</Link>
            <Link   id="options"    className="nav-link active" to={"/Product"}>Product</Link>
            <Link   id="options"   className="nav-link active" to={"/Price"}>Pricing</Link>
            <Link   id="options"   className="nav-link active" to={"/Support"}>Support</Link>
               <Link   id="options"   className="nav-link active" to={"/Login"}>Login</Link>
          <div class="dropdown">
    <button class="btn btn-white " type="button" id="hamburgerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
     <span  className="navbar-toggler-icon" ></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="hamburgerDropdown">
      <div className="tadejump">
        <img style={{width:"15%"}} src="media/image/tradekite.png"/>
      <li><a class="dropdown-item" href="https://dashboard-d7zs-yadhu-777s-projects.vercel.app/" target="blank">Kite - Trading platform</a></li>
  
      </div>
    </ul>
  </div>

          </div>
        </div>
      </div>
    </nav>
    )
}
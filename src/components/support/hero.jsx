export default function Hero(){
    return(
        <div id="outer" className="container-fluid p-5">
            <h4 style={{marginLeft:"2rem"}} className="mb-5">Support Portal</h4>
            <div className="row">
           
                <div id="support-div" className="co-md-6 p-5">

<h3>Search for an answer or browse help topics to create a ticket</h3>
<input style={{width:"100%",height:"3rem",margin:"1rem 0rem 1rem 0rem"}} type="text" placeholder="Eg: How do i activate account ?" />
<div className="filed">
<a href="#" >Track account opening </a>
<a href="#" >Track segment activation </a>
<a href="#" >Intraday margins</a>
<a href="#" >Kite user manual</a>
</div>



                </div>
                <div  id="support-div" className="col-md-6 p-5">
<h3>Featured</h3>
<ul style={{listStyleType: "decimal"}}>
<li> <a href="#">Current takeover and Dislisting -january 2025</a>  </li>
<li><a href="#"> Latest intraday leverages - MIS & CO </a> </li>


</ul>

                </div>
            </div>
        </div>
    )
}
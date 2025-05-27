

export default function Award(){
    return(
       <div className="container ">
         <div id="directionchange" style={{marginTop:"9rem"}} className="row  p-5">
            <div id="stabalize" className="col-md-6">
               <img id="award-img" src="media/image/largestBroker.svg" alt="award"/>


            </div>
            <div id="award-div" className="col-md-6 p-5">
               <h2>
                  
Largest stock broker in india
               </h2>
               <p>2+ million zerodha clients contribute to over 15% of all volumes in india by trading and investing in:</p>
             <uL>
               <div style={{lineHeight:"2rem"}} className="row mt-4 ">
                  <div className="col">
<li>Futue and options</li>
<li>commodity and derivatives</li>
<li>currency derivatives</li>

                  </div>
                  <div className="col">
<li>Stocks & IPOs</li>
<li>Direct mutual funds</li>
<li>Bonds and Govt. Securities</li>

                  </div>
               </div>
             </uL>
             <img style={{width:"90%" , marginTop:"2rem"}} src="media/image/pressLogos.png"/>
            </div>
            
            </div>
            

       </div>
    )
}
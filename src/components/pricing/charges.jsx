export default function Charges(){
    return(

        <div className="container">
            <div id="charge-div" className="row p-5">
                <div id="charge-div1"  className="col-6 p-5">
<h3 className="mb-5">Brokerage calculator</h3>
<ul style={{lineHeight:"2rem"}}>

<li> Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order. </li>
<li> Digital contract notes will be sent via e-mail </li>
<li> Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply. </li>
<li> For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower). </li>
<li> If the account is in debit balance, any order placed will be charged 240 per executed order instead of 20 per executed orde </li>

</ul>

                </div>
                <div id="charge-div"  className="col-6 p-5">

<h3 className="mb-5">List of charges</h3>
                </div>
            </div>
        </div>
    )
}
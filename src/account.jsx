import { Link } from "react-router-dom"

export default function Account(){
    return(
        <div className="container">
            <div style={{margin:"5rem 0rem 3rem 0rem"}} className="row text-center">
                <div className="col">
                    <h2 className="mb-4">Open a Zerodha account</h2>
                    <p >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                     <Link to={"/Signup"}><button className="btn btn-primary"> Signup for free</button></Link>
                </div>
            </div>
        </div>
    )
}
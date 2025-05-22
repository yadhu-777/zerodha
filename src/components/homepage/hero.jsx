import { Link } from "react-router-dom"


export default function Hero(){
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img style={{width:"100%"}} src="media/image/homeHero.png" alt="heroimg"/>
                    <h3 style={{marginTop:"7rem"}}>
                        Invest in everything
                    </h3>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link to={"/Signup"}><button className="btn btn-primary"> Signup for free</button></Link>
                </div>
            </div>
        </div>
    )
}
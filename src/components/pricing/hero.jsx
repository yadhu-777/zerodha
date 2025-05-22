export default function Hero(){
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Charges</h2>
                    <h6>List of all charges and taxes</h6>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-4 p-4 text-center"><img src="media/image/pricing0.svg"  />
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4  p-4  text-center"><img src="media/image/intradayTrades.svg"  />
                <h2>
                Intraday and F&O trades
                </h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                
                </div>
                <div className="col-4  p-4   text-center"><img src="media/image/pricingMF.svg"  />
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
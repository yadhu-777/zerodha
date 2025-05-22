import Rightimg from "./rightimg"
import Hero from "./hero"
import Leftimg from "./leftimg"
export default function Product(){
    return(
<>
<Hero/>
<Leftimg source={"media/image/kite.png"}
heading={"Kite"}
description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
trydemo={"trydemo"}
learnmore={"learnmore"}

/>
<Rightimg

source={"media/image/console.png"}
heading={"Console"}
description={"Our ultra-The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}

learnmore={"learnmore"}


/>

<Leftimg source={"media/image/coin.png"}
heading={"Coin"}
description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
trydemo={"trydemo"}
learnmore={"learnmore"}

/>

<Rightimg

source={"media/image/kiteconnect.png"}
heading={"Kite Connect API"}
description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."}

learnmore={"kite Connect"}


/>


<Leftimg source={"media/image/varsity.png"}
heading={"Varsity mobile"}
description={"Our Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}

/>







</>
    )
}
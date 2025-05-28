import Hero from "./hero";
import Award from "./award";
import Trust from "./trust";
import Price from "./price";
import Varsity from "./varsity";
import Account from "../../account";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Signcontext } from "./signcontext";
export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(true);

 const {setSignnn} = useContext(Signcontext);


  useEffect(() => {
    async function check() {
  
        const { data } = await axios.post(
          "https://zerodhabackend-tszm.onrender.com/verify",
           {},
          { withCredentials: true }
        );

        if (data.status) {
          setIsSignedIn(false);
          setSignnn(true)
        
        }
      
    }
    check();
  }, []);

  return (
    <>
      <Hero />
        {isSignedIn && <Account />}
      <Award />
      <Trust />
      <Price />
      <Varsity />
      {isSignedIn && <Account />}
    </>
  );
}
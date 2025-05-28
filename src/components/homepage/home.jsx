import Hero from "./hero";
import Award from "./award";
import Trust from "./trust";
import Price from "./price";
import Varsity from "./varsity";
import Account from "../../account";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false); // default to not signed in

  useEffect(() => {
    async function check() {
  
        const { data } = await axios.post(
          "https://zerodhabackend-tszm.onrender.com/verify",
           {},
          { withCredentials: true }
        );

        if (data.status) {
          setIsSignedIn(true); // User is signed in
          console.log("User is signed in.");
        }
      
    }
    check();
  }, []);

  return (
    <>
      <Hero />
      <Award />
      <Trust />
      <Price />
      <Varsity />
      {!isSignedIn && <Account />}
    </>
  );
}
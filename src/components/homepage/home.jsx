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


    async function check() {
      try {
        const { data } = await axios.get(
          "https://zerodhabackend-tszm.onrender.com/verify",
          { withCredentials: true }
        );

        if (data.status) {
          setIsSignedIn(true); // User is signed in
          console.log("User is signed in.");
        }
      } catch (error) {
        console.log("Verification failed", error);
      }
    }
    check();
 

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
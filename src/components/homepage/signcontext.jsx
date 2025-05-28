

import { createContext, useState } from "react";
import { useContext } from "react";

export const Signcontext = createContext();

export  function SignedContextprovider({children}){
let[Signnn,setSignnn] = useState(false);

    return(
        <Signcontext.Provider value={{Signnn,setSignnn}} >
{children}
        </Signcontext.Provider>

    )
}
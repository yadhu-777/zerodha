

import { createContext, useState } from "react";


export const SignContext = createContext();

export  function SignedContextprovider({children}){
let[Signnn,setSignnn] = useState(false);

    return(
        <SignContext.Provider value={{Signnn,setSignnn}} >
{children}
        </SignContext.Provider>

    )
}
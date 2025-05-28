

import { createContext, useState } from "react";


export const Signcontext = createContext();

export  function SignedContextprovider({children}){
let[Signnn,setSignnn] = useState(true);

    return(
        <Signcontext.Provider value={{Signnn,setSignnn}} >
{children}
        </Signcontext.Provider>

    )
}
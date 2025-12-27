import { Fragment } from "react";

import { RefCounter } from "./RefCounter";
import { RefTimer } from "./RefTimer";
import { RefFocusing } from "./RefFocusing";

export function RefSummary(){
   return(
     <Fragment>
        <RefCounter />  
        <RefTimer /> 
        <RefFocusing />
    </Fragment>
   )
}
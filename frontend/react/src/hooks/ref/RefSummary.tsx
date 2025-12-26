import { Fragment } from "react";

import { RefCounter } from "./RefCounter";
import { RefTimer } from "./RefTimer";

export function RefSummary(){
   return(
     <Fragment>
        <RefCounter />  
        <RefTimer /> 
    </Fragment>
   )
}
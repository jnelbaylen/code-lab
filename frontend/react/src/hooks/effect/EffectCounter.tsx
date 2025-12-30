import { useCallback, useEffect, useState } from "react"

export const EffectCounter = () => {

    const [ count, setCount ] = useState(0)

    const onHandleIncrement = useCallback(() => {
        setCount( count => count + 1)
    }, [ setCount ])

    const onHandleDecrement = useCallback(() => {
        setCount( count => count - 1)
    }, [ setCount ])

    useEffect(() => {

        console.log(`The count is: ${ count }`)


        // Optional - this is demo purposes
        const message = () => {
            console.log("I am being cleaned up.")
        }

        return message
        
    }, [ count ])

    return(
       <div>
        <h1 className="font-bold text-2xl mx-25 pt-5"> 
            Count : 
            <span className="font-light"> { count }</span> 
        </h1>
        <button 
            onClick={ onHandleIncrement }
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 ml-25 rounded"
        >
            +
        </button>
        <button 
            onClick={ onHandleDecrement }
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 ml-5 rounded"
        >
            -
        </button>
       </div>
    )
}
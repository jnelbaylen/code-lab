import { useCallback, useState, useRef } from "react"

export const RefTimer = () => {

    const [ startTime, setStartTime ] = useState(0)
    const [ now, setNow ] = useState(0)
    
    const intervalRef = useRef(0)
    
    const onHandleStart = useCallback(() => {

        const time = Date.now()

        setStartTime( time )
        setNow( time )

        clearInterval( intervalRef.current )

        intervalRef.current = setInterval(() => {
            setNow( Date.now() );
        }, 10);
    }, [])

    const onHandleStop = useCallback(() => {
        clearInterval( intervalRef.current )
    }, [])
    

    let secondsPassed = 0

    if ( startTime && now != null ){
        secondsPassed = (now - startTime) / 100
    }

    return(
        <div>
           <h1 className="ml-20">Time passed : { secondsPassed.toFixed(3) }</h1>
           <button 
                onClick={ onHandleStart }
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 mx-10 rounded"
            >
                Start
           </button>
           <button 
                onClick={ onHandleStop }
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 rounded"
           >
                Stop
           </button>
        </div>
    )
}
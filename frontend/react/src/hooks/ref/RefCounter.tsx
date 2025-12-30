import { useCallback, useRef } from "react"

export const RefCounter = () => {

    const ref = useRef(0)

    const onHandleClick = useCallback(() => {
        ref.current = ref.current + 1
        console.log(`You clicked ${ ref.current } times.`)
    }, [])

    return(
        <div>
            <button 
                onClick={ onHandleClick } 
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 mx-13 rounded"
            >
                Open DevTools
            </button>
        </div>
    )
}
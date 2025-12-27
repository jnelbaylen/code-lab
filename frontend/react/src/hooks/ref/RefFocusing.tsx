import { useCallback, useRef } from "react"

export const RefFocusing = () => {

    const inputRef =  useRef<HTMLInputElement>(null)

    const onHandleClick = useCallback(() => {
       inputRef.current?.focus()
    }, [])

    return(
        <div>
            <input 
                type="text" 
                ref={ inputRef }
            />
            <button 
                onClick={ onHandleClick }
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-10 mx-5 rounded"
            >
                focus
            </button>
        </div>
    )
}
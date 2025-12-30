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
                placeholder="Focus"
                className="mx-10 border p-1 fixed"
            />
            <button 
                onClick={ onHandleClick }
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-15 ml-25 rounded"
            >
                focus
            </button>
        </div>
    )
}
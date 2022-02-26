import { useEffect, useRef } from "react"

export const useMounted = () =>{
    let mounted = useRef()

    useEffect(() => {
        mounted.current = true
        return () => mounted.current = false
    },[])
    
    return mounted
}
"use client"
import { useEffect, } from "react"

export const handleOutSideClickEvent = ( subButtonRef, setIsVisiable ) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (subButtonRef.current && !subButtonRef.current.contains(event.target)) {
                setIsVisiable(false)
              
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return (() => {
            document.removeEventListener('mousedown', handleOutsideClick)
        })
    }, [subButtonRef, setIsVisiable])
}


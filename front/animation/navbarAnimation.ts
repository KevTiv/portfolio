import gsap from 'gsap'
import { RefObject } from 'react'

export const showNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: 0,
        duration: 0.3,
    })
}
export const hideNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: '-10%',
        duration: 0.3,
    })
}
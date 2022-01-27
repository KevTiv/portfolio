import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { RefObject } from 'react'



export const showNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: 0,
        duration: 0.3,
    });
}
export const hideNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: '-10%',
        duration: 0.3,
    });
}

//Scroll to section
export const scrollToSection = (id:string)=>{
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        scrollTo: {
            y: id,
            offsetY: 10
        },
        ease: "power2",
        duration: 1
    });
}
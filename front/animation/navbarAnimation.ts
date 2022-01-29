import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { RefObject, MouseEvent } from 'react'

export const menuOptionHoverOn=(e:MouseEvent) =>{
    gsap.to(e.target,{
        scale: 1.15,
        skewX: 18,
        y: -8,
        duration: 0.1
    });
};

export const menuOptionHoverOff=(e:MouseEvent) =>{
    gsap.to(e.target,{
        scale: 1,
        skewX: 0,
        y: 0,
        duration: 0.1
    });
};

export const showNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: 0,
        duration: 0.3,
    });
};
export const hideNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: '-10%',
        duration: 0.3,
    });
};

//Scroll to #id section
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
};
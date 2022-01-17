import gsap from 'gsap';
import { MutableRefObject } from 'react';


export const navbarAppear = (navbarRef:MutableRefObject<any>)=>{
    let tl = gsap.timeline();
    tl
    .from(navbarRef.current, {
        opacity: 0,
        display: 'none',
        y: 150,
        duration: 1.4,
        ease: "power3.inOut"
    })
    .from([navbarRef.current.querySelectorAll('span')],{
        opacity: 0,
        y: 5,
        duration: 0.1,
        ease: "power3.inOut",
        stagger: 0.05,
    },"-=0.4");
}
export const logoAppear=(logoRef:MutableRefObject<any>)=>{
    gsap.from(logoRef.current,{
        opacity: 0,
        x: -400,
        duration: 0.75,
        ease: "power3.inOut"
    })
}
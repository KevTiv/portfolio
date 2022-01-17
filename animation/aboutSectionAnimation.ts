import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MutableRefObject } from 'react';



export const revealAboutSection =(triggerRef:MutableRefObject<any>, aboutRef:MutableRefObject<any>, aboutContentRef:MutableRefObject<any>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "-=800"
        }
    });

    tl
    .from(aboutRef.current.querySelector('h1'),{
        opacity: 0,
        y: -150,
        skewX: 10,
        duration: 1.5,
        ease: "power3.inOut"
    })
    .from(aboutRef.current.querySelector('h2'),{
        opacity: 0,
        x: 200,
        duration: 0.7,
        ease: "power3.inOut"
    },"-=0.25")
    .from(aboutContentRef.current.querySelector('div:nth-child(1) span'),{
        opacity: 0,
        x: -200,
        duration: 1.5,
        ease: "power3.inOut"
    },"-=0.5")
    .from(aboutContentRef.current.querySelector('div:nth-child(1) p'),{
        opacity: 0,
        x: 400,
        duration: 1.75,
        ease: "power3.inOut"
    },"-=0.75")
    .from(aboutContentRef.current.querySelector('div:nth-child(2) p'),{
        opacity: 0,
        x: -400,
        duration: 1.75,
        ease: "power3.inOut"
    },"-=1")
    .from(aboutContentRef.current.querySelector('div:nth-child(2) span'),{
        opacity: 0,
        x: 200,
        duration: 1.5,
        ease: "power3.inOut"
    },"-=1.25")
    .from(aboutContentRef.current.querySelector('div:nth-child(3)'),{
        opacity: 0,
        y: 600,
        duration: 1,
        ease: "power3.inOut"
    })
    ;
}
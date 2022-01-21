import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MutableRefObject } from 'react';



export const revealAboutSection =(triggerRef:MutableRefObject<any>, aboutRef:MutableRefObject<any>, aboutContentRef:MutableRefObject<any>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "-=900px",
            end: "+=1200px",
            scrub: 1.2,
        }
    });

    tl
    .from(aboutRef.current.querySelector('h1'),{
        opacity: 0,
        y: -150,
        skewX: 10,
        // duration: 9,
        ease: "power3.inOut"
    })
    .from(aboutRef.current.querySelector('h2'),{
        opacity: 0,
        x: 200,
        skewX: 30,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.05")
    .from(aboutContentRef.current.querySelector('div:nth-child(1) span'),{
        opacity: 0,
        x: -200,
        skewX: -10,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.05")
    .from(aboutContentRef.current.querySelector('div:nth-child(1) p'),{
        opacity: 0,
        x: 400,
        skewX: 10,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.1")
    .from(aboutContentRef.current.querySelector('div:nth-child(2) p'),{
        opacity: 0,
        x: -400,
        skewX: -15,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.15")
    .from(aboutContentRef.current.querySelector('div:nth-child(2) span'),{
        opacity: 0,
        x: 600,
        skewX: 15,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.15")
    .from(aboutContentRef.current.querySelector('div:nth-child(3)'),{
        opacity: 0,
        y: 600,
        skewY: 10,
        // duration: 9,
        ease: "power3.inOut"
    },"-=0.2")
    ;
}
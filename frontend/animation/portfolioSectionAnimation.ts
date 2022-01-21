import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MutableRefObject } from 'react';

export const revealPortfolioSection = (portfolioContentRef:MutableRefObject<any>) =>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: portfolioContentRef.current,
            start: "-=1200px",
            end: "+=800px",
            scrub: 1.2,
        }
    });

    tl
    .from(portfolioContentRef.current.querySelector('h1'),{
        opacity: 0,
        y: -150,
        skewX: 10,
        // duration: 0.8,
        ease: "power3.inOut"
    })
    .from(portfolioContentRef.current.querySelector('p'),{
        opacity: 0,
        x: -350,
        // duration: 0.8,
        ease: "power3.inOut"
    }, "-=0.1")
    .from(portfolioContentRef.current.querySelectorAll('ul li'),{
        opacity: 0,
        x: 1500,
        // duration: 3,
        stagger: 0.5,
        ease: "power3.inOut"
    }, "-=0.15")
}
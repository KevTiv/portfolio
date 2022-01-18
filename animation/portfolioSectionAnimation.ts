import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MutableRefObject } from 'react';
import portfolio from '../components/hero/portfolio';

export const revealPortfolioSection = (portfolioContentRef:MutableRefObject<any>) =>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: portfolioContentRef.current,
            start: "-=800"
        }
    });

    tl
    .from(portfolioContentRef.current.querySelector('h1'),{
        opacity: 0,
        y: -150,
        skewX: 10,
        duration: 1.5,
        ease: "power3.inOut"
    })
    .from(portfolioContentRef.current.querySelector('p'),{
        opacity: 0,
        x: -350,
        duration: 1.5,
        ease: "power3.inOut"
    }, "-=1")
    .from(portfolioContentRef.current.querySelectorAll('ul li'),{
        opacity: 0,
        x: 500,
        duration: 3,
        stagger: 0.5,
        ease: "power3.inOut"
    }, "-=1.5")
}
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

export const hoverOnName = (introSectionRef:RefObject<HTMLDivElement>) =>{
    gsap.to(introSectionRef.current!.querySelector('span.h2BgAnimation'),{
        width: '50%',
        height: '155%',
        borderRadius: '100%',
        right: '-5%',
        boxShadow: '0.25rem 0.5rem 1.5rem #212529',
        ease: 'expo.in',
        duration: 0.2
    })
}
export const hoverOffName = (introSectionRef:RefObject<HTMLDivElement>) =>{
    gsap.to(introSectionRef.current!.querySelector('span.h2BgAnimation'),{
        width: '105%',
        height: '22%',
        borderRadius: '0%',
        right: '-5%',
        boxShadow: '0 0 0 #212529',
        ease: 'expo.out',
        duration: 0.2
    })
}

export const hoverOnJobTitle = (introSectionRef:RefObject<HTMLDivElement>) =>{
    
    gsap.to(introSectionRef.current!.querySelector('span.h3BgAnimation'),{
        width: '17.5%',
        height: '54%',
        borderRadius: '100%',
        left: '0%',
        boxShadow: '0.25rem 0.5rem 1.5rem #212529',
        ease: 'expo.in',
        duration: 0.2
    })
}
export const hoverOffJobTitle = (introSectionRef:RefObject<HTMLDivElement>) =>{
    gsap.to(introSectionRef.current!.querySelector('span.h3BgAnimation'),{
        width: '33.5%',
        height: '21%',
        borderRadius: '0%',
        left: '0%',
        boxShadow: '0 0 0 #212529',
        ease: 'expo.out',
        duration: 0.2
    })
}

export const scrollThroughIntro=(introSectionRef:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: introSectionRef.current,

            start: 'top top',
            end: '+=400',
            endTrigger: '+=600',
            scrub: 2.5,
            pin: true,
            // markers: true
        }
    })
    tl.to(introSectionRef.current,{
        height:0,
        display: 'none',
        duration: 4,
    })
    .to(introSectionRef.current!.querySelector('div div:nth-child(2)'),{
        skewX: '18deg',
        y: '-100%',
        x: '-20%',
        scale: 0.5,
        opacity: 0,
        display: 'none',
        duration: 3,
    },'-=3.75')
}

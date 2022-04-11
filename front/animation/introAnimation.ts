import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


import { RefObject } from 'react'

export const hoverOnName = (introSectionRef:RefObject<HTMLDivElement>) =>{
    const fNameLetters = introSectionRef.current!.querySelectorAll('.Intro_name_animation__PnR0X span')
    
    gsap.to(fNameLetters,{
        translateZ: '0.5rem',
        scaleY: 1.25,
        scaleX: 1.15,
        stagger: 0.1,
        // opacity: 1,
        ease: 'power3.inOut',
        duration: 0.5
    })
}
export const hoverOffName = (introSectionRef:RefObject<HTMLDivElement>) =>{
    const fNameLetters = introSectionRef.current!.querySelectorAll('.Intro_name_animation__PnR0X span')

    gsap.to(fNameLetters,{
        translateZ: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.1,
        // opacity: 0,
        // 'clip-path': 'circle(0% at 50% 50%)',
        ease: 'power3.inOut',
        duration: 0.6
    })
}

export const hoverOnJobTitle = (introSectionRef:RefObject<HTMLDivElement>) =>{
    
    gsap.to(introSectionRef.current!.querySelector('div.profile_animation'),{
        width: '15.5%',
        height: '45%',
        borderRadius: '100%',
        left: '0%',
        boxShadow: '0.25rem 0.5rem 1.5rem #212529',
        ease: 'expo.in',
        duration: 0.2
    })
}
export const hoverOffJobTitle = (introSectionRef:RefObject<HTMLDivElement>) =>{
    gsap.to(introSectionRef.current!.querySelector('span.h3BgAnimation'),{
        width: '30%',
        height: '22%',
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
            scrub: 1.5,
            // pin: true,
            // markers: true
        }
    })
    tl
    .to(introSectionRef.current,{
        // height:0,
        // visibility: 'hidden',
        opacity: 0.8,
        duration: 4,
        ease: 'power3.out'
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


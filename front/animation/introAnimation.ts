import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'



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
        // clipPath: 'polygon(0 0, 100% 0, 100% 0, 100% 0, 0 0, 0 0)',
        display: 'none',
        duration: 4,
    })
    .to(introSectionRef.current!.querySelector('div div:nth-child(2)'),{
        skewX: '18deg',
        y: '-100%',
        x: '-20%',
        // top: '-100%',
        // left: '-20%',
        opacity: 0,
        display: 'none',
        duration: 3,
    },'-=3.75')
}


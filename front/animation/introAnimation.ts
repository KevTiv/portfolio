import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'



export const scrollThroughIntro=(introSectionRef:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: introSectionRef.current,

            start: 'top top',
            end: '+=300',
            endTrigger: '+=450',
            scrub: 2.5,
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
        top: '-100%',
        opacity: 0,
        display: 'none',
        duration: 1,
    },'-=3.75')
}


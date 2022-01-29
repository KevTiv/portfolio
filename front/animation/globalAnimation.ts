import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

export const screenReveal=()=>{
    gsap.to(document.querySelector('body'),{
        visibility: 'visible',
        duration: 0.2
    })
}

export const h2TitleAnimation = ()=>{
    gsap.fromTo([document.querySelectorAll('.titleAnimation')],{
        x: '100%',
        y: '-5%',
        skewX:'0deg',
        skewY: '-3deg',
        scale: 1,
        // translateX: '102%',
        // position: 'absolute'
    },{
        // position: 'absolute',
        x: '-100%',
        y: '10%',
        skewX:'-40deg',
        skewY: '3deg',
        scale: 0.6,
        // translateX: '-102%',
        duration: 5,
        repeat: -1,
        ease: 'linear'
    })
}

export const contentSectionAppear = (ref:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let triggerTarget = ref;

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger: triggerTarget.current,
            start: '-=800',
            end: '+=300',
            // markers: true,
        }
    })

    tl
    .from(triggerTarget.current!.querySelector('div'),{
        opacity: 0,
        x: 50,
        y: -70,
        scale: 0.2,
        duration: 0.9,
    })
    .from(triggerTarget.current!.querySelectorAll('p'),{
        opacity: 0,
        scale: 0.2,
        y: -80,
        transformOrigin: 'left',
        stagger: 0.2,
        duration: 1.5,
        ease: 'expo.inOut'
    },'-=0.8');
}
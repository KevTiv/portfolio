
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

export const screenReveal=()=>{
    const tl = gsap.timeline();
    tl
    .to(document.querySelector('body'),{
        visibility: 'visible',
        duration: 0.8
    })
}
export const revealIntroSection=(transitionRef:RefObject<HTMLDivElement>)=>{
    const tl = gsap.timeline();
    tl
    .to(transitionRef.current!.querySelector('div:nth-child(3)'),{
        height: 0,
        duration: 3,
        ease: 'expo.inOut'
    })
    .to(transitionRef.current!.querySelector('div:nth-child(3) h1'),{
        y: '-300%',
        duration: 1.6,
        ease: 'expo.in'
    },'-=2.2')
    .to(transitionRef.current!.querySelector('div:nth-child(2)'),{
        height: 0,
        duration: 2,
        ease: 'expo.inOut'
    },'-=1.6')
    .to(transitionRef.current!.querySelector('div:nth-child(1)'),{
        height: 0,
        duration: 2,
        ease: 'expo.inOut'
    },'-=1.4')
    .to(transitionRef.current,{
        display: 'none',
        duration: 0.5,
        ease: 'expo.inOut'
    });
}

export const contentSectionAppear = (ref:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let triggerTarget = ref;

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger: triggerTarget.current,
            start:'-=75%',
            // end: '+=200',
        }
    })

    tl
    .from(triggerTarget.current!.querySelector('div'),{
        opacity: 0,
        duration: 0.1,
    })
    .from(triggerTarget.current!.querySelectorAll('h1'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        stagger: 0.2,
        duration: 1,
        ease: 'power3.inOut'
    },'-=0.3')
    .from(triggerTarget.current!.querySelectorAll('div:nth-child(1) h2'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelectorAll('p'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 2,
        ease: 'power2.inOut'
    },'-=1.4')
    .from(triggerTarget.current!.querySelectorAll('a svg'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        stagger: 0.2,
        duration: 0.5,
        ease: 'power3.inOut'
    },'-=0.5');
}

export const cursorAnimation = (posX: number, posY:number)=>{
    const innerCursorTarget = document.querySelector('#innerCursor');
    gsap.to(innerCursorTarget,{
        x: posX,
        left: '-0.875rem',
        y: posY,
        top: '-0.875rem',
        duration: 1,
        ease: "power2.out"
    })
}
export const isClickable = (cursorBefore?:any)=>{
    gsap.to(document.querySelector('#innerCursor'),{
        backgroundColor: 'transparent',
        border: '0.1rem solid #e55812',
        width: '2.5rem',
        duration: 0.1
    })
}

export const isNotClickable = ()=>{
    gsap.to(document.querySelector('#innerCursor'),{
        backgroundColor: '#403d39',
        border: '0.25rem solid #403d39',
        width: '1.65rem',
        cursor: 'default',
        duration: 0.1
    })
}

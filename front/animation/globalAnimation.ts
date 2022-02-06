import { NONAME } from 'dns';
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
    .to(transitionRef.current!.querySelector('div:nth-child(3) h2'),{
        y: '-110%',
        duration: 2,
        ease: 'expo.inOut'
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
            start:'-=600',
            // end: '+=200',
            // markers: true,
        }
    })

    tl
    .from(triggerTarget.current!.querySelector('div'),{
        opacity: 0,
        duration: 0.1,
    })
    .from(triggerTarget.current!.querySelectorAll('h2'),{
        opacity: 0,
        // height: 0,
        y: -5,
        stagger: 0.2,
        duration: 0.5,
        ease: 'expo.inOut'
    },'-=0.3')
    .from(triggerTarget.current!.querySelectorAll('h3'),{
        opacity: 0,
        // height: 0,
        y: -5,
        stagger: 0.2,
        duration: 0.5,
        ease: 'expo.inOut'
    },'-=0.6')
    .from(triggerTarget.current!.querySelectorAll('p'),{
        opacity: 0,
        // height: 0,
        y: 5,
        stagger: 0.2,
        duration: 0.4,
        ease: 'expo.inOut'
    },'-=0.2')
    .from(triggerTarget.current!.querySelectorAll('li'),{
        opacity: 0,
        stagger: 0.1,
        duration: 0.1,
        ease: 'expo.inOut'
    },'-=0.4')
    .from(triggerTarget.current!.querySelectorAll('svg'),{
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'expo.inOut'
    },'-=0.8');
}

export const cursorAnimation = (posX: number, posY:number)=>{
    const innerCursorTarget = document.querySelector('#innerCursor');
    const outerCursorTarget = document.querySelector('#outerCursor');

    console.log(innerCursorTarget);
    let tl = gsap.timeline();
    tl
    .to(innerCursorTarget,{
        x: posX,
        left: '-0.875rem',
        // x: posX + (window.innerWidth * 0.03) * 0.8,
        y: posY,
        top: '-0.875rem',
        // y: posY + (window.innerHeight * 0.03) * 0.8,
        duration: 0.5,
        ease: "power2.out"
    })
    .to(outerCursorTarget,{
        x: posX,
        left: '-2rem',
        // x: posX + (window.innerWidth * 0.035) * 0.5,
        y: posY,
        top: '-2rem',
        // y: posY + (window.innerHeight * 0.035) * 0.5,
        duration: 0.3,
        ease: "power2.out"
    },'-=0.3');
}
export const isClickable = ()=>{
    const tl = gsap.timeline();
    tl
    .to(document.querySelector('#innerCursor'),{
        backgroundColor: 'transparent',
        border: 'none',
        duration: 0.1
    })
    .to(document.querySelector('#outerCursor'),{
        border: '0.1rem solid #f47e3e',
        scale: 1.75,
        duration: 0.8,
        ease: "power3.out"
    })
    .to(document.querySelector('#innerCursor span'),{
        scale: 2,
        opacity: 1,
        duration: 0.1,
        ease: "power3.out"
    },'-=0.6')
    .to(document.querySelector('#innerCursor span'),{
        scale: 2,
        opacity: 1,
        duration: 0.1,
        ease: "power3.out"
    },'-=0.6');
}

export const isNotClickable = ()=>{
    const tl = gsap.timeline();

    tl
    .to(document.querySelector('#outerCursor'),{
        border: '0.2rem solid #252422',
        scale: 1,
        duration: 0.3,
        ease: "power3.out"
    })
    .to(document.querySelector('#innerCursor'),{
        backgroundColor: '#f47e3e',
        border: '0.25rem solid #f47e3e',
        duration: 0.1
    })
    .to(document.querySelector('#innerCursor span'),{
        scale: 1,
        opacity: 0,
        duration: 0.1
    });
}

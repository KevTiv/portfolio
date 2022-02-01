import { NONAME } from 'dns';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

export const titleAnimation = (cursorPosXinTitleContainer: number, ref: RefObject<HTMLDivElement>) =>{
    console.log(cursorPosXinTitleContainer);
    console.log(ref.current);
    gsap.to(ref.current!.querySelector('span'),{
        x: cursorPosXinTitleContainer - (3 * ref.current!.offsetLeft),
        // x: ()=>{
        //     return cursorPosXinTitleContainer - (2.5 * ref.current!.offsetLeft);
        // },
        duration: 2,
        ease: 'expo.inOut'
    })
}
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
        y: 10,
        duration: 0.9,
    })
    .from(triggerTarget.current!.querySelectorAll('h2'),{
        opacity: 0,
        height: 0,
        y: -5,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.3')
    .from(triggerTarget.current!.querySelectorAll('h3'),{
        opacity: 0,
        height: 0,
        y: -5,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.6')
    .from(triggerTarget.current!.querySelectorAll('p'),{
        opacity: 0,
        scale: 0.2,
        y: -5,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.2')
    .from(triggerTarget.current!.querySelectorAll('li'),{
        opacity: 0,
        height: 0,
        // y: 2,
        stagger: 0.1,
        duration: 0.4,
        ease: 'expo.inOut'
    },'-=0.4')
    .from(triggerTarget.current!.querySelectorAll('svg'),{
        opacity: 0,
        // scale: 0.2,
        // y: -5,
        stagger: 0.2,
        duration: 0.6,
        ease: 'expo.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelector('.ball'),{
        scale: 0.2,
        opacity: 0,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.8');
}

export const cursorAnimation = (posX: number, posY:number)=>{
    const cursorTarget = document.querySelector('#innerCursor');
    console.log(cursorTarget);
    let tl = gsap.timeline();
    tl
    .to(cursorTarget,{
        // x: posX - cursorTarget!.offsetHeight ,
        x: posX ,
        // y: posY - (window.innerHeight / 2),
        y: posY ,
        duration: 0.5,
        ease: "power2.out"
    })
}

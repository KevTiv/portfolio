import { NONAME } from 'dns';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

export const titleAnimation = (cursorPosXinTitleContainer: number, ref: RefObject<HTMLDivElement>) =>{
    console.log(cursorPosXinTitleContainer);
    gsap.to(ref.current!.querySelector('span'),{
        x: ()=>{
            if((cursorPosXinTitleContainer + ref.current!.offsetLeft + ref.current!.querySelector('span')!.clientWidth) > ref.current!.scrollWidth){
                return ref.current!.scrollWidth - ref.current!.querySelector('span')!.clientWidth - (0.15 * ref.current!.offsetLeft);
            }else{ 
                return cursorPosXinTitleContainer - (2.5 * ref.current!.offsetLeft);
            }
        },
        duration: 2,
        ease: 'expo.inOut'
    })
}
export const titleAnimationOff = (x: number, ref: RefObject<HTMLDivElement>)=>{
    gsap.to(ref.current!.querySelector('span'),{
        x: '2px',
        duration: 6,
        ease: 'expo.out'
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
            start: '-=1000',
            // end: '+=200',
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
    .from(triggerTarget.current!.querySelectorAll('h2'),{
        opacity: 0,
        scale: 0.2,
        y: -80,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelectorAll('h3'),{
        opacity: 0,
        scale: 0.2,
        y: -80,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelectorAll('p'),{
        opacity: 0,
        scale: 0.2,
        y: -80,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelectorAll('li'),{
        opacity: 0,
        scale: 0.2,
        y: 40,
        stagger: 0.2,
        duration: 0.6,
        ease: 'expo.inOut'
    },'-=0.8')
    .from(triggerTarget.current!.querySelectorAll('svg'),{
        opacity: 0,
        scale: 0.2,
        y: -20,
        stagger: 0.2,
        duration: 0.6,
        ease: 'expo.inOut'
    },'-=3.5');
}

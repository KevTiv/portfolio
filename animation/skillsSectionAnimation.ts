import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MutableRefObject } from 'react';

export const revealSkillSection =(skillRevealTrigger:MutableRefObject<any>, skillContentRef:MutableRefObject<any>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: skillRevealTrigger.current,
            start: "-=1500"
        }
    });

    tl
    .from(skillContentRef.current.querySelector('h1'),{
        opacity: 0,
        y: -150,
        skewX: 10,
        duration: 1.5,
        ease: "power3.inOut"
    })
    .from(skillContentRef.current.querySelectorAll('div div h2'),{
        opacity: 0,
        x: -150,
        skewX: 10,
        duration: 0.75,
        ease: "power3.inOut"
    })
    .from(skillContentRef.current.querySelectorAll('div div p'),{
        opacity: 0,
        x: 250,
        skewX: 10,
        duration: 0.75,
        ease: "power3.inOut"
    },"-=0.5")
}

export const revealSkillGallery =(skillGallery:MutableRefObject<any>)=>{
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: skillGallery.current,
            start: "-=1500"
        }
    });

    tl
    .from(skillGallery.current.querySelectorAll('span'),{
        opacity: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "power3.inOut"
    })
}
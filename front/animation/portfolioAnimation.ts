import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RefObject } from 'react'

export const revealProjectContent = (projectEntryRef: RefObject<HTMLDivElement>, expandProject:boolean)=>{
    const tl = gsap.timeline();

    if(expandProject){
        tl
        .to(projectEntryRef.current!.querySelector('p'),{
            display: 'block',
            padding: '2rem 1.5rem',
            duration: 0.1
        })
        .to(projectEntryRef.current!.querySelector('svg'),{
            rotate: '-135deg',
            duration: 0.8
        })  
    }else{
        tl
        .to(projectEntryRef.current!.querySelector('p'),{
            display: 'none',
            duration: 0.1
        }) 
        .to(projectEntryRef.current!.querySelector('svg'),{
            rotate: '-45deg',
            duration: 0.8
        })   
    }
}

export const projectEntryAppear = (trigger:RefObject<HTMLDivElement>, projectEntryRef:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger: trigger.current,
            start: '-=500',
            end: '+=300',
            // markers: true,
        }
    })

    tl
    .from(projectEntryRef.current!.querySelectorAll('div'),{
        opacity: 0.5,
        duration: 0.3
    })
    .from(projectEntryRef.current!.querySelectorAll('h3'),{
        opacity: 0,
        x: 100, 
        scale: 0.2,
        duration: 0.8,
    })
    .from(projectEntryRef.current!.querySelectorAll('button'),{
        opacity: 0,
        y: -50, 
        scale: 0.2,
        duration: 0.8,
    }, '-=0.4');
}
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RefObject } from 'react'

export const revealProjectContent = (projectEntryRef: RefObject<HTMLDivElement>, expandProject:boolean)=>{
    const tl = gsap.timeline();

    {expandProject?
        tl
        .to(projectEntryRef.current!.querySelectorAll('div:nth-child(2) p'),{
            display: 'block',
            duration: 0.5,
            ease: 'power3.in'
        })
        .to(projectEntryRef.current!.querySelector('svg'),{
            rotate: '-135deg',
            duration: 0.3
        },'-=0.4')  
    :
        tl
        .to(projectEntryRef.current!.querySelectorAll('div:nth-child(2) p'),{
            display: 'none',
            duration: 0.2,
            ease: 'power3.out'
        }) 
        .to(projectEntryRef.current!.querySelector('svg'),{
            rotate: '-45deg',
            duration: 0.3
        },'-=0.2')   
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
    .from(projectEntryRef.current!.querySelectorAll('.project_title'),{
        opacity: 0,
        x: 100, 
        scale: 0.2,
        stagger: 0.1,
        duration: 0.8,
    })
    .from(projectEntryRef.current!.querySelectorAll('button'),{
        opacity: 0,
        y: -50, 
        scale: 0.2,
        duration: 0.8,
    }, '-=0.4');
};

export const showProjectImg = (imgOuterSpan:Element, imgInnerSpan:Element, img:Element)=>{
    const tl = gsap.timeline();

    tl
    .to(imgOuterSpan,{
        'position': 'absolute',
        display: 'inline-block',
        top: 0,
        right: '5%',
        width: '25%',
        opacity: 1,
        rotate: '-8deg',
        duration: 0.4,
        ease: 'power3.inOut'
    })
    .to([imgInnerSpan, img],{
        // 'position': 'absolute',
        width: '100%',
        height: '100%',
        duration: 0.1
    }, '-=0.3')
};
export const hideProjectImg = (imgOuterSpan:Element)=>{
    gsap.to(imgOuterSpan,{
        display: 'none',
        opacity: 0,
        duration: 0.4,
        top: '-5%',
        right: 0,
        ease: 'power3.inOut'
    })
};

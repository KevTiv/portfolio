import {gsap} from 'gsap';
import { MutableRefObject } from 'react';

export const introAppear =(ImgRef:MutableRefObject<any>, intro1Ref:MutableRefObject<any>, intro2Ref:MutableRefObject<any>, intro3Ref:MutableRefObject<any>, intro4Ref:MutableRefObject<any>)=>{
    let tl = gsap.timeline();
    tl
    .from(ImgRef.current.querySelector('span:nth-child(1)'),{
        opacity: 0,
        duration: 2,
        ease: "power3.inOut"
    })
    .from(ImgRef.current.querySelector('span:nth-child(2)'),{
        opacity: 0,
        x: 400,
        y: 250,
        duration: 1,
        ease: "power3.inOut"
    },"-=2.2")
    .from(intro1Ref.current,{
        opacity: 0,
        y: 100,
        duration: 1
    },"-=0.9")
    .from(intro2Ref.current,{
        // position: 'absolute',
        // y: 10,
        // skewX: 30,
        opacity: 0,
        duration: 1.25,
        ease: "power3.Out",
        // stagger: 0.15
    }, "-=1")
    .from(intro3Ref.current,{
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.inOut"
    },"-=1.5")
    .from(intro4Ref.current.querySelectorAll('span'),{
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.inOut"
    });
}
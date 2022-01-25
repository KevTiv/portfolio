import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { RefObject } from 'react'

// export const nameEmphasis =(e:any)=>{
//     const GsapCSSRulePlugin = require("gsap/CSSRulePlugin");
//     const { CSSRulePlugin } = GsapCSSRulePlugin;
    
//     gsap.registerPlugin(CSSRulePlugin);
//     console.log(e.target);
//     console.log(CSSRulePlugin.getRule('h2.hello_world:before'));
//     gsap.to(CSSRulePlugin.getRule('h2.hello_world:before'),{
//         width: '47.5%',
//         right: 0, 
//         duration: 1
//     })
// }

export const scrollThroughIntro=(introSectionRef:RefObject<HTMLDivElement>)=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: introSectionRef.current,

            start: 'top top',
            end: '+=1200',
            endTrigger: '+=1600',
            scrub: 0.5,
        }
    })
    tl.to(introSectionRef.current,{
        height:0,
        duration: 4,
        // ease: 'power2.in'
    })
    .to(introSectionRef.current!.querySelector('div div:nth-child(2)'),{
        top: '-40%',
        opacity: 0,
        duration: 2.5,
        // ease: 'power2.in'
    },'-=2')
}


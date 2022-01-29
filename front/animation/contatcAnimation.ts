import gsap from 'gsap'
import {MouseEvent} from 'react'

export const contactOptionHoverOn=(e:MouseEvent) =>{
    gsap.to(e.target,{
        scale: 1.1,
        skewX: '16deg',
        y: '-0.35rem',
        duration: 0.1
    });
};
export const contactOptionHoverOff=(e:MouseEvent)=>{
    gsap.to(e.target,{
        scale: 1,
        skewX: '0deg',
        y: '0',
        duration: 0.1
    });
};
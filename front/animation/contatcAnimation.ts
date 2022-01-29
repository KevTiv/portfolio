import gsap from 'gsap'
import {MouseEvent} from 'react'

export const contactOptionHoverOn=(e:MouseEvent) =>{
    gsap.to(e.target,{
        scale: 1.1,
        skewX: 16,
        y: -8,
        duration: 0.1
    });
};
export const contactOptionHoverOff=(e:MouseEvent)=>{
    gsap.to(e.target,{
        scale: 1,
        skewX: 0,
        y: 0,
        duration: 0.1
    });
};
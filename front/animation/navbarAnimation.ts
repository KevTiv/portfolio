import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { RefObject, MouseEvent } from 'react'


export const menuOptionHoverOn=(e:MouseEvent) =>{
    gsap.to(e.target,{
        color: '#fffcf2',
        scale: 1.35,
        skewX: 18,
        y: -8,
        duration: 0.1
    });
};

export const menuOptionHoverOff=(e:MouseEvent) =>{
    gsap.to(e.target,{
        color: '#eb5e28',
        scale: 1.2,
        skewX: 0,
        y: 0,
        duration: 0.1
    });
};

export const showNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: 0,
        duration: 0.3,
    });
};
export const hideNav =(navRef:RefObject<HTMLDivElement>)=>{
    gsap.to(navRef.current!.querySelector('nav'),{
        top: '-10%',
        duration: 0.3,
    });
};

export const animateBurgerMenu = (isOpen:boolean, burgerRef:RefObject<HTMLDivElement>)=>{
    const tl = gsap.timeline();

    {isOpen ?
        tl
        .to(burgerRef.current!.querySelector('span:nth-child(1'),{
            rotate: '0deg',
            height: '0.65vw',
            duration: 0.3
        })
        .to(burgerRef.current!.querySelector('span:nth-child(2'),{
            width: '4.85vw',
            height: '0.55vw',
            rotate: '0deg',
            x: '-0.2vw',
            duration: 0.3
        })

        :
        tl
        .to(burgerRef.current!.querySelector('span:nth-child(1'),{
            rotate: '45deg',
            height: '0.8vw',
            duration: 0.3
        })
        .to(burgerRef.current!.querySelector('span:nth-child(2'),{
            width: '6.15vw',
            height: '0.6vw',
            rotate: '-50deg',
            x: '0.2vw',
            duration: 0.3
        })
    }
}
export const openMobileMenu = (mobNavRef:RefObject<HTMLDivElement>)=>{
    gsap.to(mobNavRef.current,{
        height: '100vh',
        duration: 0.8,
        ease: 'power3.out'
    });
    gsap.to(mobNavRef.current!.querySelector('ul'),{
        display: 'flex',
        duration: 0.1,
    });
    
}
export const closeMobileMenu = (mobNavRef:RefObject<HTMLDivElement>)=>{
    gsap.to(mobNavRef.current!.querySelector('ul'),{
        display: 'none',
        duration: 0.1,
    });
    gsap.to(mobNavRef.current,{
        height: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
}
//Scroll to #id section
export const scrollToSection = (id:string)=>{
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        scrollTo: {
            y: id,
            offsetY: 260
        },
        ease: "power2",
        duration: 1
    });
};
import gsap from 'gsap'

export const screenReveal=()=>{
    gsap.to(document.querySelector('body'),{
        visibility: 'visible',
        duration: 0.2
    })
}

export const h2TitleAnimation = ()=>{
    gsap.fromTo(document.querySelectorAll('.titleAnimation'),{
        translateX: '102%',
        // position: 'absolute'
    },{
        // position: 'absolute',
        translateX: '-102%',
        duration: 3.85,
        repeat: -1,
        ease: 'linear'
    })
}
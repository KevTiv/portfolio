import style from '../../styles/Home.module.scss'
import introStyle from '../../styles/Intro.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

import Image from 'next/Image'

import dev from '../../public/asset/programmer.svg'
import terminal from '../../public/asset/terminal.png'
import linkedin from '../../public/asset/logo/linkedin.svg'
import github from '../../public/asset/logo/github.svg'
import { useEffect, useRef, useState } from 'react'

import {introAppear} from '../../animation/introSectionAnimation'

type introProps={
    isdarkMode: boolean,
    screenDimension: {'width':number, 'height':number},
}
const Intro = ({isdarkMode, screenDimension}: introProps) => {
    const Linkedin = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2vw" height="2vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" fill="#0f4fb5"/></svg>
    const Github = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2vw" height="2vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="grey"/></g></svg>

    const ImgRef = useRef(null);
    const intro1Ref = useRef(null);
    const intro2Ref = useRef(null);
    const intro3Ref = useRef(null);
    const intro4Ref = useRef(null);

    useEffect(() => {
        introAppear(ImgRef, intro1Ref, intro2Ref, intro3Ref, intro4Ref);
    },[])
    console.log(screenDimension);
    return (
        <>
            <div className={`${style.container} ${fontStyle.font} 
                ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode} ${introStyle.intro_content}`}>
                    <div ref={ImgRef}>
                        <Image src={dev} alt="Developper png" width={800} height={800}/>
                        {/* <Image src={dev} alt="Developper png" width={(viewportWidth * 50) / 100} height={(viewportHeight * 50) / 100}/> */}
                        <Image src={terminal} className={introStyle.imgTerminal} alt="Developper png" width={256} height={256} />
                        {/* <Image src={terminal} className={introStyle.imgTerminal} alt="Developper png" width={(viewportWidth * 9) / 100} height={(viewportHeight* 9) / 100} /> */}
                    </div>
                    <div>
                        <p ref={intro1Ref}>Hi, my name is </p>
                        <h1 ref={intro2Ref}>
                            <span>K</span>
                            <span>e</span>
                            <span>v</span>
                            <span>i</span>
                            <span>n</span>{' '}
                            <span>C.</span>{' '}
                            <span>T</span>
                            <span>I</span>
                            <span>V</span>
                            <span>E</span>
                            <span>R</span>
                            <span>T</span>
                        </h1>
                        <p ref={intro3Ref}>And I'm a developper passionate about creating beautiful products and experience for the web.</p>
                        <div ref={intro4Ref}>
                            <span>
                                {/* <Image src={linkedin} alt="Developper png" width={256} height={256}/>
                                <p>Linkedin</p> */}
                                {Linkedin}{' '}
                                <p>Linkedin</p>
                            </span>
                            <span>
                                {/* <Image src={github} alt="Developper png" width={256} height={256}/>
                                 <p>Github</p> */}
                                 {Github}
                                 <p>Github</p>
                            </span>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Intro

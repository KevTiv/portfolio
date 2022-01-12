import style from '../../styles/Home.module.scss'
import introStyle from '../../styles/Intro.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

import Image from 'next/Image'

import dev from '../../public/asset/programmer.svg'
import terminal from '../../public/asset/terminal.png'
import linkedin from '../../public/asset/linkedin.png'
import github from '../../public/asset/github.png'
import { useEffect, useState } from 'react'
type introProps={
    isdarkMode: boolean
}
const Intro = ({isdarkMode}: introProps) => {
    const [viewportWidth, setWidth] = useState<number>(0);
    const [viewportHeight, setHeight] = useState<number>(0);
    useEffect(() =>{

        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
    },[])
    
    return (
        <>
            <div className={`${style.container} ${introStyle.intro_content} ${fontStyle.font} 
                ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                    <div>
                        <Image src={dev} alt="Developper png" width={(viewportWidth * 65) / 100} height={(viewportHeight * 65) / 100}/>
                        <Image src={terminal} className={introStyle.imgTerminal} alt="Developper png" width={(viewportWidth * 12.5) / 100} height={(viewportHeight* 12.5) / 100} />
                    </div>
                    <div>
                        <p>Hi, my name is </p>
                        <h1 >
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
                        <p>And I'm a developper passionate about creating beautiful products and experience for the web.</p>
                        <div>
                            <span>
                                <Image src={linkedin} alt="Developper png" width={50} height={50}/>
                                <p>Linkedin</p>
                            </span>
                            <span>
                                <Image src={github} alt="Developper png" width={50} height={50}/>
                                 <p>Github</p>
                            </span>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Intro

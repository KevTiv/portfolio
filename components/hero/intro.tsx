import style from '../../styles/Home.module.scss'
import introStyle from '../../styles/Intro.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

import Image from 'next/Image'

import dev from '../../public/asset/programmer.svg'
import terminal from '../../public/asset/terminal.png'
import linkedin from '../../public/asset/linkedin.png'
import github from '../../public/asset/github.png'
type introProps={
    isdarkMode: boolean,
    screenDimension: {'width':number, 'height':number},
}
const Intro = ({isdarkMode, screenDimension}: introProps) => {
    console.log(screenDimension);
    return (
        <>
            <div className={`${style.container} ${introStyle.intro_content} ${fontStyle.font} 
                ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                    <div>
                        <Image src={dev} alt="Developper png" width={(screenDimension.width * 45) / 100} height={(screenDimension.height * 45) / 100}/>
                        {/* <Image src={dev} alt="Developper png" width={(viewportWidth * 50) / 100} height={(viewportHeight * 50) / 100}/> */}
                        <Image src={terminal} className={introStyle.imgTerminal} alt="Developper png" width={(screenDimension.width * 10) / 100} height={(screenDimension.height* 10) / 100} />
                        {/* <Image src={terminal} className={introStyle.imgTerminal} alt="Developper png" width={(viewportWidth * 9) / 100} height={(viewportHeight* 9) / 100} /> */}
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

import style from '../../styles/Home.module.scss'
import theme from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

import Image from 'next/Image'

import dev from '../../public/asset/programmer.png'
import linkedin from '../../public/asset/linkedin.png'
import github from '../../public/asset/github.png'
type introProps={
    isdarkMode: boolean
}
const Intro = ({isdarkMode}: introProps) => {
    const imgWidth = 500;
    const imgHeight = 500;
    return (
        <>
            <div className={`${style.container} ${style.intro_content} ${fontStyle.font} 
                ${isdarkMode ? theme.dark_mode : theme.light_mode}`}>
                    <div>
                        <Image src={dev} alt="Developper png" width={imgWidth} height={imgHeight} layout={'fixed'}/>
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
                                <Image src={linkedin} alt="Developper png" width={imgWidth / 10} height={imgHeight / 10}/>
                                <p>Linkedin</p>
                            </span>
                            <span>
                                <Image src={github} alt="Developper png" width={imgWidth / 10} height={imgHeight / 10}/>
                                 <p>Github</p>
                            </span>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Intro

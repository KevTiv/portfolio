import { Dispatch, SetStateAction } from 'react'

import styles from '../../styles/Home.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import theme from '../../styles/Theme.module.scss'
import fontStyles from '../../styles/Fonts.module.scss'
import Image from 'next/Image'

import aboutLightTheme from '../../public/asset/about_dark.png'
import skillsLightTheme from '../../public/asset/skills_dark.png'
import portfolioLightTheme from '../../public/asset/portfolio_dark.png'
import resumeLightTheme from '../../public/asset/cv_dark.png'
// import sun from '../../public/asset/sun.png'
import sun from '../../public/asset/nav/sun.svg'

import aboutDarkTheme from '../../public/asset/about_light.png'
import skillsDarkTheme from '../../public/asset/skills_light.png'
import portfolioDarkTheme from '../../public/asset/portfolio_light.png'
import resumeDarkTheme from '../../public/asset/cv_light.png'
// import moon from '../../public/asset/moon.png'
import moon from '../../public/asset/nav/moon.svg'


type navProps={
    isdarkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({isdarkMode, setDarkMode}:navProps ) => {
    const imgWidth = 50;
    const imgHeight = 50;

    return (
        <>
            <nav>
                <div className={`${navStyles.logo} ${isdarkMode ? theme.dark_mode : theme.light_mode} ${fontStyles.font}`}>
                    <h2>
                        &lt;Kevin Tivert &#47;&gt;
                    </h2>
                </div>
                <div className={`${navStyles.navbar_container} ${isdarkMode ? theme.navbar_dark : theme.navbar_light} `}>
                    <span>
                        {/* <Image src={isdarkMode ? aboutDarkTheme : aboutLightTheme} alt="About me" width={imgWidth} height={imgHeight} />  */}
                        <Image src={'/asset/nav/person.svg'} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <p>About Me</p>
                    </span>
                    <span>
                        {/* <Image src={isdarkMode ? skillsDarkTheme : skillsLightTheme} alt="About me" width={imgWidth} height={imgHeight} />  */}
                        <Image src={'/asset/nav/skill.svg'} alt="Skill" width={imgWidth} height={imgHeight} /> 
                        <p>Skills</p>
                    </span>
                    <span>
                        {/* <Image src={isdarkMode ? portfolioDarkTheme : portfolioLightTheme} alt="About me" width={imgWidth} height={imgHeight} />  */}
                        <Image src={'/asset/nav/portfolio.svg'} alt="Portfolio" width={imgWidth} height={imgHeight} /> 
                        <p>Portfolio</p>
                    </span>
                    <span>
                        {/* <Image src={isdarkMode ? resumeDarkTheme : resumeLightTheme} alt="About me" width={imgWidth} height={imgHeight} />  */}
                        <Image src={'/asset/nav/cv.svg'} alt="Resume" width={imgWidth} height={imgHeight} /> 
                        <p>Resume</p>
                    </span>
                    <span onClick={()=>setDarkMode(!isdarkMode)}>
                        {/* <Image src={isdarkMode ? sun : moon} alt="About me" width={imgWidth} height={imgHeight} />  */}
                        <Image src={isdarkMode ? sun : moon} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <p>{isdarkMode? 'Light mode' : 'Dark mode'}</p>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar

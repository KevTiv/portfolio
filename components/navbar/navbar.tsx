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
import sun from '../../public/asset/sun.png'

import aboutDarkTheme from '../../public/asset/about_light.png'
import skillsDarkTheme from '../../public/asset/skills_light.png'
import portfolioDarkTheme from '../../public/asset/portfolio_light.png'
import resumeDarkTheme from '../../public/asset/cv_light.png'
import moon from '../../public/asset/moon.png'


type navProps={
    isdarkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({isdarkMode, setDarkMode}:navProps ) => {
    const imgWidth = 50;
    const imgHeight = 50;

    return (
        <>
            <nav className={`${styles.navbar}`}>
                <div className={`${navStyles.logo} ${isdarkMode ? theme.dark_mode : theme.light_mode} ${fontStyles.font}`}>
                    <h2>
                        &lt;Kevin Tivert &#47;&gt;
                    </h2>
                </div>
                <div className={`${navStyles.navbar_container} ${isdarkMode ? theme.navbar_dark : theme.navbar_light} ${fontStyles.font}`}>
                    <span>
                        <Image src={isdarkMode ? aboutDarkTheme : aboutLightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <h3>About Me</h3>
                    </span>
                    <span>
                        <Image src={isdarkMode ? skillsDarkTheme : skillsLightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <h3>Skills</h3>
                    </span>
                    <span>
                        <Image src={isdarkMode ? portfolioDarkTheme : portfolioLightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <h3>Portfolio</h3>
                    </span>
                    <span>
                        <Image src={isdarkMode ? resumeDarkTheme : resumeLightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <h3>Resume</h3>
                    </span>
                    <span onClick={()=>setDarkMode(!isdarkMode)}>
                        <Image src={isdarkMode ? sun : moon} alt="About me" width={imgWidth} height={imgHeight} /> 
                        <h3>{isdarkMode? 'Light mode' : 'Dark mode'}</h3>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar

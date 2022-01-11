import { Dispatch, SetStateAction } from 'react'

import navStyles from '../../styles/Navbar.module.scss'
import theme from '../../styles/Theme.module.scss'
import Image from 'next/Image'

import about_lightTheme from '../../public/about_dark.png'
import skills_lightTheme from '../../public/skills_dark.png'
import portfolio_lightTheme from '../../public/portfolio_dark.png'
import resume_lightTheme from '../../public/cv_dark.png'
import sun from '../../public/sun.png'

import about_darkTheme from '../../public/about_light.png'
import skills_darkTheme from '../../public/skills_light.png'
import portfolio_darkTheme from '../../public/portfolio_light.png'
import resume_darkTheme from '../../public/cv_light.png'
import moon from '../../public/moon.png'


type navProps={
    isdarkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({isdarkMode, setDarkMode}:navProps ) => {
    const imgWidth = 50;
    const imgHeight = 50;

    return (
        <>
            <div className={`${navStyles.logo} ${isdarkMode ? theme.dark_mode : theme.light_mode}`}>
                <h1>
                    &lt;Kevin Tivert&gt;
                </h1>
            </div>
            <div className={`${navStyles.navbar_container} ${isdarkMode ? theme.navbar_dark : theme.navbar_light}`}>
                <span>
                    <Image src={isdarkMode ? about_darkTheme : about_lightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                    <h3>About Me</h3>
                </span>
                <span>
                    <Image src={isdarkMode ? skills_darkTheme : skills_lightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                    <h3>Skills</h3>
                </span>
                <span>
                    <Image src={isdarkMode ? portfolio_darkTheme : portfolio_lightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                    <h3>Portfolio</h3>
                </span>
                <span>
                    <Image src={isdarkMode ? resume_darkTheme : resume_lightTheme} alt="About me" width={imgWidth} height={imgHeight} /> 
                    <h3>Resume</h3>
                </span>
                <span onClick={()=>setDarkMode(!isdarkMode)}>
                    <Image src={isdarkMode ? sun : moon} alt="About me" width={imgWidth} height={imgHeight} /> 
                    <h3>{isdarkMode? 'Light mode' : 'Dark mode'}</h3>
                </span>
            </div>
        </>
    )
}

export default Navbar

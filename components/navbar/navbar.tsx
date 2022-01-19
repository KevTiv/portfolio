import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react'

import styles from '../../styles/Home.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import theme from '../../styles/Theme.module.scss'
import fontStyles from '../../styles/Fonts.module.scss'
import Image from 'next/Image'




import {logoAppear, navbarAppear} from '../../animation/navbarAnimation';

type navProps={
    isdarkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({isdarkMode, setDarkMode}:navProps ) => {
    const navbarRef = useRef(null);
    const logoRef = useRef(null);

    const AboutMe = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></g></svg>
    const Skills = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72l-166.272 96l-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96l54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0a192 192 0 0 0 384 0z"/></svg>
    const Portfolio = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/><path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/></g></svg>
    const Resume = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7z" fill="currentColor"/><path d="M8 7h8v2H8V7z" fill="currentColor"/><path d="M8 11h8v2H8v-2z" fill="currentColor"/><path d="M8 15h5v2H8v-2z" fill="currentColor"/></g></svg>
    const Sun = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" fill="currentColor"/></g></svg>
    const Moon = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.6rem" height="3.6rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></g></svg>



    useEffect(() => {
        logoAppear(logoRef);
        navbarAppear(navbarRef);
    },[]);
    return (
        <>
            <nav>
                <div ref={logoRef} className={`${isdarkMode ? theme.dark_mode : theme.light_mode} ${fontStyles.font} ${navStyles.logo} `}>
                    <h2>
                        &lt;Kevin Tivert &#47;&gt;
                    </h2>
                </div>
                <div  ref={navbarRef} className={`${navStyles.navbar_container} ${isdarkMode ? theme.navbar_dark : theme.navbar_light} `}>
                    {/* ${fontStyles.font} */}
                    <span >
                        {AboutMe}
                    </span>
                    <span >
                        {Skills}
                    </span>
                    <span >
                        {Portfolio}
                    </span>
                    <span >
                        {Resume}
                    </span>
                    <span   className={isdarkMode? `${navStyles.darkMode}` : `${navStyles.lightMode}`} onClick={()=>setDarkMode(!isdarkMode)}>
                        {isdarkMode ? Sun : Moon}
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar

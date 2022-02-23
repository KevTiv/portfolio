import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const Déesse = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25vw" height="2.25vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

    const [imgOuterSpan, setOuterSpan] = useState<Element | null>();
    const [imgInnerSpan, setInnerSpan] = useState<Element | null>();
    const [img, setImg] = useState<Element | null>();

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);

        setOuterSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(2) > div.Portfolio_project_title__YF_fV > span"));
        setInnerSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(2) > div.Portfolio_project_title__YF_fV > span > span"));
        setImg(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(2) > div.Portfolio_project_title__YF_fV > span > img"));

    },[])

    return(
        <>
            <div className={`${portfolioStyles.projectEntry}`} ref={projectEntryRef}>
                <div className={portfolioStyles.project_title}
                    onClick={()=>{
                        setExpand(!expandProject);
                        revealProjectContent(projectEntryRef, expandProject)
                    }}
                    onMouseEnter={()=>expandProject&&!isMediaMobile ? showProjectImg(imgOuterSpan!, imgInnerSpan!, img!) : null}
                    onMouseLeave={()=>hideProjectImg(imgOuterSpan!)}
                >
                    <h2>Déesse</h2>
                    <button className={styles.click}
                            onClick={()=>{
                            setExpand(!expandProject);
                            revealProjectContent(projectEntryRef, expandProject)
                            }} 
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}>
                        {Arrow}
                    </button>

                    <Image className={"projectImg"} src={'/img/déesse/déesse_1.webp'} alt='Déesse website img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                    <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://kevtiv.github.io/deesse/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            </b>
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://github.com/KevTiv/deesse" target="_blank" rel="noopener noreferrer">Repository</a>
                            </b>
                        </p>
                    </div>
                    <h3><b>Description</b></h3>
                    <p>
                        Landing page for fictitious car renting  company that specialize in renting Citroën Ds cars in a Mediterranean location.
                    </p>
                    <div>
                        <h3><b>Goal</b></h3>
                        <p>
                        Create a landing page that could entice potential customer to rent a Citroën Ds while on vacation.
                        </p>
                        <h3><b>Challenges</b></h3>
                        <p>
                            Create a beautiful layout with beautiful animation that are responsive according to the device screen size at load time. 
                        </p>
                        <h3><b>Solution Implemented</b></h3>
                        <p>
                            The landing page is built using ReactJs, styled with SCSS and the animations are made with the GSAP library.
                        </p>
                        <h3><b>Future Improvement</b></h3>
                        <p>
                            Use images that of smaller size to improve the render time.
                        </p>
                        <h3><b>Known Issues</b></h3>
                        <p>
                            Background image takes a while to load on slow connectivity such as 3G
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Déesse;
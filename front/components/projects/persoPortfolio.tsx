import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent, showProjectImg, hideProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const PersonalPortfolio = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25vw" height="2.25vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

    const [imgOuterSpan, setOuterSpan] = useState<Element | null>();
    const [imgInnerSpan, setInnerSpan] = useState<Element | null>();
    const [img, setImg] = useState<Element | null>();

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
        setOuterSpan(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(2) > div:nth-child(1) > span:nth-child(3)"));
        setInnerSpan(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)"));
        setImg(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(2) > div:nth-child(1) > span:nth-child(3) > img:nth-child(2)"));
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
                    <h2>Portfolio</h2>
                    
                    <button className={styles.click}
                            onClick={()=>{
                            setExpand(!expandProject);
                            revealProjectContent(projectEntryRef, expandProject)
                            }} 
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}>
                        {Arrow}
                    </button>

                    <Image className={"project_img"} src={'/img/portfolio/portfolio_1.webp'} alt='portfolio img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                    <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            
                                <a href="https://github.com/KevTiv/portfolio" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>

                    <h3>Description</h3>
                    <p>
                        Personal portfolio to showcase me as a developer and journal my growth as a developer. 
                    </p>
                    <h3>Goal</h3>
                    <p>
                        Create a website that will showcase the latest project I worked on.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PersonalPortfolio;


import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const Railway = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25vw" height="2.25vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;


    const [imgOuterSpan, setOuterSpan] = useState<Element | null>();
    const [imgInnerSpan, setInnerSpan] = useState<Element | null>();
    const [img, setImg] = useState<Element | null>();

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
        setOuterSpan(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(1) > div:nth-child(1) > span:nth-child(3)"));
        setInnerSpan(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(1) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)"));
        setImg(document.querySelector("div.Portfolio_projectEntry__YZUfm:nth-child(1) > div:nth-child(1) > span:nth-child(3) > img:nth-child(2)"));
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
                    <h2>Railway</h2>
                    <button className={styles.click}
                            onClick={()=>{
                            setExpand(!expandProject);
                            revealProjectContent(projectEntryRef, expandProject)
                            }} 
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}>
                        {Arrow}
                    </button>

                    <Image className={"projectImg"} src={'/img/railway/railway_1.webp'} alt='railway img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://railway-copy.vercel.app" target="_blank" rel="noopener noreferrer">Go to site</a>
                            </b>
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://github.com/KevTiv/railway" target="_blank" rel="noopener noreferrer">Repository</a>
                            </b>
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Copy of the railway website found on awwwards within a set timeline.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        Recreate the railway website layout and animation within 2 days.
                    </p>
                    {/* <h3>Challenges</h3>
                    <p>
                        Create the railway website landing page within a short time period.
                        Create the railway website landing page animations within a short time period.
                    </p>
                    <h3>Solution Implemented</h3>
                    <p>
                       The website is built using NextJs, TailwindCSS, and GSAP.
                       The website is built using a mobile first approach, which made building the website easier.
                    </p>
                    <h3>Future Improvement</h3>
                    <p>
                        Adjust landing page arrows dimension ratios to their respective container.
                        Find the correct arrow clip path.       
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default Railway;
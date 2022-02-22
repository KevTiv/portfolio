import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const WineGrader = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3vw" height="3vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;


    const [imgOuterSpan, setOuterSpan] = useState<Element | null>();
    const [imgInnerSpan, setInnerSpan] = useState<Element | null>();
    const [img, setImg] = useState<Element | null>();

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
        setOuterSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(5) > div.Portfolio_project_title__YF_fV > span"));
        setInnerSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(5) > div.Portfolio_project_title__YF_fV > span > span"));
        setImg(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(5) > div.Portfolio_project_title__YF_fV > span > img"));
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
                    <h2>Wine Grader</h2>
                    <button className={styles.click}
                            onClick={()=>{
                            setExpand(!expandProject);
                            revealProjectContent(projectEntryRef, expandProject)
                            }} 
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}>
                        {Arrow}
                    </button>

                    <Image className={"projectImg"} src={'/img/wineGrader/wineGrader_1.webp'} alt='portfolio img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://winequality-predictor.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            </b>
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://github.com/KevTiv/Machine-Learning-Wine-Quality" target="_blank" rel="noopener noreferrer">Repository</a>
                            </b>
                        </p>
                    </div>
                    <p><b>Description</b></p>
                    <p>
                        Web app project built to offers the possibility to grade wine quality according to the chemical 
                        composition of a wine sample. A user can adjust those chemical factors from a slider panel in the web application. 
                        The app grader model is built using machine learning techniques on a dataset that is comprise of 1600 different wines.
                    </p>
                    <p><b>Goal</b></p>
                    <p>
                        Build a web application That offers the end user with the possibility to grade the wine quality 
                        depending on the chemical content of the user’s wine.
                    </p>
                    <p><b>Challenges</b></p>
                    <p>
                        Build an accurate grading model that will offer the user with highly accurate predictions.
                    </p>
                    <p><b>Solution Implemented</b></p>
                    <p>
                       The grading model is built in python (Jupyter Notebook). The model is trained using AutoML using 
                       the TPOT Library on the vinho verde dataset available on Kaggle.com under the MIT library. The 
                       front end is built with the streamlit library because it simplified the process of building a front end 
                       for the app and this python library is focused on offering components design and built around easy data visualization.
                    </p>
                    <p><b>Future Improvement</b></p>
                    <p>
                        Build the front end of the web app using javascript framework which are less opinionated which will 
                        enable a more creative approach to the looks of the app and a better user experience.
                    </p>
                </div>
            </div>
        </>
    )
}

export default WineGrader;
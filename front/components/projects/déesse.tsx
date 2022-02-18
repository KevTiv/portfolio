import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, MouseEvent, useState, RefObject } from 'react'
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const Déesse = ({portfolioSectionRef}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3vw" height="3vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#3c6e71"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
    },[])

    return(
        <>
            <div className={`${portfolioStyles.projectEntry}`} ref={projectEntryRef}>
                <div className={portfolioStyles.project_title}
                    onClick={()=>{
                        setExpand(!expandProject);
                        revealProjectContent(projectEntryRef, expandProject)
                    }}
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
                </div>
                <div>
                    <p><b>Description</b></p>
                    <p>
                        Landing page for fictitious car renting  company that specialize in renting Citroën Ds cars in a Mediterranean location.
                    </p>
                    <p><b>Goal</b></p>
                    <p>
                       Create a landing page that could entice potential customer to rent a Citroën Ds while on vacation.
                    </p>
                    <p><b>Challenges</b></p>
                    <p>
                        Create a beautiful layout with beautiful animation that are responsive according to the device screen size at load time. 
                    </p>
                    <p><b>Solution Implemented</b></p>
                    <p>
                        The landing page is built using ReactJs, styled with SCSS and the animations with the GSAP library.
                    </p>
                    <p><b>Future Improvement</b></p>
                    <p>
                        Use images that of smaller size to improve the render time.
                    </p>
                    <p><b>Known Issues</b></p>
                    <p>
                       Background image takes a while to load on slow connectivity such as 3G
                    </p>
                </div>
            </div>
        </>
    )
}

export default Déesse;
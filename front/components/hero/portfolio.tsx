import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, MouseEvent, useState, RefObject } from 'react'
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'
import IMS from '../projects/ims'
import WeatherTracker from '../projects/nasaWeatherTracker'
import Déesse from '../projects/déesse'
import WineGrader from '../projects/wineGrader'
import SchedulerApp from '../projects/schedulerApp'

export type projectProps={
    portfolioSectionRef:RefObject<HTMLDivElement>,
}

const Portfolio = () => {

    const portfolioSectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        contentSectionAppear(portfolioSectionRef);
    },[]);

  return (
      <>
        <div id="portfolio" className={`${styles.components} ${portfolioStyles.portfolioContent} ${styles.main}`} ref={portfolioSectionRef}>
            <div className={styles.content}>
                <div className={styles.title_container}>
                    
                    <h1 className="titleAnimation">Portfolio</h1>
                    <h1 className="titleAnimation">Portfolio</h1>
                    <h1 className="titleAnimation">Portfolio</h1>
                </div>
                <p>
                    I listed below a list of the last project I have worked on in the last year.
                </p>
                <div className={portfolioStyles.projectPanel}>
                    <IMS portfolioSectionRef={portfolioSectionRef}/>
                    <WeatherTracker portfolioSectionRef={portfolioSectionRef}/>
                    <Déesse portfolioSectionRef={portfolioSectionRef}/>
                    <WineGrader portfolioSectionRef={portfolioSectionRef}/>
                    <SchedulerApp portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                </div>
            </div>
        </div>
      </>
  )
};



const Project = ({portfolioSectionRef}:projectProps)=>{
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
                    <h2>Lorem</h2>
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
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                    repellendus excepturi harum!
                    </p>
                </div>
                
            </div>
        </>
    )
}


export default Portfolio;

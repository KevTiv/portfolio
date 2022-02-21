
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState, RefObject } from 'react'
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'
import IMS from '../projects/ims'
import WeatherTracker from '../projects/nasaWeatherTracker'
import Déesse from '../projects/déesse'
import WineGrader from '../projects/wineGrader'
import SchedulerApp from '../projects/schedulerApp'
import PersonalPortfolio from '../projects/persoPortfolio'

export type projectProps={
    portfolioSectionRef :RefObject<HTMLDivElement>,
    isMediaMobile ?: boolean
}

const Portfolio = () => {

    const portfolioSectionRef = useRef<HTMLDivElement>(null);
    const [isMediaMobile, setMediaMobile] = useState<boolean>(false);

    useEffect(() => {
        contentSectionAppear(portfolioSectionRef);

        window.addEventListener('resize',()=>{
            setMediaMobile(window.innerWidth <= 640 ? true : false);
        });

        return() =>{
            window.removeEventListener('resize',()=>{
                setMediaMobile(window.innerWidth <= 640 ? true : false);
            });
        }

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
                    <PersonalPortfolio portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                    <Déesse portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                    <WeatherTracker portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                    <IMS portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                    <WineGrader portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                    <SchedulerApp portfolioSectionRef={portfolioSectionRef} isMediaMobile={isMediaMobile}/>
                </div>
            </div>
        </div>
      </>
  )
};

export default Portfolio;
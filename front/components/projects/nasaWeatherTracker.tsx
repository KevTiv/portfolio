import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const WeatherTracker = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3vw" height="3vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

    const [imgOuterSpan, setOuterSpan] = useState<Element | null>();
    const [imgInnerSpan, setInnerSpan] = useState<Element | null>();
    const [img, setImg] = useState<Element | null>();

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
        setOuterSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(3) > div.Portfolio_project_title__YF_fV > span"));
        setInnerSpan(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(3) > div.Portfolio_project_title__YF_fV > span > span"));
        setImg(document.querySelector("#portfolio > div > div.Portfolio_projectPanel__R83gc > div:nth-child(3) > div.Portfolio_project_title__YF_fV > span > img"));
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
                    <h2>Nasa Weather Tracker</h2>
                    <button className={styles.click}
                            onClick={()=>{
                            setExpand(!expandProject);
                            revealProjectContent(projectEntryRef, expandProject)
                            }} 
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}>
                        {Arrow}
                    </button>
                    <Image className={"projectImg"} src={'/img/nasaWeatherTracker/nasaWeatherTracker_1.webp'} alt='Weather tracker img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href=" https://kevtiv.github.io/weather_events_tracker/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            </b>
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            <b>
                                <a href="https://github.com/KevTiv/weather_events_tracker" target="_blank" rel="noopener noreferrer">Repository</a>
                            </b>
                        </p>
                    </div>
                    <p><b>Description</b></p>
                    <p>
                        Web app built to take advantage of the public nasa API that tracks weather 
                        events such as wildfire, marine storms and active volcanoes across the globe.
                    </p>
                    <p><b>Goal</b></p>
                    <p>
                        Create an application that could update an end user with locations of severe 
                        weather events such as wildfire, maritime storms and active volcanoes.
                    </p>
                    <p><b>Challenges</b></p>
                    <p>
                        Converts the response result form the nasa API into useful data markers that will
                        be used to populate our map API.
                    </p>
                    <p><b>Solution Implemented</b></p>
                    <p>
                        I used the location informations and weather events informations from each 
                        weather events returned by the nasa API to create markers using the leaflet map 
                        library marker functions. The markers are then displayed on a map also derived 
                        from the leaflet library. I also implemented a control panel where the user can 
                        choose which type of weather events are being displayed on the map. A modal panel 
                        also appears when a user click on a individual marker to reveal more info on the weather 
                        event occurring at that marker location.
                    </p>
                    <p><b>Future Improvement</b></p>
                    <p>
                        Differentiate the different weather marker for a better visual experience.
                    </p>
                </div>
            </div>
        </>
    )

}

export default WeatherTracker;
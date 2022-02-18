import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, MouseEvent, useState, RefObject } from 'react'
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const SchedulerApp = ({portfolioSectionRef}:projectProps)=>{
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
                    <h2>Scheduler Application</h2>
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
                        This application was created in the aim to provide the user with a scheduling app. This app is capable
                        of connecting to the cloud ("wgudb.ucertify.com") and manage customers and appointments across multiple
                        locations and timezones. This app offers an appointment screen where user will be able to fill information
                        he/she desire to add or update, a report feature for customers and appointments information.
                        And lastly for security purposes this app also provide a log screen to protect user information privacy.
                    </p>
                    <p><b>Goal</b></p>
                    <p>
                    - Create an application that enable a user to easily create, modify, or delete meetings.
                    - The application data needs to be stored on a cloud based sql server.
                    </p>
                    <p><b>Challenges</b></p>
                    <p>
                    - Build an application within the java ecosystem with cloud sql server capabilities.
                    - The app should also have more than 1 language enable.
                    </p>
                    <p><b>Solution Implemented</b></p>
                    <p>
                        Since the app was design to be hosted on computer the app is built with javafx 
                        for the user interface and using the java sql library to connect to the cloud sql server.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SchedulerApp;
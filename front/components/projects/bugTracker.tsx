import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const BugTracker = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25vw" height="2.25vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#e55812"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

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
                    <h2>Bug Tracker</h2>
                    <button className={styles.click}
                        onClick={()=>{
                        setExpand(!expandProject);
                        revealProjectContent(projectEntryRef, expandProject)
                        }} 
                        onMouseEnter={isClickable} 
                        onMouseLeave={isNotClickable}
                    >
                        {Arrow}
                    </button>
                    <Image className={"projectImg"} src={'/img/bugTracker/bugTracker_1.webp'} alt='Bug Tracker landing page image' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            
                                <a href="https://bug-tracker-nine.vercel.app" target="_blank" rel="noopener noreferrer">Go to site</a>
                            
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            
                                <a href="https://github.com/KevTiv/bug-tracker" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        The is web application project was created to produce an easy online solution for a team to track bugs in their 
                        codebase. The project has reached its MVP (minimum viable product) goal of producing a product that can store bug 
                        information, such as name, description, resolved status, priority status, date of creation, and if available a screenshot 
                        image in a PostgreSQL database. The project was built using Typescript. The front end was built using NextJS, Sass, and TailwindCSS. 
                        The back end was built with PrismaJS as the ORM (Object-relational mapping) tool used to communicate with a PostgreSQL 
                        database hosted on the Supabase platform. For this application, I took advantage of the NextJS getServerSideProps and API 
                        functionality to build the bridge between the client-side and the backend database.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        - Create a product that can store bugs information for a team
                        - Keep track of a bug (bug name, description, resolved status, priority author, images), update or delete bugs if necessary (update and delete action are only allowed to user privileged).
                        - Store and assign new user info and privilege when new successful sign-in has been done through Supabase GitHub Auth.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BugTracker;
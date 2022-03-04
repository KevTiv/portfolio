import Image from 'next/image'
import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState } from 'react'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'
import { hideProjectImg, projectEntryAppear, revealProjectContent, showProjectImg } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const IMS = ({portfolioSectionRef, isMediaMobile}:projectProps)=>{
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
                    <h2>IMS - Inventory Management System</h2>
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
                    <Image className={"projectImg"} src={'/img/ims/ims_1.webp'} alt='inventory management system landing page image' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div className={portfolioStyles.project_links}>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            
                                <a href="https://kevtiv.github.io/inventoryManagementSystem/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            
                        </p>
                        <p
                            onMouseEnter={isClickable} 
                            onMouseLeave={isNotClickable}
                        >
                            
                                <a href="https://github.com/KevTiv/inventoryManagementSystem" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        The is web application project was created with the aim to produce an 
                        easy online solution for small businesses inventory management needs. 
                        The project has reached its MVP (minimum viable product) goal of producing 
                        a product that can store products information, brands information, and 
                        inventory details in a PostgreSQL database. The project was built using 
                        Typescript. The front end was built using ReactJs, Sass, and TailwindCSS. 
                        The back end was built with NodeJs, and PrismaJs as the ORM (Object-relational 
                        mapping) tool use to communicate with the PostgreSQL database.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        - Create a product that can meet the inventory management needs of a small business.<br/>
                        - MVP: Keep track of an inventory (product quantity, product details and brand).
                    </p>
                    {/* <h3>Challenges</h3>
                    <p>
                        - Find an ORM tool that will minimize SQL error and abstract the different queries inside the codebase. The ORM has to work with typescript preferably.<br/>
                        - Implement an authentication schema that is secure and reliable.<br/>
                        - Implement a layer of security against bots.<br/>
                        - Create details forms and correctly pass along the data from said forms.<br/>
                        - Find an effective solution for storing images.<br/>
                        - Change the software theme according the user computer theme.<br/>
                        - Create an application with technologies not used before like typescript, Firebase and PrismaJS.<br/>
                    </p>
                    <h3>Solution Implemented</h3>
                    <p>
                        - Through my research for an ORM that works with typescript I found PrismaJS.
                        Prisma works especially well due to it’s fairly minimal initial setup, and the process 
                        of setting up the different database tables is especially easy due it’s JSON like format.<br/>
                        - For the login and authentication process of the software, I opted to go with a proven 
                        authentication solution such as Oauth or google auth through firebase. I opted to the latter 
                        because firebase also offer an effective storage schema for image and ReCaptcha to detects bots.<br/>
                        - The forms implementation were especially tricky, I first tried to simply use react state hooks to manage 
                        the content of the forms and pass them along to the database but it didn’t behave as expected. After 
                        researching for ways to make my forms work, I opted to use the react-hook-form library which fixed my 
                        issues of inconsistent data input with my forms.<br/>
                    </p>
                    <h3>Future Improvement</h3>
                    <p>
                        - Add a user profile picture from their google account used to sign in the app.<br/>
                        - Add option to change theme between light or dark theme.<br/>
                        - Add an order table to manage incoming and outgoing orders.<br/>
                        - Add an order interface for the end user to visualize incoming and 
                        outgoing orders.<br/>
                        - Add widgets for the end user to visualize stock movements, 
                        such as a graph of products past movement on a set time.<br/>
                        - Add widgets of products with comparison, from stored data such 
                        as difference in stocks at current data with previous years.<br/>
                        - Add server response message card. e.g.: Product was successfully added. <br/>
                        - implement error handling for wrong form submissions and updating 
                        the state of any form error to the end user.<br/>
                    </p>
                    <h3>Known Issues</h3>
                    <p>
                        - When the end user input a new product, brand, inventory or update a product, brand or 
                        update inventory. He/she has to manually refresh the page for the affected table to reflect 
                        the change.<br/>
                        - A cloud-based PostgreSQL database is not yet set online.<br/>
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default IMS;
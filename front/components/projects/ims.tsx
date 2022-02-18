import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, MouseEvent, useState, RefObject } from 'react'
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'
import { projectProps } from '../hero/portfolio'

const IMS = ({portfolioSectionRef}:projectProps)=>{
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
                    <h2>IMS - Inventory Management System</h2>
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
                        The is web application project was created with the aim to produce an 
                        easy online solution for small businesses inventory management needs. 
                        The project has reached its MVP (minimum viable product) goal of producing 
                        a product that can store products information, brands information, and 
                        inventory details in a PostgreSQL databases. The project was built using 
                        Typescript. The front end was built using ReactJs, Sass, and TailwindCSS. 
                        The back end was built with NodeJs, and PrismaJs as the ORM (Object-relational 
                        mapping) tool use to communicate with the PostgreSQL database.
                    </p>
                    <p><b>Goal</b></p>
                    <p>
                        - Create a product that can meet the inventory management needs of a small business.
                        - MVP: Keep track of an inventory (product quantity, product details and brand).
                    </p>
                    <p><b>Challenges</b></p>
                    <p>
                        - Find an ORM tool that will minimize SQL error and abstract the different queries inside the codebase. The ORM has to work with typescript preferably.
                        - Implement an authentification schema that is secure and reliable.
                        - Implement a layer of security against bots.
                        - Create details forms and correctly pass along the data from said forms.
                        - Find an effective solution for storing images.
                        - Change the software theme according the user computer theme.
                        - Create an application with technologies not used before like typescript, Firebase and PrismaJS.
                    </p>
                    <p><b>Solution Implemented</b></p>
                    <p>
                        - Through my research for an ORM that works with typescript I found PrismaJS.
                        Prisma works especially well due to it’s fairly minimal initial setup, and the process 
                        of setting up the different database tables is especially easy due it’s JSON like format.
                        - For the login and authentification process of the software, I opted to go with a proven 
                        authentification solution such as Oauth or google auth through firebase. I opted to the latter 
                        because firebase also offer an effective storage schema for image and Recaptcha to detects bots.
                        - The forms implementation were especially tricky, I first tried to simply use react state to manage 
                        the content of the forms and pass them along to the database but it didn’t behave as expected. After 
                        researching for ways to make my forms work, I opted to use the react-hook-form library which fixed my 
                        issues of inconsistent data input with my forms.
                    </p>
                    <p><b>Future Improvement</b></p>
                    <p>
                        - Add an order table to manage incoming and outgoing orders.
                        - Add an order interface for the end user to visualize incoming and 
                        outgoing orders.
                        - add an interface for the end user to visualize stock movements, 
                        such as a graph of products past movement on a set time.
                        - Add widgets of products with comparison, from stored data such 
                        as difference in stocks at current data with previous years.
                        - Implement unit testings for forms submissions
                        - implement error handling for wrong form submissions and updating 
                        the state of any form error to the end user.
                    </p>
                    <p><b>Known Issues</b></p>
                    <p>
                        - When the end user input a new product, brand, inventory or update a product, brand or 
                        update inventory. He/she has to manually refresh the page for the affected table to reflect 
                        the change.
                    </p>
                </div>
            </div>
        </>
    )
}

export default IMS;
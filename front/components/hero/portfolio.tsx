import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, useState, RefObject } from 'react';
import { contentSectionAppear, h2TitleAnimation } from '../../animation/globalAnimation';
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation';

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
                    <h2 className="titleAnimation">Portfolio</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores.
                </p>
                <div className={portfolioStyles.projectPanel}>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                </div>
            </div>
        </div>
      </>
  )
};

type projectProps={
    portfolioSectionRef:RefObject<HTMLDivElement>,
}

const Project = ({portfolioSectionRef}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const downArrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor"/></svg>;
    const upArrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" fill="currentColor"/></svg>;

    useEffect(() => {
        // const clickedOutsideProjectEntryDiv = (e: MouseEvent) => {
        //     if(projectEntryRef.current && !projectEntryRef.current.contains(e.target as HTMLElement)){
        //         console.log(e.target, ' Check: ', projectEntryRef.current.contains(e.target as HTMLElement));
        //         setExpand(!expandProject);
        //         revealProjectContent(projectEntryRef, expandProject);
        //     }
        // };
        // document.addEventListener('click', clickedOutsideProjectEntryDiv);

        // return()=>{
        //     document.removeEventListener('click', clickedOutsideProjectEntryDiv);
        // }

        projectEntryAppear(portfolioSectionRef, projectEntryRef);
    },[])

    return(
        <>
            <div className={portfolioStyles.projectEntry} ref={projectEntryRef} 
                onClick={()=>{
                    setExpand(!expandProject);
                    revealProjectContent(projectEntryRef, expandProject)
                }}>
                <div className={portfolioStyles.project_title}>
                    <h3>Lorem</h3>
                    <button onClick={()=>{
                        setExpand(!expandProject);
                        revealProjectContent(projectEntryRef, expandProject)
                    }}>{expandProject? downArrow : upArrow}</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                    repellendus excepturi harum!
                </p>
            </div>
        </>
    )
}

export default Portfolio;

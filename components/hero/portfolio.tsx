import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import portfolioStyle from '../../styles/Portfolio.module.scss'

import portfolioList from '../../public/resources/portfolio.json'
import skillsList from '../../public/resources/skills.json'
import { useEffect, useRef } from 'react'
import { revealPortfolioSection } from '../../animation/portfolioSectionAnimation'

type portfolioProps={
    isdarkMode?: boolean,
}
export type projectProps={

    title?: string,
    description?: string,
    challenge?: string,
    lesson?: string,
    tech?:{
        Frontend?:[string],
        Backend?:[string],
    },
    img?: [string],
    link?: {
        github: string
    },

}
const Portfolio = ({isdarkMode} : portfolioProps) => {
    const router = useRouter();

    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;
                                    
    const Github = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2vw" height="2vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="white"/></g></svg>

    const imgWidth = 30;
    const imgHeight = 30;

    const portfolioContentRef= useRef<any>(null);

    const redirectToProject = (index : number) => {
        router.push({
            pathname: `/portfolio/${index}`,
            query: { 
                isDarkMode: JSON.stringify(isdarkMode),
                id: JSON.stringify(index),
            },
        });
    };
    useEffect(() => {
        revealPortfolioSection(portfolioContentRef);
    }, []);
    return (
        <>
            <section id="portfolioSection">
                <div ref={portfolioContentRef} className={`${portfolioStyle.portfolioWrapper} ${style.container} ${fontStyle.font} 
                    ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                    <h1>Portfolio</h1> 
                    <p>I listed below a selection of the last projects I have worked on.</p>
                    <ul className={portfolioStyle.panel}>
                        {portfolioList["portfolioList"].map((portfolio, index)=>{
                            return(
                                <li key={index} className={portfolioStyle.portfolioListEntry} 
                                    onClick={(e)=>{
                                            e.preventDefault();
                                            redirectToProject(index);
                                    }}>
                                    <div className={portfolioStyle.title}>
                                        <h2>
                                            {portfolio.title}
                                        </h2>
                                        <a href={portfolio.link.github} target="_blank"  className={`${isdarkMode ? themeStyle.githubLinkBgDark : themeStyle.githubLinkBgLight}`} rel="noreferrer">
                                            {/* <Image src={githubLogo} alt={githubName} width={imgWidth} height={imgHeight} layout="fixed"/> */}
                                            {Github}
                                        </a>
                                    </div>
                                    
                                    <p className="">
                                        {portfolio.description}
                                    </p>
                                    <div className={portfolioStyle.moreInfo} 
                                        // onClick={(e)=>{
                                        //     e.preventDefault();
                                        //     redirectToProject(index);
                                        // }}
                                        >
                                       <p>More details</p>  <span>&rsaquo;</span>
                                    </div>
                                    
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Portfolio

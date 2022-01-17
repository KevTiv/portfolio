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
                                            <Image src={githubLogo} alt={githubName} width={imgWidth} height={imgHeight} layout="fixed"/>
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

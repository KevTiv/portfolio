import Image from 'next/image'

import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import portfolioStyle from '../../styles/Portfolio.module.scss'

import portfolioList from '../../public/resources/portfolio.json'
import skillsList from '../../public/resources/skills.json'

type portfolioProps={
    isdarkMode?: boolean,
}
const Portfolio = ({isdarkMode} : portfolioProps) => {
    
    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;

    const imgWidth = 30;
    const imgHeight = 30;
    return (
        <>
            <section id="portfolioSection">
                <div className={`${portfolioStyle.portfolioWrapper} ${style.container} ${fontStyle.font} 
                    ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                    <h1>Portfolio</h1> 
                    <p>I listed below a selection of the last projects I have worked on.</p>
                    <div>
                        {portfolioList["portfolioList"].map((portfolio, index)=>{
                            return(
                                <div key={index} className={portfolioStyle.portfolioListEntry}>
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
                                    <div className={portfolioStyle.tech}>
                                        <p className="">
                                            Frontend: 
                                        </p>
                                        {portfolio.tech.Frontend.map((tech, index)=>{
                                            return <span key={index}> {tech}</span>
                                        })}
                                    </div>
                                    <div className={portfolioStyle.tech}>
                                        <p className="">
                                            Backend: 
                                        </p>
                                        {portfolio.tech.Backend.map((tech, index)=>{
                                            return <span key={index}> {tech}</span>
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio

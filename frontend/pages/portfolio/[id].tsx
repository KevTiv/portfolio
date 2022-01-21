import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import portfolioStyle from '../../styles/Portfolio.module.scss'
import Image from 'next/Image'

import skillsList from '../../public/resources/skills.json'
import portfolioList from '../../public/resources/portfolio.json'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar/navbar'
import PortfolioHead from '../../components/head/head'



type portfolioProps={
    // isDarkMode: boolean,
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
export const getStaticPaths= async(context:any) =>{
    return {
            paths: [
                '/portfolio/[id]',
            ],
            fallback: true,
    }
};
export const getStaticProps = async(context:any)=>{
    const portfolio = portfolioList["portfolioList"][context.params.id];

    return{
        props: {
            portfolio: portfolio,
        }
    }
};

const Project = ({ portfolio}:any) => {
    const Github = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="3.5vw" height="3.5vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#999"/></g></svg>

    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;

    const projectImg= '/asset/project.svg';

    const imgWidth = 80;
    const imgHeight = 80;

    const [isdarkMode, setDarkMode] = useState<boolean>(false);
    
    useEffect(() => {
        setDarkMode(false);
    },[])

    return (
        <>
            <div className={`${style.container} ${isdarkMode? themeStyle.container_bgdark : themeStyle.container_bglight}`}>
                <PortfolioHead/>
                <main className={`${style.main}`}>
                    <Navbar isdarkMode={isdarkMode} setDarkMode={setDarkMode}/>
                    <div className={`${portfolioStyle.projectContent} ${style.hero} ${isdarkMode? themeStyle.dark_mode : themeStyle.light_mode} ${fontStyle.font}`}> 
                        <div>   
                            <h1>{portfolio?.title}</h1>
                            <span>
                                {/* <Image src={github} alt="Developper png" width={256} height={256}/>
                                 <p>Github</p> */}
                                 {Github}
                                 <p>Github</p>
                            </span>
                        </div>
                        <div>   
                            <Image src={projectImg} alt="Project image" width={500} height={500}/>
                        </div>
                        <div>   
                            <h2>Description of the project</h2>
                            <p>{portfolio?.description}</p>
                        </div>
                            
                        <div>   
                            <h2>Challenges faced</h2>
                            <p>{portfolio?.challenge}</p>
                        </div>
                        <div>   
                            <h2>Lesson learned</h2>
                            <p>{portfolio?.lesson}</p>
                        </div>
                        <div>   
                            <h2>Tech used</h2>
                            <div>   
                                <p>Frontend: </p>
                                <p>{portfolio?.tech?.Frontend}</p>
                            </div>
                            <div>   
                                <p>Backend: </p>
                                <p>{portfolio?.tech?.Backend}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Project


{/* <div className={`${portfolioStyle.projectWrapper} ${style.main} ${fontStyle.font} 
                ${isdarkMode ? themeStyle.container_bgdark  : themeStyle.container_bglight}`}>
                <div className={`${portfolioStyle.projectContent} ${style.hero} ${isdarkMode ? themeStyle.dark_mode  : themeStyle.light_mode}`}>     
                <Navbar isdarkMode={isdarkMode} setDarkMode={setDarkMode}/>

                    <div>   
                        <h1>{portfolio?.title}</h1>
                        <a href={portfolio?.link?.github} className={isdarkMode ? themeStyle.githubLinkBgDark : themeStyle.githubLinkBgLight}>
                            <Image src={githubLogo} alt={githubName} width={imgWidth} height={imgHeight} layout="fixed"/>

                        </a>
                    </div>
                    <div>   
                        <Image src={projectImg} alt="Project image" width={500} height={500}/>
                    </div>
                    <div>   
                        <h2>Description of the project</h2>
                        <p>{portfolio?.description}</p>
                    </div>
                        
                    <div>   
                        <h2>Challenges faced</h2>
                        <p>{portfolio?.challenge}</p>
                    </div>
                    <div>   
                        <h2>Lesson learned</h2>
                        <p>{portfolio?.lesson}</p>
                    </div>
                    <div>   
                        <h2>Tech used</h2>
                        <div>   
                            <p>Frontend: </p>
                            <p>{portfolio?.tech?.Frontend}</p>
                        </div>
                        <div>   
                            <p>Backend: </p>
                            <p>{portfolio?.tech?.Backend}</p>
                        </div>
                    </div>
                    
                </div>
            </div>   */}
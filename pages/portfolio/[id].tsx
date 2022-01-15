import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import portfolioStyle from '../../styles/Portfolio.module.scss'
import Image from 'next/Image'

import { useBeforeunload } from 'react-beforeunload'

import skillsList from '../../public/resources/skills.json'
import portfolioList from '../../public/resources/portfolio.json'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar/navbar'



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
    

    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;

    const projectImg= '/asset/project.svg';

    const imgWidth = 40;
    const imgHeight = 40;

    const [isdarkMode, setDarkMode] = useState<boolean>(false);
    
    useEffect(() => {
        setDarkMode(false);
    },[])

    return (
        <>
        {/* themeStyle.dark_mode */}
            <div className={`${portfolioStyle.projectWrapper} ${style.main} ${fontStyle.font} 
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
            </div>  
        </>
    )
}

export default Project



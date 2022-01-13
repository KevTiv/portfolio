import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import portfolioStyle from '../../styles/Portfolio.module.scss'
import Image from 'next/Image'

import skillsList from '../../public/resources/skills.json'
import portfolioList from '../../public/resources/portfolio.json'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type projectProps = {
    isdarkMode: boolean,
}
type portfolioProps={

    title?: string,
    description?: string,
    challenge?: string,
    lesson?: string,
    tech?:{
        Frontend?:[string],
        Backend?:[string],
    },
    img?: [string],
    link?: string,

}
const Project = ({isdarkMode}:projectProps) => {
    const router = useRouter();
    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;

    const imgWidth = 30;
    const imgHeight = 30;
    const [portfolio, setPortfolio] = useState<portfolioProps>();
    
    useEffect(() => {
        // let data:string = router.query.data as string;
        // setPortfolio(JSON.parse(data));
        setPortfolio(JSON.parse(router.query.data as string));
    },[]);
    return (
        <>
            <div className={`${portfolioStyle.portfolioWrapper} ${style.container} ${fontStyle.font} 
                        ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                <div>
                    <h1>{portfolio?.title}</h1>
                    <a href="#">
                        <Image src={githubLogo} alt={githubName} width={imgWidth} height={imgHeight} layout="fixed"/>

                    </a>
                </div>
                
                <p>{portfolio?.description}</p>
                <div>
                    <h2>Challenges</h2>
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
        </>
    )
}
export default Project

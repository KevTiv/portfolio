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

import {projectProps} from '../../components/hero/portfolio'
// type projectProps = {
//     isdarkMode: boolean,
// }
// type portfolioProps={

//     title?: string,
//     description?: string,
//     challenge?: string,
//     lesson?: string,
//     tech?:{
//         Frontend?:[string],
//         Backend?:[string],
//     },
//     img?: [string],
//     link?: {
//         github: string
//     },

// }
// const Project = () => {
const Project = ({portfolio, isDarkMode}:any) => {
    // const router = useRouter();
    const githubLogo = skillsList["skills"][19].img;
    const githubName = skillsList["skills"][19].name;

    const projectImg= '/asset/project.svg';

    const imgWidth = 40;
    const imgHeight = 40;

    const [isdarkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        setDarkMode(isDarkMode);
    },[])

    return (
        <>
        {/* themeStyle.dark_mode */}
            <div className={`${portfolioStyle.projectWrapper} ${style.container} ${fontStyle.font} 
                ${isdarkMode ? themeStyle.container_bgdark  : themeStyle.container_bglight}`}>
                <Navbar isdarkMode={isdarkMode} setDarkMode={setDarkMode}/>
                <div className={`${portfolioStyle.projectContent} ${style.hero} ${isdarkMode ? themeStyle.dark_mode  : themeStyle.light_mode}`}>  
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

Project.getInitialcProps =  async(context:any)=>{
    // const router = useRouter();

    return{
        props:{
            project: JSON.parse(context.query.data as string),
            isdarkMode: JSON.parse(context.query.isDarkMode as string)
        }
    }
}

export default Project


//  export const getStaticProps =  async(context:any)=>{
//     // const router = useRouter();

//     return{
//         props:{
//             project: JSON.parse(context.query.data as string),
//             isdarkMode: JSON.parse(context.query.isDarkMode as string)
//         }
//     }
// }
export const getStaticPaths= async() =>{
    // const router = useRouter();
  return {
        paths: [
        // String variant:
        '/portfolio/[id]',
        // Object variant:
        // { params: { 
        //     project: router.query.data,  
        //     isdarkMode: router.query.isDarkMode 
        // } },
        ],
        fallback: true,
}
}



    // const [portfolio, setPortfolio] = useState<projectProps | null>();
    // // const [prevProject, setPrevProject] = useState<projectProps>();
    // // const [pageIndex, setIndex] = useState<string>();
    // // const [prevIndex, setPrevIndex] = useState<string>();
    // const [isdarkMode, setDarkMode] = useState<boolean>(false);
    // // const [isProjectDataStoredToLocalStorage, setTolocaStorage] = useState<boolean>(false);

    // // const onReload=()=>{
    // //     console.log('Stop this');

        
    // //     // e.returnValue = '';

    // //     let index = JSON.parse(localStorage.getItem('index')!);
    // //     let isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')!);
    // //     let projectJSON = JSON.parse(localStorage.getItem('projectJSON')!);

    // //     router.push({
    // //         pathname: `/portfolio/${index}`,
    // //         query: { 
    // //             data: JSON.stringify(projectJSON),
    // //             isDarkMode: JSON.stringify(isDarkMode),
    // //             index: JSON.stringify(index),
    // //         },
    // //     });
    // // };

    // useEffect(() => {
    //     // let data:string = router.query.data as string;
    //     // setPortfolio(JSON.parse(data));
        
        
    //     try {
    //         setPortfolio(JSON.parse(router.query.data as string));
    //         setDarkMode(JSON.parse(router.query.isDarkMode as string));
    //         // setIndex(JSON.parse(router.query.index as string));

    //         localStorage.setItem('projectJSON', router.query.data as string);
    //         localStorage.setItem('isDarkMode', router.query.isDarkMode as string);
    //         localStorage.setItem('index', router.query.index as string);

    //         setTolocaStorage(true);
    //     } catch (err) {
    //         console.error(err);

    //         // window.event.preventDefault();

    //         // onReload();
    //         // try {
    //         //     if(localStorage.getItem('projectJSON')&& localStorage.getItem('projectJSON') === null){
    //         //         let savedLocalData = localStorage.getItem('projectJSON');

    //         //         setPortfolio(JSON.parse(savedLocalData!));
    //         //     }
    //         // } catch (error) {
    //         //     console.error(err);
    //         //     router.push('/');
    //         // }

            

    //         // try {
                
    //         // } catch (error) {
    //         //     router.push('/');
    //         // }
            
    //     }

        
    //     console.log('portfolio: ', portfolio) ; 
    // },[]);
    
    // // window.onbeforeunload = (e) => {
    // //     e.preventDefault()
    // //     onReload();
    // // }
    
    

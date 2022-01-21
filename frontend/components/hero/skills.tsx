import { MutableRefObject, useRef, useState, useEffect } from "react"
import Image from 'next/image'

import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'
import skillStyle from '../../styles/Skills.module.scss'

import skillsList from '../../public/resources/skills.json'
import { revealSkillGallery, revealSkillSection } from "../../animation/skillsSectionAnimation"

type skillsProps={
    isdarkMode?: boolean,
    gallery?: MutableRefObject<any>
}

const ImgContainer = ({isdarkMode, gallery}:skillsProps)=>{

    const imgWidth=50;
    const imgHeight=50;

    return(
        <>
            <div className={skillStyle.skillsView} ref={gallery}>
                {skillsList['skills'].map((skill, index)=>{
                    return(
                        <span  key ={index} className={`${skillStyle.skillsViewItem} ${isdarkMode ? themeStyle.skillViewBgDark : themeStyle.skillViewBgLight}`}>
                            <Image src={skill.img} alt={`${skill.alt} alt`} width={imgWidth} height={imgHeight} layout="fixed"/>
                            <p className="skill_name">
                                {skill.name}
                            </p>
                        </span>
                    )
                })}
            </div>
        </>
    ); 
}

const Skills = ({isdarkMode}:skillsProps) => {
    const skillRevealTrigger = useRef(null);
    const skillContentRef = useRef(null);
    const gallery = useRef<any>(null);

    useEffect(() => {
        revealSkillSection(skillRevealTrigger, skillContentRef);
        revealSkillGallery(gallery);
    },[])
    return (
        <>
            <section ref={skillRevealTrigger} id="skills_section">
               <div ref={skillContentRef} className={`${style.container} ${style.main} ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode} 
                ${skillStyle.skillsWrapper} ${fontStyle.font} `}>
               {/* <div className="skills_wrapper" ref={skillsRef}> */}
                    <h1>Skills</h1>
                    <div>
                        <h2>Front End</h2>
                        <p>Javascript(ES6+), Typescript, React, NextJs, HTML5, Tailwind, Sass, CSS, Bootstrap, Animation, GSAP.</p>
                        <h2>Back End</h2>
                        <p>Python, Typescript, NodeJs, SQL, MySQL, PostgreSQL, PrismaJS, ExpressJS, Axios, Firebase</p>
                        <h2>Version Control</h2>
                        <p>Git, Github</p>
                    </div>
                    <ImgContainer isdarkMode={isdarkMode} gallery={gallery}/>
                    {/* <ImgContainer skillsRef={skillsRef} portfolioRef={portfolioRef}/> */}
                </div>
           </section>
        </>
    )
}

export default Skills

import style from '../../styles/Home.module.scss'
import aboutStyle from '../../styles/AboutMe.module.scss'
import theme from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

import Image from 'next/image'

import discovery from '../../public/asset/discovery_website.svg'
import learning from '../../public/asset/learning_website.svg'
type aboutProps={
    isdarkMode: boolean,
    screenDimension: {'width':number, 'height':number},
}
const AboutMe = ({isdarkMode, screenDimension}: aboutProps) => {
    console.log(screenDimension);
    return (
        <>
            <section>
                <div className={`${style.container} ${aboutStyle.about} ${fontStyle.font} 
                ${isdarkMode ? theme.dark_mode : theme.light_mode}`}>                    
                    <h1>About me</h1>
                    <h2>Hello word! My name is Kevin and I like creating beautiful things.</h2>
                    <div className={aboutStyle.aboutContent}>
                        <div>
                            <Image src={discovery} alt="discovered cool website" width={(screenDimension.width * 45) / 100} height={ (screenDimension.height * 45) / 100} />                            
                            <p>
                                My interest for web development started back in 2018 when I first stumble upon a really cool website on awwwards by Aristide Benoist.<br/>
                                As a person that like to draw and create visual experiences it blew my mind what could be done inside a web browser.
                            </p>
                        </div>
                        <div>
                            <p>
                                While in college persuing my <b>B.Sc in Comuter Science</b>, I was more drawned to web development, now that I had some more understanding of 
                                the inner workings of HTML, CSS, and Javascript. Coupled with frameworks such as Node or Django for back end connectivity to API's/Server, the potential to create unique experience for the end user seems limitless.
                            </p>
                            <Image src={learning} alt="Learning the inner working of a website" width={(screenDimension.width * 45) / 100} height={ (screenDimension.height * 45) / 100} />
                        </div>
                        <div>
                            <p>
                                And after graduating in early 2021, it was clear to me that Web Developemnt offered me the most satisfaction and the potential to always learn and get better at not only coding but story telling and designing visual experince through my work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe

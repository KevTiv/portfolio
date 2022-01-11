import style from '../../styles/Home.module.scss'
import theme from '../../styles/Theme.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'

type aboutProps={
    isdarkMode: boolean
}
const AboutMe = ({isdarkMode}: aboutProps) => {
    return (
        <>
            <div>
                <div className={`${style.container} ${style.main} ${fontStyle.font} 
                ${isdarkMode ? theme.dark_mode : theme.light_mode}`}>                    
                        <h1>About me</h1>
                        <h2>Hello word! My name is Kevin and I like creating beautiful things.</h2>
                        <p>My interest for web development started back in 2018 when I first stumble upon really cool websites on awwwards.<br/>
                        And after graduating with a B.Sc. CS in early 2021 and a couple tutorials later, I decided to go all in on the path of web development. </p>
                        {/* <Image 
                            src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-coding-computer-itim2101-lineal-itim2101.png" 
                            alt=""
                            height={60}
                            width={60}
                        /> */}
                    </div>
            </div>
        </>
    )
}

export default AboutMe

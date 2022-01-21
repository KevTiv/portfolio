import style from '../../styles/Home.module.scss'
import fontStyle from '../../styles/Fonts.module.scss'
import themeStyle from '../../styles/Theme.module.scss'

type contactProps={
    isdarkMode: boolean,
}
const Contact = ({isdarkMode}:contactProps) => {
    return (
        <>
            <div className={` ${style.main} ${style.container} ${fontStyle.font} 
                    ${isdarkMode ? themeStyle.dark_mode : themeStyle.light_mode}`}>
                <h1>CONTACT</h1>
            </div>
        </>
    )
}

export default Contact

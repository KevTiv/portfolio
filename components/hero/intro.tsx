import style from '../../styles/Home.module.scss';

type introProps={
    isdarkMode: boolean
}
const Intro = ({isdarkMode}: introProps) => {
    return (
        <>
            <div className={style.container}>
                <div>
                    <p>Hi, my name is </p>
                    <h1 >
                        <span>K</span>
                        <span>e</span>
                        <span>v</span>
                        <span>i</span>
                        <span>n</span>{' '}
                        <span>C.</span>{' '}
                        <span>T</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                        <span>R</span>
                        <span>T</span>
                    </h1>
                    {/* <img src="https://img.icons8.com/cotton/64/000000/computer.png"/> */}
                    <h2>Web developper</h2>
                    <p>I create problem free solutions which are visually appealing on all screens.</p>
                </div>
            </div>
        </>
    )
}

export default Intro

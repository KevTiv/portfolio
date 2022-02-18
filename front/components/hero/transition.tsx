import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '../../styles/Styles.module.scss'
import { revealIntroSection } from '../../animation/globalAnimation';

const Transition = () => {
    const transitionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        revealIntroSection(transitionRef);
    },[])
  return (
    <>
        <div className={styles.transition} ref={transitionRef}>
            <div></div>
            <div></div>
            <div>
                <h1>
                    Bonjour
                </h1>
            </div>
        </div>
    </>
  );
};

export default Transition;

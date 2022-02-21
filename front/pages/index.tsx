import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Styles.module.scss'

import Navbar from '../components/navbar/index'

import Intro from '../components/hero/intro'
import Portfolio from '../components/hero/portfolio'
import About from '../components/hero/about'
import Contact from '../components/hero/contact'
import { cursorAnimation, screenReveal } from '../animation/globalAnimation'
import Transition from '../components/hero/transition'
import { scrollToSection } from '../animation/navbarAnimation'



const Home: NextPage = () => {
  
  
  useEffect(() => {
    //Use of gsap to smooth reload blink screen.

    scrollToSection('#intro');
    screenReveal();

    const updateCursorPosition = (posX: number, posY: number)=>{
      cursorAnimation(posX, posY);
    }

    document.addEventListener('mousemove',e=>{
      updateCursorPosition(e.clientX, e.clientY);
    });
    return()=>{
      document.removeEventListener('mousemove',e=>{
        updateCursorPosition(e.clientX, e.clientY);
      });
    }
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Tivert Portfolio</title>
        <meta name="description" content="Portfolio showcasing my latest projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition/>
      <Navbar />
      <main className={styles.main}>
        <div id='innerCursor' className={styles.inner_cursor}></div>
        <section  id="intro">
          <Intro/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Portfolio/>
        </section>
        <section>
          <Contact/>
        </section>
      </main>
    </div>
  )
}

export default Home

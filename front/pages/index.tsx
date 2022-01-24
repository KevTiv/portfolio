import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Styles.module.scss'

import Navbar from '../components/navbar/index'
import Intro from '../components/hero/intro'
import Portfolio from '../components/hero/portfolio'
import About from '../components/hero/about'
import Contact from '../components/hero/contact'
import Skills from '../components/hero/skills'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default Home

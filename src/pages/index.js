import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import backgroundimage from "/src/styles/backgrounds/space-loop.gif"
import Link from 'next/link'
import Layout from "../components/Layout";
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Trever Taylor - Full Stack Developer</title>
      </Head>
     <Layout>
      
     <Navbar />

    <main className='homepage'>
      <div className="uk-position uk-position-center">
        <div className="uk-container uk-container-large">
          <div className='uk-flex uk-flex-center'>
            <div>
        <h1 className="main-title1 uk-heading uk-heading-medium uk-text-bold uk-text-center">Hello, my name is</h1>
        <h1 className="main-title2 uk-heading uk-heading-large uk-text-bold uk-text-center">Trever Taylor</h1>
        <p className="uk-text-center">A Full Stack Developer</p>
        <div className="uk-margin uk-flex uk-flex-center">
          <i class="fa-brands fa-square-github fa-4x"></i>
          <i class="fa-brands fa-square-facebook fa-4x uk-margin-left"></i>
          <i class="fa-brands fa-square-twitter uk-margin-left fa-4x"></i>
          <i class="fa-brands fa-linkedin fa-4x uk-margin-left"></i>
      </div>
      </div>

        </div>
        </div>

      </div>
      </main>
     </Layout>
    </>
  )
}

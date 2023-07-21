import React from 'react'
import Head from 'next/head'
import Main from './Main'
import About from './About'
import Category from './Category'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      <Head>
        <title>MittiKalakar</title>
      </Head>
      <Main/>
      <About/>
      <Category />
      <Contact />
      

    </div>
  )
}

export default Home
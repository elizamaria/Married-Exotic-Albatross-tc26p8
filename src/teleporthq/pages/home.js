import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Married Exotic Albatross</title>
        <meta property="og:title" content="Married Exotic Albatross" />
      </Helmet>
    </div>
  )
}

export default Home

import React from 'react'
import useClock from '@hooks/useClock'
import { REACT_SITE_URL } from '@constants/common'

import styles from './app.module.scss'

function App() {
  const time = useClock()

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src="/assets/logo.svg" className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/components/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href={REACT_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{time}</p>
      </header>
    </div>
  )
}

export default App

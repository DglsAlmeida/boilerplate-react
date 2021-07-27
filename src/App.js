import React from 'react';
import './index.css';
import styles from './app.module.scss';

const App = () => {
  return(
  <>
    <h1 className={styles.title}>Hello World</h1>
    <span className={styles.name}>Meu nome é Douglas</span>
  </>
  )
}

export default App;
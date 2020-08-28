import React from 'react'
import styles from './styles'
import spinner from './spinner.svg'

export default () => (
    <div className={styles.spinnerContainer}>
        <img src={spinner} alt="spinner" />
    </div>
)

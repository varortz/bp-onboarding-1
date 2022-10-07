import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Auto = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 3000)

  }) 

  return (
    <div className={styles.main}>
      <div className={styles.counter}>
        {count}
      </div>
    </div>
  )
}


export default Auto;
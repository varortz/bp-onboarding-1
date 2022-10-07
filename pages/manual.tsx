import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Manual = () => {

  const [count, setCount] = useState(0);



  return (
      <div>
          <Head>
              <title>Manual Counter</title> 
          </Head>

          <main className={styles.main}>

            <div className={styles.counter}>
              {count}
            </div>

            <div className={styles.manualBtns}>
              <button onClick={()=> setCount(count - 1)}>Decrement</button> 
              <button onClick={()=> setCount(count + 1)}>Increment</button> 
            </div>

          </main>
          

          <footer>

          </footer>


      </div>

        
     
        

  )


}

export default Manual;
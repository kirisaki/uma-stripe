import {useState} from 'react'
import styles from './Panel.module.css'

function Panel() {
  const [visible, setVisible] = useState(true)
  return (
    <div className={`${styles.panel} ${visible ? '' : styles.close}`}>
      <button onClick={() => visible ? setVisible(false) : setVisible(true)} className={styles.toggle}>
        {visible
          ? 'close'
          : 'open'
        }
      </button>
      <h1>uma-stripe</h1>
      nyaan
    </div>
  )
}

export default Panel

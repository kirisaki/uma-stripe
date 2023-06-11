import {useState} from 'react'
import Characters from './Characters'
import styles from './Panel.module.css'

function Panel() {
  const [visible, setVisible] = useState(true)
  return (
    <div className={`${styles.panel} ${visible ? '' : styles.close}`}>
      <span onClick={() => visible ? setVisible(false) : setVisible(true)} className={styles.toggle}>
        {visible
          ? '⇩ hide'
          : '⇧ show'
        }
      </span>
      <Characters />
    </div>
  )
}

export default Panel

import styles from './ColorPicker.module.css'

function ColorPicker(){
  return(
    <ul className={styles.picker}>
      <li>R <input type='range' name='picker_r' min={0} max={255} className={styles.slider} /></li>
    </ul>
  )
}

export default ColorPicker

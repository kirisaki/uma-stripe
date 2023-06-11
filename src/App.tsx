import styles from './App.module.css'
import Panel from './components/Panel'
import Stripe from './components/Stripe'

function App() {
  return (
    <div className={styles.container}>
      <Panel />
      <Stripe />
    </div>
  )
}

export default App

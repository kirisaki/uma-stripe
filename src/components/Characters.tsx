import characters from '../characters'

function Characters(){
  return (
    <>
      <input list='characters_list' />
      <datalist id='characters_list'>
        {Object.entries(characters).map(kv => <option value={kv[0]} />)}
      </datalist>
    </>
  )
}

export default Characters

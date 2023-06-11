import characters from '../characters'

function Characters(){
  return (
    <>
      <input list='characters_list' placeholder='キャラ名を入力してください' />
      <datalist id='characters_list'>
        {Object.keys(characters).map(k => <option key={k} value={k} />)}
      </datalist>
    </>
  )
}

export default Characters

// import all necessary dependencies
import { useEffect, useState } from 'react'
import './styles.css'
import Title from './Title.js'
import Entry from './Entry.js'
import Info from './info.js'
import { getCharacter } from './api.js'
import Dancing from './Dancing.gif'

//main app content
export default function App() {
  //varaibles for name, data, loading, and error
  const [name, setName] = useState('')
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  //effect to get character data
  useEffect(() => {
    if (!name) {
      return
    }

    async function fetchData() {
      try {
        const character = await getCharacter(name)
        setData(character)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    
    //set the states before fetching the data
    setLoading(true)
    setData(null)
    setError(null)
    fetchData()
  }, [name])

  //the 'html' of the app
  return (
    <div className="App">
      <Title text="Star Wars Characters" />
      <Entry action={setName}/>

      {loading && <div className="loader"></div>}

      {error ? <span>Something went wrong.</span> : <Info name={name} data={data} />}
    </div>
  )
}
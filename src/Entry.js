import { useState } from 'react'
//this is to handle the users input
export default function Entry({ action }) {
  const [name, setName] = useState('')

  //handlesform submission
  const handleSubmit = e => {
    e.preventDefault()
    action(name)
    setName('')
  }
  //the 'html' for the submission box
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Character'/>
    </form>
  )
}

import { useState } from 'react'

const Numbers = (props) => {
  return (
    <div>
      <h2>Numbers</h2>
      {props.numbers.map(number => <Number key={number.name} person={number.name} /> )}
    </div>

  )
}

const Number = (props) => {
  return (
    <p>{props.person}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewNumber = (event) => {
    event.preventDefault()
    const isNew = persons.map(person => person.name).includes(newName)
    if (isNew) {
      alert(newName + ' is already added to phonebook')
    } else {
      const numberObject = {
        name: newName
      }
      setPersons(persons.concat(numberObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers numbers={persons}/>
    </div>
  )

}

export default App
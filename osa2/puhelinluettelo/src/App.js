import { useState } from 'react'

const Numbers = (props) => {
  return (
    <div>
      <h2>Numbers</h2>
      {props.persons.map(person => <Number key={person.name} person={person} /> )}
    </div>

  )
}

const Number = (props) => {
  return (
    <p>{props.person.name} {props.person.number}</p>
  )
}

const Filter = ({showAll, handleFilterChange}) => {
  return (
    <div>
      <p>filter shown with <input value={showAll} onChange={handleFilterChange}/></p>
    </div>
  )
}

const NewContact = ({addNewPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const isNew = persons.map(person => person.name).includes(newName)
    if (isNew) {
      alert(newName + ' is already added to phonebook')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      setShowAll('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setShowAll(event.target.value)
  }

  const numbersToShow = showAll === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter showAll={showAll} handleFilterChange={handleFilterChange} />

      <h2>add new contact</h2>
      <NewContact addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Numbers persons={numbersToShow}/>
    </div>
  )

}

export default App
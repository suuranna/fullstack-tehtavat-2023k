import axios from 'axios'
import { useState, useEffect } from 'react'
import personService from './services/persons'

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
    <div>
      <p>{props.person.name} {props.person.number}</p>
      <button onClick={() => props.removePerson(props.person.id)}>delete</button>
    </div>
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
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      console.log(personObject)
      personService
        .create(personObject)
        .then(response => {
          console.log(response)
        })
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

  const removePerson = (id) => {
    if (window.confirm('Delete person with id ' + id)) {
      personService.remove(id)
      personService
        .getAll()
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response.data))
        })
    }
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
      <h2>Numbers</h2>
      <div>
        {numbersToShow.map(person => 
          <Number 
            key={person.id} 
            person={person} 
            removePerson={() => removePerson(person.id)}/>
        )}
      </div>
    </div>
  )

}

export default App
import React from 'react'
import Person from './Person'

function List() {
    const names = ['Bruce', 'Clark','Diana','Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Daina',
            age: 25,
            skill: 'Php'
        },
        {
            id: 3,
            name: 'john',
            age: 35,
            skill: 'C++'
        },
        {
            id: 4,
            name: 'sinha',
            age: 40,
            skill: 'java'
        },
        {
            id: 5,
            name: 'taimur',
            age: 22,
            skill: 'jsx'
        }
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
     const personList = persons.map(person => <Person key={person.name} person={person}></Person> )
    // const personList = persons.map(person => <person person={person} />)   
    // <h2>I am {person.name}. I am {person.age} years old. I know {person.skill} </h2> 
  return (
    <div>         
         {
            // personList   
            nameList         
         }
    </div>
  )
}

export default List
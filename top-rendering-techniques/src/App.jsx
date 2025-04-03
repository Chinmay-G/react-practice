import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  if(!props.animals) {
    return <div>Loading...</div>
  }

  if(props.animals.length === 0) {
    return <div>There are no animals in the List</div>
  }

  return (
    <ul>
      {
        // Conditionally rendering elements
        // props.animals.map(animal => {
        //   return animal.startsWith('L') ? <li key={animal}>{animal}</li> : null;
        // })
        // props.animals.map(animal => {
        //   return animal.startsWith('L') && <li key={animal}>{animal}</li>;
        // })
        
        props.animals.map(animal => {
          return <li key={animal}>{animal}</li>;
        })
      }
    </ul>
  )
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export default App

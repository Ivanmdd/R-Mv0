import './App.css'
import Cards from './components/Cards.jsx'
import About from './components/About'
import Detail from './components/Detail'
import styled from "styled-components"
import Nav from './components/Nav'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const Divmain = styled.div`
background: orange;`

function App() {
  const [characters, setCharacters] = useState([{
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    
}]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("::::", data);
        if (data.name) {
          let existe = characters.find((ch) => ch.id === data.id);
          if (existe) {
            alert("Elemento, ya existe");
          } 
          else { 
          setCharacters((oldChars) => [...oldChars, data]);
          }  }
          else { 
          window.alert('No hay personaje con ese ID');
        }
      } );
  } 

  function onClose(id) {
    setCharacters((oldChars) => { 
      return oldChars.filter((character) => character.id !== id)
      })
  }
  


  return (
    <Divmain>
          {/*<Card
          name={characters.name}
          species={characters.species}
          gender={characters.gender}
          image={characters.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          />*/}
      <hr />
      <div>
        <Nav onSearch={onSearch} />
        <Routes>
          <Route path="./home" element={<Cards />} />
          <Route path="./about" element={<About />} />
          <Route path="./detail/:id" element={<Detail />} />
        </Routes>
        <Cards
          onClose={onClose}
          characters={characters}
        />
      </div>
      <hr />
    </Divmain>
  )
}

export default App

import { useState } from "react";
import styled from "styled-components";
import "./SearchBar.css"

const Divbutton = styled.button`
  margin-top: 1px;
  margin-left: 600px;
  margin-botton: 50px;
`

export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState("");
   const handleChange = (evento) => {
      setCharacter(evento.target.value)
   }
   return (
      <Divbutton className="search" >
         <input type='search'
               onChange={handleChange}/>
         <button onClick={()=> onSearch(character)}>Agregar</button> 
      </Divbutton>
   );
}

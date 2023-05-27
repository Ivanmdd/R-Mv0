import Card from './Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export default function Cards({ characters, onClose }) {
   console.log(characters)
   return (   
      <div>
         {
            characters.map((character) => {
               return <Card
                  key = {character.id} // react pide una key de forma interna
                  name={
                     <Link to={`/detail/${character.id}`}>
                        <h5 className="card-title">{character.name}</h5>
                     </Link>} 
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => onClose(character.id)}
                  />
      } )
      }
      </div>
   )
}

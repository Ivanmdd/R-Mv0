import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id=character.id } = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [id]);

    return (
        <>
            <h1>Detail</h1>
            {
                character? (
                    <div>
                        <h2>Name:{character.name}</h2>
                        <h2>Status:{character.status}</h2>
                        <h2>Species:{character.species}</h2>
                        <h2>Gender:{character.gender}</h2>
                        <h2>Origin:{character.origin?.name}</h2>
                        <img src={character.image} alt={character.name} />
                    </div>
                )
                : ("")   
            }

        </>
    )
}
export default Detail;
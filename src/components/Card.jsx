import styled from "styled-components";

export const Divgallery = styled.div`
  background: beige;
  margin: 100px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  opacity: 0.8;
  &:hover{
   border: 1px solid #777;
   opacity: 1;
`
export const Divdesc = styled.div`
  padding: 15px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px
  `
export const Imagen = styled.img`
  width: 100%;
  height: auto;`

const H2d = styled.h2`
  font-style: normal;`

export default function Card({id, name, species, gender, image, onClose }) {
   return (
      <>
         <Divgallery>
            <Imagen src={image} alt={name} />
            <Divdesc>
               <h2>{name}</h2>
               <H2d>{species}</H2d>
               <H2d>{gender}</H2d>
            </Divdesc>
            <button onClick={()=>onClose(id)}>X</button>
         </Divgallery>
      </>   
   );
}

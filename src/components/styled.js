/* eslint-disable */
import styled from 'styled-components';



export const FlexGrid = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

export const SearchCard = styled.div`
width: 250px;
height: 100%;
margin: 0 15px 50px;

.img-wrapper {
 width: 250px ;
 border-radius: 30px;
 height: 320px;
 overflow: hidden;
 border: 1px solid #ddd;

 img {
   object-fit: cover;
   height: 100%;
   width: 100%;
 }

}

h1 {
  margin: 10px 0;
  font-size: 21px;
}

p {
  margin: 0;
}
`;
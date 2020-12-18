import styled from 'styled-components'

export const TitleBold = styled.h1`
  font-weight: bold;
  color: #f4f4f4;
  margin-top: 60px;
  margin-bottom:10px;
  margin-left:10px; 
  height: 50px;  
`;
export const TitleBold2 = styled.h1`
  font-weight: bold;
  color: #f4f4f4;
  font-size: 1em;
`;




export const Header = styled.div`
background:#000000;
width: 50%;
line-height: 50px;
text-align:center;
color: white;
position: absolute;
top: 30%; 
border-radius: 16px;
margin-top: -60px; 
margin-left: -50px; 
left: 30%;
box-shadow: 3px 3px 3px grey;
`;

export const Input = styled.input`
  color: #000000;
  font-size: 1em;
  type="password";
  border-radius: 16px;
  border: 0px solid white;
  margin: 0.40em;
  display: inline-block;
    padding: 0.40em;
  width:300px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px;
}
`;

export const InputData = styled.input`
  color: #000000;
  font-size: 1em;
  type="password";
  border-radius: 16px;
  border: 0px solid white;
  margin: 0.40em;
  display: inline-block;
    padding: 0.40em;
  width:100px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px;
}
`;

export const InputPass = styled.input.attrs(props => ({
  type: "password",
}))`
color: #000000;
font-size: 1em;
type="password";
border-radius: 16px;
border: 0px solid white;
margin: 0.40em;
display: inline-block;
  padding: 0.40em;
width:300px;
&:focus {
  outline: none;
  box-shadow: 0px 0px 0px;
}
`;

export const Botao = styled.div`
  color: #000000;
  border: 1px solid white;
  width:300px;
  margin-left: -50px; 
  left: 30%;
`;



export const Equation = styled.div`
  flex-direction: row;
`;


export const ColorB = styled.div`
background:#000000;
`;




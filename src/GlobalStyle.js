import styled, {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
   
    font-family: 'Poppins', sans-serif;
}

`;

export const Container= styled.div`
z-index:1;
width: 100%;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding-left: 50px;
padding-right: 50px;

@media screen and (max-width:991px){
    padding-left: 30px;
    padding-right: 30px;
}

`
export const Button = styled.button`
border-radius:4px;
background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
white-space: nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;

&:hover{
    transition:all 0.3s ease-out;
    background:#fff;
    background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};


}
@media screen and (max-width:768px){
  width: 100%;
}



`
export default GlobalStyle;
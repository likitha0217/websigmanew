import styled from "styled-components";

export const SuccessTextSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#4b59f7')};
padding:200px 100px 200px;
@media screen and (max-width:768px){
    padding:100px 50px 100px;
}


`
export const Head = styled.div`
text-align: center;
font-size: 35px;

`
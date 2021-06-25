import styled from "styled-components";
import img from '../../images/contact.svg';



export const ContactBannerSec = styled.div`
color: #fff;

padding:150px 180px;
background-size: cover;
background-image: url(${img});
@media screen and (max-width:768px){
  color: #fff;
    padding: 100px 30px 0;
  
    background-size: cover;
}


`
export const TextWrapper = styled.div`
max-width: 600px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width:768px){
  padding-bottom: 65px;

}
`

export const ContactBannerText = styled.h1`

font-size: 40px;
    line-height: 45px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;

color: ${({lightbannerText}) => (lightbannerText ? '#a9b3c1' : '#4b59f7')};


`



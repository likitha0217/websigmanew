import styled from "styled-components";
import img from '../../images/aboutbanner.svg';



export const AboutWebSec = styled.div`
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
export const AboutTextSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
padding:60px 10px 10px;



`
export const TextWrapper = styled.div`
max-width: 600px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width:768px){
  padding-bottom: 65px;

}
`
export const InfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;



`
export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex:1;
max-width: 50%;
flex-basis:50%;

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
}

`
export const AboutHead = styled.h1`

font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightAboutHead}) => (lightAboutHead ? '#a9b3c1' : '#4b59f7')};


`
export const AboutHeadTitle = styled.h1`

font-size: 40px;
line-height:45px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightAboutHeadTit}) => (lightAboutHeadTit ? '#fff' : '#101522')};


`

export const AboutSubTitle = styled.p`
max-width: 600px;
margin-bottom: 15px;
font-size: 30px;
line-height: 35px;
color: ${({lightsubtext}) => (lightsubtext ? '#a9b3c1' : '#1c2237')};


`

export const AboutDesc = styled.p`
max-width:100vw;
margin-bottom: 10px;
font-size: 16px;
line-height: 35px;
color: ${({lightaboutDesc}) => (lightaboutDesc ? '#a9b3c1' : '#1c2237')};


`
export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};


`

export const Img = styled.img`
padding-right: 0;
border:0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
@media screen and (max-width:768px){
  padding-bottom: 20px;
}
`
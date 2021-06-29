import styled from "styled-components";
import img from '../../images/appban.jpg';

export const AppBannerSec = styled.div`
color: #fff;

padding:100px 150px;
background-size: cover;
background-image: url(${img});
@media screen and (max-width:768px){
  color: #fff;
    padding: 100px 30px 0;
  
    background-size: cover;
}
`
export const AppBannerTextSec = styled.div`
color: #fff;

padding:70px 180px 0px;
background-size: cover;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
  color: #fff;
    padding: 100px 0px 0;
  
}
`
export const TextWrapperText = styled.div`
max-width: 1000px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width:768px){
  padding-bottom: 65px;

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

export const AppBannerText = styled.h1`

font-size: 40px;
    line-height: 45px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;

color: ${({lightBannerText}) => (lightBannerText ? '#a9b3c1' : '#4b59f7')};


`

export const AppBannerHead = styled.h1`

font-size: 40px;
    line-height: 45px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-align: center;

color: ${({lightBannerHead}) => (lightBannerHead ? '#a9b3c1' : '#4b59f7')};
@media screen and (max-width:768px){
  font-size: 35px;
  
}

`

export const AppBannerDesc = styled.p`
font-size: 14px;
line-height: 20px;
    letter-spacing: 1px;
    margin-bottom: 16px;
    text-align: center;

color: ${({lightBannerDesc}) => (lightBannerDesc ? '#a9b3c1' : '#4b59f7')};


`
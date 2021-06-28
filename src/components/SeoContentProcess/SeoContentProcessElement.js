import styled from "styled-components";

export const SeoContentProcessText = styled.div`
color: #fff;

padding:50px 200px;

background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
 padding: 50px 50px 0 50px;

}
`
export const SeoContentProcessSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
padding:20px 10px 10px;


`
export const TextWrapperText = styled.div`
max-width: 1000px;
padding-top:0;


@media screen and (max-width:768px){
  padding-bottom: 30px;

}
`
export const TextWrapper = styled.div`
max-width: 600px;
padding-top:0;
padding-bottom:10px;

@media screen and (max-width:768px){
  padding-bottom: 30px;

}
`
export const SeoContentProcessTop = styled.p`

color: ${({lightSeoProcessTop}) => (lightSeoProcessTop ? '#a9b3c1' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

font-weight: 600;


`
export const SeoContentProcessHead = styled.h1`

font-size: 40px;
line-height:45px;
letter-spacing: 1.4px;
margin-bottom: 16px;


color: ${({lightSeoProcessHead}) => (lightSeoProcessHead ? '#a9b3c1' : '#1c2237')};
@media screen and (max-width:768px){
    font-size: 25px;


}

`

export const SeoContentProcessDesc = styled.p`

color: ${({lightSeoProcessDesc}) => (lightSeoProcessDesc ? '#a9b3c1' : '#4b59f7')};
font-size: 15px;
line-height: 22px;
letter-spacing: 1.4px;
margin-bottom: 16px;

font-weight: 600;


`

export const SeoProcessTitle = styled.h1`
max-width: 600px;

font-size: 23px;
line-height: 26px;
color: ${({lightSeoTitle}) => (lightSeoTitle ? '#a9b3c1' : '#1c2237')};

margin: 20px auto 15px auto;
@media screen and (max-width:768px){
    font-size: 18px;

}

`

export const SeoProcesspara = styled.h1`
max-width: 600px;

font-size: 13px;
line-height: 20px;
color: ${({lightSeoPara}) => (lightSeoPara ? '#a9b3c1' : '#1c2237')};

margin: 20px auto 15px auto;
@media screen and (max-width:768px){
    font-size: 15px;

}

`
export const InfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};


`

export const InfoCol = styled.div`
margin-bottom: 5px;
padding-right: 15px;
padding-left: 15px;
flex:1;
max-width: 29%;
    margin-left: 37px;
flex-basis:30%;
margin-right: 10px;
margin-bottom: 90px;
border-radius: 7px;
box-shadow: 1px 1px 8px 1px #000;
background: #fff;

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
}

`
export const SeoWhole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:16px;
  margin-right: 10px;
  text-align:left;
  width:281px;
  box-sizing: border-box;
  color: #fff;
  
    border-radius: 5px;
    padding-bottom: 20px;
    
  @media screen and (max-width:768px){
        margin:0;
        padding:10px;
        width: 100%;
        max-width: 500px;

        
}


`
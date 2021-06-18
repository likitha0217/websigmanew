import styled from "styled-components";

export const ServiceSec = styled.div`
color: #fff;
padding:50px 0 10px 0; 
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};

`

export const SerInfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
//flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

`
export const SerInfoRow1 = styled.div`
display: flex;
margin:-50px -15px 20px -15px;
flex-wrap: wrap;
align-items: center;
//flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

`
export const SerInfoCol = styled.div`
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
export const SerTextWrapper = styled.div`
max-width: 540px;
padding-top:0;


@media screen and (max-width:768px){
  padding-bottom: 65px;

}
`

export const SerTopLine = styled.div`
color: ${({lightSerLine}) => (lightSerLine ? '#a9b3c1' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`

export const SerHeading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightSerHead}) => (lightSerHead ? '#f7f8fa' : '#1c2237')};
`






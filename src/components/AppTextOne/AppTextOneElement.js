import styled from "styled-components";

export const AppTextOneSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
padding:60px 10px 60px;



`
export const TextWrapper = styled.div`
max-width: 600px;
padding-top:0;
padding-bottom:60px;
background: #eae8e8;
    padding: 20px;

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
export const InfoCol = styled.div`
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
export const AppTextTop = styled.h1`

font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightappTop}) => (lightappTop ? '#a9b3c1' : '#4b59f7')};


`
export const AppTextHead = styled.h1`

font-size: 38px;
line-height:45px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightappTop}) => (lightappTop ? '#fff' : '#101522')};


`

export const AppTextDesc = styled.p`
max-width:100vw;
margin-bottom: 10px;
font-size: 16px;
line-height: 35px;
color: ${({lightappDesc}) => (lightappDesc ? '#a9b3c1' : '#1c2237')};


`
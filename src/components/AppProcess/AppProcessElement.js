import styled from "styled-components";

export const AppProcessSec = styled.div`
color: #fff;

padding:10px 135px;

background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
 padding: 50px 50px 0 50px;

}
`
export const AppProcessText = styled.div`
color: #fff;

padding:50px 135px;

background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
 padding: 50px 50px 0 50px;

}
`
export const TextWrapper = styled.div`
max-width: 600px;
padding-top:0;
padding-bottom:10px;
background: #eae8e8;
    padding: 10px;

@media screen and (max-width:768px){
  padding-bottom: 30px;

}
`

export const AppProcessTitle = styled.h1`

font-size:14px;
line-height:20px;
margin-left: 50px;
padding-top: 10px;
letter-spacing: 1.4px;
margin-bottom: 16px;
text-align: center;

color: ${({lightAppTitle}) => (lightAppTitle ? '#a9b3c1' : '#1c2237')};
@media screen and (max-width:768px){
    font-size: 15px;
 padding-top: 20px;
 margin: 0 44px;

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
max-width: 23%;
    
    flex-basis: 30%;
    margin-right: 20px;
    margin-bottom: 90px;


@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
    background: #eae8e8;
}

`
export const AppWhole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:16px;
  margin-right: 10px;
  text-align:left;
  width:230px;
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

export const ImgWrapper = styled.div`
max-width: 100px;
display: flex;
padding-top: 30px;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
margin: 0 38px;

`
export const Img = styled.img`
padding-right: 0;
border:0;
max-width: 100%;
vertical-align: middle;
display: inline-block;

   

`
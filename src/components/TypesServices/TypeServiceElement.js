import styled from "styled-components";

export const TypeServiceSec = styled.div`
color: #fff;
padding:10px 0 100px 0; 
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};

`

export const InfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
//flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};

`

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex:1;
max-width: 30%;
flex-basis:30%;

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
}
`
export const TextWrapper = styled.div`

padding-top:0;


@media screen and (max-width:768px){
  padding-bottom: 65px;

}
`

export const ServiceOffered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:16px;
  margin-right: 10px;
  text-align:left;
  width:340px;
  box-sizing: border-box;
  color: #fff;
  background: #fff;
    border-radius: 5px;
    padding-bottom: 20px;
    &:hover {
    /* width: 23vw; */
       box-shadow: 0.5px 1px 3px 4px;
    transition: 0.5s ease-out;
    }
  @media screen and (max-width:768px){
        margin:0;
        padding:10px;
        width: 100%;
        max-width: 500px;

        
}

`

export const ServiceOfferedImage = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`

export const SericeOfferedHeading = styled.div`
margin-bottom: 24px;
font-size: 30px;
line-height: 1.1;
font-weight: 600;
padding-top: 18px;
padding-left: 18px;
color: ${({lightOfferedHead}) => (lightOfferedHead ? '#f7f8fa' : '#1c2237')};


`

export const ServiceOfferedDesc = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;

padding-left: 18px;
font-weight: 500;
color: ${({lightOfferedDesc}) => (lightOfferedDesc ? '#a9b3c1' : '#1c2237')};

`

export const Img = styled.img`
padding-right: 0;
border:0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`

export const ServiceButton = styled.button `
margin: 0 auto;

`
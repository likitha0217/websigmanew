import styled from "styled-components";

export const ServiceTypesec = styled.div`
color: #fff;

padding:50px 200px;

background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
 padding: 50px 50px 0 50px;

}
`
export const ServiceTypes = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
padding:20px 10px 10px;


`
export const TextWrapperType = styled.div`
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
export const ServiceTypeTop = styled.p`

color: ${({lightServiceTop}) => (lightServiceTop ? '#a9b3c1' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
text-align: center;
font-weight: 600;


`
export const ServiceTypeHeads = styled.h1`

font-size: 40px;
line-height:45px;
letter-spacing: 1.4px;
margin-bottom: 16px;
text-align: center;

color: ${({lightServiceHead}) => (lightServiceHead ? '#a9b3c1' : '#1c2237')};
@media screen and (max-width:768px){
    font-size: 25px;


}

`

export const ChooseSerTitle = styled.p`
max-width: 600px;

font-size: 30px;
line-height: 35px;
color: ${({lightSerTiitle}) => (lightSerTiitle ? '#a9b3c1' : '#1c2237')};

margin: 20px auto 15px auto;
@media screen and (max-width:768px){
    font-size: 25px;

}

`

export const Chooseser = styled.p`
max-width:100vw;
margin: 0 auto;
text-align: center;
font-size: 16px;
line-height: 35px;
color: ${({lightSer}) => (lightSer ? '#a9b3c1' : '#1c2237')};


`
export const InfoRow = styled.div`
display: flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};


`

export const ServiceButton = styled.button `
margin: 20px auto;

`
export const InfoCol = styled.div`
margin-bottom: 5px;
padding-right: 15px;
padding-left: 15px;
flex:1;
max-width: 30%;
   
    flex-basis: 30%;
    margin-right: 10px;
    margin-bottom: 90px;
    border-radius: 7px;
    box-shadow: 1px 1px 8px 1px #000;
    margin-left: 31px;

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
}

`
export const ServiceWhole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:16px;
  margin-right: 10px;
  text-align:left;
  width:350px;
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
max-width: 555px;
display: flex;
padding-top: 30px;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};


`
export const Img = styled.img`
padding-right: 0;
border:0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
margin: 0 139px;
   
@media screen and (max-width:768px){
    margin: 0 120px;
   

        
}
`
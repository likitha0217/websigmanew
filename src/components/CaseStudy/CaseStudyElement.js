import styled from "styled-components";

export const CaseStudySec = styled.div`
padding:50px;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
color:#fff;

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
max-width: 100%;
flex-basis:100%;

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:center;
}

`
export const InfoCol1 = styled.div`
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

export const CaseHeading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
text-align: center;
padding-top: 18px;
padding-left: 18px;
color: ${({lightcaseHead}) => (lightcaseHead ? '#f7f8fa' : '#1c2237')};

`
export const CaseStudyImage = styled.div`
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
max-height: 120vh;
`
export const CaseStudyCon = styled.div`
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
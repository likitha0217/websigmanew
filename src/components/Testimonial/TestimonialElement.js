import styled from "styled-components";



export const TestimonialSec = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
padding:120px 10px 70px;

`
export const TextWrapper= styled.div`
max-width: 500px;
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
export const TestTop = styled.div`
color: ${({lightTop}) => (lightTop ? '#a9b3c1' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

`
export const TestimonialHead = styled.h1`


font-size: 18px;
    line-height: 25px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightTestimonialHead}) => (lightTestimonialHead ? '#101522' : '#4b59f7')};


`
export const TestimonialAuthor = styled.h1`

font-size: 12px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lightTestimonailAuthor}) => (lightTestimonailAuthor ? '#a9b3c1' : '#4b59f7')};


`
export const TestHeading = styled.h1`

font-size: 40px;
line-height:45px;
letter-spacing: 1.4px;
margin-bottom: 16px;

color: ${({lighttesthead}) => (lighttesthead ? '#fff' : '#101522')};


`

export const ImgWrapper = styled.div`
max-width: 400px;
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
import styled from "styled-components";
import {Link} from 'react-router-dom'



export const FooterContainer = styled.div`
background-color: #101522;
padding: 4rem 0 0 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const FooterSubscription = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
text-align:center;
padding: 14px;
color: #fff;
background: #4b59f7;
width: 100%;
`

export const FooterSubHeading = styled.div`
font-size: 24px;

`


export const FooterSubText = styled.div`

font-size: 20px;


`

export const FooterLinkContainer = styled.div`
width: 100%;
min-width: 1000px;
display: flex;
justify-content: center;
@media screen and (max-width:768px){
   padding-top: 32px;
   min-width: 400px;
}
`   
 export const FooterLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width:768px){
   flex-direction:column;
}

 `
 export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:16px;
  text-align:left;
  width:300px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width:768px){
        margin:0;
        padding:10px;
        width: 100%;
        max-width: 375px;
}
`
export const FooterLinkTitle = styled.h2`
margin-bottom: 16px;

`
export const FooterLink = styled(Link)`
margin-bottom: 0.5rem;
color: #fff;
text-decoration: none;

&:hover{
    color:#0467fb;
    transition: 0.3s ease-out;
}

`

export const SocialMedia = styled.section`

width: 100%;
background-color: #4b59f7;

`
export const SocialMediaWrapper = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
max-width: 1000px;
margin:20px auto 0 auto;

@media screen and (max-width:768px){
    flex-direction: column;
}


`



export const WebsiteRight = styled.div`
color: #fff;
margin-bottom: 16px;

`

export const SocialIcons = styled.div`
   display: flex;
   justify-content:space-between;
   align-items: center;
   width:230px ;
`

export const SocialIconLinks = styled.div`

 color: #fff;
 font-size: 24px;
`
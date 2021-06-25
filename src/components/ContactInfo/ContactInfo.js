import React from 'react'
import { Container } from '../../GlobalStyle'
import '../ContactInfo/Style.css'
import { ContactInfoSec,
InfoRow,
InfoCol,
TextWrapper,
Img,
ImgWrapper } from './ContactInfoElement'
const ContactInfo = ({lightBg,alt,img,start}) => {
    return (
        <>

         <ContactInfoSec lightBg={lightBg}>
             <Container>
                 <InfoRow>
                     <InfoCol>
                         <TextWrapper>
                             <h1>Enquiry Now</h1>
                         <form name="contact-web" 
      method="POST"
      action="/success/"
    data-netlify="true">
        <input type="hidden" name="form-name" value="contact-web" /><br/><br/>
     <input type="text" placeholder="First Name" name="name" /><br/><br/>
     <input type="email" placeholder="Email" name="email"/><br/><br/>
     <input type="tel" placeholder="Phone No" name="phone"/><br/><br/>
     <textarea placeholder="Any Comment" name="message"/><br/><br/>
     <button class="sub" type="submit">Submit</button>
</form>  
                         </TextWrapper>
                     </InfoCol>
                     <InfoCol>
                           <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                     </InfoCol>
                 </InfoRow>
             </Container>
         </ContactInfoSec>
            
        </>
    )
}

export default ContactInfo

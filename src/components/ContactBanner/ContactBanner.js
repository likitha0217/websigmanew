import React from 'react'
import { Container } from '../../GlobalStyle'
import { ContactBannerSec,
TextWrapper,
ContactBannerText } from './ContactBannerElement'

const ContactBanner = ({lightbannerText,contactBannerText}) => {
    return (
        <>
        <ContactBannerSec>
            <Container>
                <TextWrapper>
                    <ContactBannerText lightbannerText={lightbannerText}>{contactBannerText}</ContactBannerText>
                </TextWrapper>


                </Container>
        </ContactBannerSec>
            
        </>
    )
}

export default ContactBanner

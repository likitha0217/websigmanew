import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {FooterContainer,
    
FooterLinkContainer,
FooterLinkWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrapper,

WebsiteRight,

SocialIconLinks,
SocialIcons
 } from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>

            
            <FooterLinkContainer>
                <FooterLinkWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Websigma</FooterLinkTitle>
                    
We love to sit and ideate with young founders and entrepreneurs who come with lot of dreams and ambitions which inspires us to provide best services

                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Links</FooterLinkTitle>
                     <FooterLink to='/'>About</FooterLink>
                     <FooterLink to='/'>Services</FooterLink>
                     <FooterLink to='/'>Product</FooterLink>
                     <FooterLink to='/'>Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Seo</FooterLinkTitle>
                     <FooterLink to='/'>About</FooterLink>
                     <FooterLink to='/'>Services</FooterLink>
                     <FooterLink to='/'>Product</FooterLink>
                     <FooterLink to='/'>Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Address</FooterLinkTitle>
                    Krishna Krupa,<br/>
1032,3rd Floor13th Cross road,<br/>
BSK 2nd Stage,Bangalore,<br/>
Karnataka - 560070
                    </FooterLinkItems>

                </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    
                    <WebsiteRight>
                    © 2021 Websigma. All rights reserved
                    </WebsiteRight>
                    <SocialIcons>
                        <SocialIconLinks href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook/>

                        </SocialIconLinks>
                        <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>

                        </SocialIconLinks>
                        <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                            <FaYoutube/>

                        </SocialIconLinks>
                    </SocialIcons>
                          
                                    </SocialMediaWrapper>
            </SocialMedia>
            </FooterContainer>



            
    
    )
}

export default Footer

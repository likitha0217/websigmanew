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
                    Lorem Ipsum has been the industrys standard dummy text
                    Lorem Ipsum has been the industrys standard dummy text

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
                    <FooterLinkTitle>Follow Us</FooterLinkTitle>
                     <FooterLink to='/'>About</FooterLink>
                     <FooterLink to='/'>Services</FooterLink>
                     <FooterLink to='/'>Product</FooterLink>
                     <FooterLink to='/'>Contact</FooterLink>
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

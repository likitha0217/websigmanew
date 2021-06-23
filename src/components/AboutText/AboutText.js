import React from 'react'
import { Container } from '../../GlobalStyle'
import { 
TextWrapper,
AboutHead,
AboutSubTitle,
AboutDesc,
AboutTextSec,
ImgWrapper,
Img,
InfoColumn,
InfoRow
} from './AboutTextElement'

const AboutText = ({lightBg,lightAboutHead,lightsubtext, aboutHead, aboutSubTitle,lightaboutDesc,aboutDesc,img,alt,start}) => {
    return (
        <>
            
        <AboutTextSec lightBg={lightBg}>
        <Container>
        <InfoRow>
        <InfoColumn>
 
 
 <ImgWrapper start={start}>
                 <Img src={img} alt={alt} />
             </ImgWrapper>
 </InfoColumn>
                        <InfoColumn>
                <TextWrapper>
                <AboutHead lightAboutHead={lightAboutHead}>{aboutHead}</AboutHead>
                <AboutSubTitle lightsubtext={lightsubtext}>{aboutSubTitle}</AboutSubTitle>
                <AboutDesc lightaboutDesc={lightaboutDesc}>{aboutDesc}</AboutDesc>
                </TextWrapper>
                </InfoColumn>
                
                </InfoRow>
            </Container>
        </AboutTextSec>
            
        </>
    )
}


export default AboutText

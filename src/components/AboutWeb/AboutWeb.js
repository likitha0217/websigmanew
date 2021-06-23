import React from 'react'
import { Container } from '../../GlobalStyle'
import { AboutWebSec,
TextWrapper,
AboutHead,
AboutSubTitle,
AboutDesc,
AboutTextSec,
ImgWrapper,
Img,
InfoColumn,
InfoRow,
AboutHeadTitle
} from './AboutWebElement'

const AboutWeb = ({lightBg,lightAboutHead,lightsubtext, aboutHead, aboutSubTitle,lightaboutDesc,aboutDesc,img,alt,start, lightAboutHeadTit, aboutHeadTitle}) => {
    return (
        <>

        <AboutWebSec>
            <TextWrapper>
               <AboutHeadTitle lightAboutHeadTit={lightAboutHeadTit}>{aboutHeadTitle}</AboutHeadTitle>
            </TextWrapper>
            </AboutWebSec>
            
        <AboutTextSec lightBg={lightBg}>
        <Container>
        <InfoRow>
                        <InfoColumn>
                <TextWrapper>
                <AboutHead lightAboutHead={lightAboutHead}>{aboutHead}</AboutHead>
                <AboutSubTitle lightsubtext={lightsubtext}>{aboutSubTitle}</AboutSubTitle>
                <AboutDesc lightaboutDesc={lightaboutDesc}>{aboutDesc}</AboutDesc>
                </TextWrapper>
                </InfoColumn>
                <InfoColumn>
 
 
                <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                </InfoColumn>
                </InfoRow>
            </Container>
        </AboutTextSec>
            
        </>
    )
}

export default AboutWeb

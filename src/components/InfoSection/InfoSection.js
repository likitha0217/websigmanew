import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container } from '../../GlobalStyle'
import {InfoSec,
InfoRow,
InfoColumn,
TextWrapper,
TopLine,
Heading,
SubTitle,
Img,
ImgWrapper} from './InfoSectionElement'

const InfoSection = ({lightBg, imgStart,lightTopLine,lightText,lightTextDesc,buttonLabel,topLine,heading,description,primary,img, start, alt}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                               <TopLine lightTopLine={lightTopLine}>{topLine}

                               </TopLine>

                               <Heading lightText={lightText}>{heading}</Heading>
                               <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                               <Link to='/contact'>
                                   <Button big fontBig primary={primary}>
                                       {buttonLabel}
                                   </Button>
                               </Link>
                            </TextWrapper>

                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
 
                    </InfoRow>
                </Container>

            </InfoSec>
        </>
    )
}

export default InfoSection

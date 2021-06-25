import React from 'react'
import { Container } from '../../GlobalStyle'
import { ServiceTextSec,
InfoColumn,
InfoRow,
TextWrapper,
ServiceTop,
ServiceHead,
ServiceDesc,
ImgWrapper,
Img } from './ServiceTextElement'

const ServiceText = ({lightServiceTop,lightServiceHead,lightServiceDesc,serviceTextTop,serviceTextHead,serviceTextDesc,img,alt,start}) => {
    return (
        <>
        <ServiceTextSec>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <ServiceTop lightServiceTop={lightServiceTop}>{serviceTextTop}</ServiceTop>
                            <ServiceHead lightServiceHead={lightServiceHead}>{serviceTextHead}</ServiceHead>
                            <ServiceDesc lightServiceDesc={lightServiceDesc}>{serviceTextDesc}</ServiceDesc>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        
        </ServiceTextSec>
            
        </>
    )
}

export default ServiceText

import React from 'react'
import { Container } from '../../GlobalStyle'
import { WebServicesSec,
InfoCol,
InfoRow,
TextWrapper,
WebSerDesc,
WebSerHead,
Img,
ImgWrapper } from './WebServicesElement'

const WebServices = ({lightBg,imgStart, lightWebSerHead,webSerHead,lightWebSerDesc,webSerDesc, img,start,alt}) => {
    return (
        <>
        <WebServicesSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoCol>
                        <TextWrapper>
                            <WebSerHead lightWebSerHead={lightWebSerHead}>{webSerHead}</WebSerHead>
                            <WebSerDesc lightWebSerDesc={lightWebSerDesc}>{webSerDesc}</WebSerDesc>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>
            </Container>
        </WebServicesSec>
            
        </>
    )
}

export default WebServices

import React from 'react'
import { Container } from '../../GlobalStyle'
import { SeoContentSec,
InfoRow,
InfoCol,
Img,
ImgWrapper,
TextWrapper,
SeoContentDesc,
SeoContentHead,
SeoContentTop } from './SeoContentElement'

const SeoContent = ({lightBg, imgStart, lightSeoContentTop,seoContentTop, lightSeoContentHead, seoContentHead, lightSeoContentDesc,seoContentDesc , start, img, alt}) => {
    return (
        <>
        <SeoContentSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoCol>
                        <TextWrapper>
                            <SeoContentTop lightSeoContentTop={lightSeoContentTop}>{seoContentTop}</SeoContentTop>
                            <SeoContentHead lightSeoContentHead={lightSeoContentHead}>{seoContentHead}</SeoContentHead>
                            <SeoContentDesc lightSeoContentDesc={lightSeoContentDesc}>{seoContentDesc}</SeoContentDesc>
                            
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoCol>


                </InfoRow>

            </Container>
        </SeoContentSec>
            
        </>
    )
}

export default SeoContent

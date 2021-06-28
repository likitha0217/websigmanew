import React from 'react'
import { Container } from '../../GlobalStyle'
import { SeoContentBannerSec,
TextWrapper,
SeoContentHead,
SeoCotentTextSec,
SeoContentText,
SeoContentDesc,
TextWrapperText } from './SeoContentBannerElement'

const SeoContentBanner = ({lightseoHead,seoContentHead, lightseoText,lightseoDesc,lightBg, seoTextHead,seoTextDesc }) => {
    return (
        <>
        <SeoContentBannerSec>
            <Container>
                <TextWrapper>
                    <SeoContentHead lightseoHead={lightseoHead}>{seoContentHead}</SeoContentHead>
                </TextWrapper>
            </Container>
        </SeoContentBannerSec>

        <SeoCotentTextSec lightBg={lightBg}>
            <Container>
                <TextWrapperText>
                    <SeoContentText lightseoText={lightseoText}>{seoTextHead}</SeoContentText>
                    <SeoContentDesc lightseoDesc={lightseoDesc}>{seoTextDesc}</SeoContentDesc>
                </TextWrapperText>
            </Container>
        </SeoCotentTextSec>
            
        </>
    )
}

export default SeoContentBanner

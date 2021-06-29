import React from 'react'
import { Container } from '../../GlobalStyle'
import { WebBannerTextSec,
WebBannerSec,
TextWrapper,
TextWrapperText,
WebBannerDesc,
WebBannerHead,
WebBannerTop,
WebBannerTitle } from './WebBannerElement'

const WebBanner = ({lightBg,lightWebBannerTitle,BannerTitle,lightWebBannerTop, BannerTop, lightWebBannerHead,BannerHead,lightWebBannerDesc,BannerDesc}) => {
    return (
        <>
        <WebBannerSec lightBg={lightBg}>
            <Container>
                <TextWrapper>
                    <WebBannerTitle lightWebBannerTitle={lightWebBannerTitle}>{BannerTitle}</WebBannerTitle>

                </TextWrapper>
            </Container>
        </WebBannerSec>

        <WebBannerTextSec lightBg={lightBg}>
            <Container>
                <TextWrapperText>
                    <WebBannerTop lightWebBannerTop={lightWebBannerTop}>{BannerTop}</WebBannerTop>
                    <WebBannerHead lightWebBannerHead={lightWebBannerHead}>{BannerHead}</WebBannerHead>
                    <WebBannerDesc lightWebBannerDesc={lightWebBannerDesc}>{BannerDesc}</WebBannerDesc>

                </TextWrapperText>
            </Container>
        </WebBannerTextSec>


            
        </>
    )
}

export default WebBanner

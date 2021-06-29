import React from 'react'
import { Container } from '../../GlobalStyle'
import { AppBannerTwoSec,
InfoRow,
InfoCol,
TextWrapper,
AppBannerTwoDesc,
AppBannerTwoHead,
AppBannerTwoTop,
Img,
ImgWrapper } from './AppBannerTwoElement'

const AppBannerTwo = ({lightBg, lightBannerTop, appBanTop, lightBannerHead, appBanHead, lightBannerDesc, appBanDesc, img, start, alt}) => {
    return (
        <>
        <AppBannerTwoSec lightBg={lightBg}>
            <Container>
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <AppBannerTwoTop lightBannerTop={lightBannerTop}>{appBanTop}</AppBannerTwoTop>
                            <AppBannerTwoHead lightBannerHead={lightBannerHead}>{appBanHead}</AppBannerTwoHead>
                            <AppBannerTwoDesc lightBannerDesc={lightBannerDesc}>{appBanDesc}</AppBannerTwoDesc>
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
        </AppBannerTwoSec>
            
        </>
    )
}

export default AppBannerTwo

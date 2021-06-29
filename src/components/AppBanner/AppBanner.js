import React from 'react'
import { Container } from '../../GlobalStyle'
import { AppBannerSec,
AppBannerTextSec,
TextWrapper,
TextWrapperText,
AppBannerText,
AppBannerHead,
AppBannerDesc
} from './AppBannerElement'

const AppBanner = ({lightBg, lightBannerText,appBannerText, lightBannerHead, appBannerHead, lightBannerDesc, appBannerDesc }) => {
    return (
        <>
        <AppBannerSec>
            <Container>
               <TextWrapper>
                    <AppBannerText lightBannerText={lightBannerText}>{appBannerText}</AppBannerText>
               </TextWrapper>
            </Container>
        </AppBannerSec>

        <AppBannerTextSec lightBg={lightBg}>
            <Container>
                <TextWrapperText>
                    <AppBannerHead lightBannerHead={lightBannerHead}>{appBannerHead}</AppBannerHead>
                    <AppBannerDesc lightBannerDesc={lightBannerDesc}>{appBannerDesc}</AppBannerDesc>
                </TextWrapperText>
            </Container>
        </AppBannerTextSec>
            
        </>
    )
}

export default AppBanner

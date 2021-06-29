import React from 'react'
import { Container } from '../../GlobalStyle'
import { AppTextOneSec,
InfoRow,
InfoCol,
TextWrapper,
AppTextTop,
AppTextHead,
AppTextDesc } from './AppTextOneElement'

const AppTextOne = ({lightBg, lightappTop, appTextTop1,appTextTop,lightappHead, appTextHead, appTextHead1, lightappDesc, appTextDesc, appTextDesc1}) => {
    return (
        <>
        <AppTextOneSec lightBg={lightBg}>
            <Container>
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <AppTextTop lightappTop={lightappTop}>{appTextTop}</AppTextTop>
                            <AppTextHead lightappHead={lightappHead}>{appTextHead}</AppTextHead>
                            <AppTextDesc lightappDesc={lightappDesc}>{appTextDesc}</AppTextDesc>
                        </TextWrapper>
                    </InfoCol>

                    <InfoCol>
                        <TextWrapper>
                            <AppTextTop lightappTop={lightappTop}>{appTextTop1}</AppTextTop>
                            <AppTextHead lightappHead={lightappHead}>{appTextHead1}</AppTextHead>
                            <AppTextDesc lightappDesc={lightappDesc}>{appTextDesc1}</AppTextDesc>
                        </TextWrapper>
                    </InfoCol>

                </InfoRow>

            </Container>
        
        </AppTextOneSec>
            
        </>
    )
}

export default AppTextOne

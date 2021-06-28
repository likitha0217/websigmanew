import React from 'react'
import { Container } from '../../GlobalStyle'
import { SeoContentProcessSec,
SeoContentProcessText,
TextWrapperText,
TextWrapper,
SeoContentProcessTop,
SeoContentProcessHead,
SeoContentProcessDesc,
InfoCol,
InfoRow,

SeoProcessTitle,
SeoProcesspara,
SeoWhole
 } from './SeoContentProcessElement'
const SeoContentProcess = ({lightBg, lightSeoProcessTop, seoProcessTop, lightSeoProcessHead, seoProcessHead, lightSeoProcessDesc, seoProcessDesc, lightSeoTitle,seoProcessTitle1,seoProcessTitle2,seoProcessTitle3,lightSeoPara, seoProcessPara1, seoProcessPara2,seoProcessPara3}) => {
    return (
        <>
        <SeoContentProcessText lightBg={lightBg}>
         <TextWrapperText>
             <SeoContentProcessTop lightSeoProcessTop={lightSeoProcessTop}>{seoProcessTop}</SeoContentProcessTop>
             <SeoContentProcessHead lightSeoProcessHead={lightSeoProcessHead}>{seoProcessHead}</SeoContentProcessHead>
             <SeoContentProcessDesc lightSeoProcessDesc={lightSeoProcessDesc}>{seoProcessDesc}</SeoContentProcessDesc>

         </TextWrapperText>
        </SeoContentProcessText>

        <SeoContentProcessSec>
            <Container>
                
            <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <SeoWhole>
                                                                     
                    


                            <SeoProcessTitle lightSeoTitle={lightSeoTitle}>{seoProcessTitle1}</SeoProcessTitle>
                            <SeoProcesspara lightSeoPara={lightSeoPara}>{seoProcessPara1}</SeoProcesspara>
                        
                            </SeoWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                            <SeoWhole>
                                                                     
                                 
                            <SeoProcessTitle lightSeoTitle={lightSeoTitle}>{seoProcessTitle2}</SeoProcessTitle>
                            <SeoProcesspara lightSeoPara={lightSeoPara}>{seoProcessPara2}</SeoProcesspara>
                        
                            </SeoWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                            <SeoWhole>
                                                                     
                                  

                            <SeoProcessTitle lightSeoTitle={lightSeoTitle}>{seoProcessTitle3}</SeoProcessTitle>
                            <SeoProcesspara lightSeoPara={lightSeoPara}>{seoProcessPara3}</SeoProcesspara>
                        
                            </SeoWhole>
                        </TextWrapper>

                    </InfoCol>
                    </InfoRow> 

            </Container>
            
        </SeoContentProcessSec>
            
        </>
    )
}

export default SeoContentProcess

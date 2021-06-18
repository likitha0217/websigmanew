import React from 'react'
import { Container } from '../../GlobalStyle'
import { CaseStudySec,
InfoRow,
InfoCol,
TextWrapper,
CaseHeading,
Img,
InfoCol1,
CaseStudyImage,
CaseStudyCon} from './CaseStudyElement'

const CaseStudy = ({lightcaseHead,lightBg, caseHead, img1, img2,img3,alt}) => {
    return (
        <>

        <CaseStudySec lightBg={lightBg}>
            <Container>
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <CaseHeading lightcaseHead={lightcaseHead}>{caseHead}</CaseHeading>
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>
                <InfoRow>
                    <InfoCol1>
                        <TextWrapper>
                        <CaseStudyCon>
                                   <CaseStudyImage>
                                         <Img src={img1} alt={alt} />  
                                    </CaseStudyImage>
                                    </CaseStudyCon>
                                    </TextWrapper>
                                    
                    </InfoCol1>

                    <InfoCol1>
                    <TextWrapper>
                                    <CaseStudyCon>
                                    <CaseStudyImage>
                                         <Img src={img2} alt={alt} />  
                                    </CaseStudyImage>

                                    </CaseStudyCon>
                                    </TextWrapper>
                    </InfoCol1>
                    <InfoCol1>
                    <TextWrapper>
                                    <CaseStudyCon>
                                    <CaseStudyImage>
                                         <Img src={img3} alt={alt} />  
                                    </CaseStudyImage>

                                    </CaseStudyCon>
                                    </TextWrapper>
                    </InfoCol1>
                </InfoRow>
            </Container>


        </CaseStudySec>
            
        </>
    )
}

export default CaseStudy

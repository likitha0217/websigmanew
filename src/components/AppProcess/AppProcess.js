import React from 'react'
import { Container } from '../../GlobalStyle'
import { AppProcessSec,
InfoRow,
InfoCol,
TextWrapper,
AppWhole,
Img,
ImgWrapper,
AppProcessTitle,
AppProcessText } from './AppProcessElement'
import '../AppProcess/Style.css'

const AppProcess = ({lightBg,lightAppTitle, start, alt, img1,img2,img3,img4,img5,img6,img7,img8,appProcessTitle1, appProcessTitle2, appProcessTitle3, appProcessTitle4, appProcessTitle5, appProcessTitle6,appProcessTitle7, appProcessTitle8 }) => {
    return (
        <>
        <AppProcessText lightBg={lightBg}>
            <Container>
                 <h2 className="heads">The Process</h2>
            </Container>
        </AppProcessText>
        <AppProcessSec lightBg={lightBg}>
            <Container>
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img1} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle1}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img2} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle2}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img3} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle3}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img4} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle4}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>

                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img5} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle5}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img6} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle6}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img7} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle7}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <AppWhole>
                                                                     
                                 <ImgWrapper start={start}>
                                  <Img src={img8} alt={alt} />
                                    </ImgWrapper>
                                 
                                 <AppProcessTitle lightAppTitle={lightAppTitle}>{appProcessTitle8}</AppProcessTitle>
                                
                                </AppWhole>
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>
            </Container>
        </AppProcessSec>
            
        </>
    )
}

export default AppProcess

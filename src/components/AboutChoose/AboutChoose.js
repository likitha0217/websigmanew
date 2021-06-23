import React from 'react'
import { Container } from '../../GlobalStyle'
import { AboutChooseHeadSec,
AboutChooseMain,
TextWrapper,
TextWrapperChoose,
AboutChooseTop,
AboutChooseHead,
ImgWrapper,
InfoRow,
InfoCol,
ChooseWhole,
ChooseSubTitle,
ChooseSub,
Img
 } from './AboutChooseElement'

const AboutChoose = ({lightBg,lightChooseTop,lightchooseHead, img1,alt,start,lightSub,lightSubTiitle,chooseTop,chooseHead,chooseSubTitle1,chooseSub1,chooseSubTitle2,chooseSub2,chooseSubTitle3,chooseSub3,img2,img3}) => {
    return (
        <>
        <AboutChooseHeadSec lightBg={lightBg}>
            <TextWrapperChoose>
                <AboutChooseTop lightChooseTop={lightChooseTop}>{chooseTop}</AboutChooseTop>
                <AboutChooseHead lightchooseHead={lightchooseHead}>{chooseHead}</AboutChooseHead>
            </TextWrapperChoose>
        </AboutChooseHeadSec>

        <AboutChooseMain lightBg={lightBg}>
            <Container>
                
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <ChooseWhole>
                                                                     
                                    <ImgWrapper start={start}>
                                         <Img src={img1} alt={alt} />
                                    </ImgWrapper>


                            <ChooseSubTitle lightSubTiitle={lightSubTiitle}>{chooseSubTitle1}</ChooseSubTitle>
                            <ChooseSub lightSub={lightSub}>{chooseSub1}</ChooseSub>
                            </ChooseWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                            <ChooseWhole>
                            <ImgWrapper start={start}>
                                <Img src={img2} alt={alt} />
                            </ImgWrapper>
                            <ChooseSubTitle lightSubTiitle={lightSubTiitle}>{chooseSubTitle2}</ChooseSubTitle>
                            <ChooseSub lightSub={lightSub}>{chooseSub2}</ChooseSub>
                            </ChooseWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                            <ChooseWhole>
                            <ImgWrapper start={start}>
                                <Img src={img3} alt={alt} />
                            </ImgWrapper>
                            <ChooseSubTitle lightSubTiitle={lightSubTiitle}>{chooseSubTitle3}</ChooseSubTitle>
                            <ChooseSub lightSub={lightSub}>{chooseSub3}</ChooseSub>
                            </ChooseWhole>
                        </TextWrapper>

                    </InfoCol>
                    </InfoRow>

                

            </Container>
        </AboutChooseMain>
            
        </>
    )
}

export default AboutChoose

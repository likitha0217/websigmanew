import React from 'react'
import { Button, Container } from '../../GlobalStyle'
import {Link} from 'react-router-dom'
import { ServiceTypesec,
TextWrapperType,
ServiceTypeTop,
ServiceTypeHeads,
ServiceTypes,
InfoRow,
InfoCol,
TextWrapper,
ServiceWhole,
Img,
ImgWrapper,
ServiceButton,
ChooseSerTitle,
Chooseser } from './ServiceTypeElement'
const ServiceType = ({lightBg,lightServiceTop, serviceTop, lightServiceHead, serviceHead,img1,img2,img3, alt,start,lightSerTiitle,chooseSerle1,chooseSerle2,chooseSerle3,lightSer, chooseSer1,chooseSer2,chooseSer3,buttonLabel,primary}) => {
    return (
        <>
           <ServiceTypesec lightBg={lightBg}>
            <TextWrapperType>
                <ServiceTypeTop lightServiceTop={lightServiceTop}>{serviceTop}</ServiceTypeTop>
                <ServiceTypeHeads lightServiceHead={lightServiceHead}>{serviceHead}</ServiceTypeHeads>
            </TextWrapperType>
        </ServiceTypesec>

        <ServiceTypes lightBg={lightBg}>
            <Container>
                
                <InfoRow>
                    <InfoCol>
                        <TextWrapper>
                            <ServiceWhole>
                                                                     
                                    <ImgWrapper start={start}>
                                         <Img src={img1} alt={alt} />
                                    </ImgWrapper>


                            <ChooseSerTitle lightSerTiitle={lightSerTiitle}>{chooseSerle1}</ChooseSerTitle>
                            <Chooseser lightSer={lightSer}>{chooseSer1}</Chooseser>
                            <ServiceButton>
                                            <Link to='/Seo'>
                                                 <Button primary={primary}>
                                             {buttonLabel}
                                             </Button>
                                             </Link>
                                    </ServiceButton>
                            </ServiceWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <ServiceWhole>
                                                                     
                                                                     <ImgWrapper start={start}>
                                                                          <Img src={img2} alt={alt} />
                                                                     </ImgWrapper>
                                 
                                 
                                                             <ChooseSerTitle lightSerTiitle={lightSerTiitle}>{chooseSerle2}</ChooseSerTitle>
                                                             <Chooseser lightSer={lightSer}>{chooseSer2}</Chooseser>
                                                             <ServiceButton>
                                                                             <Link to='/Website'>
                                                                                  <Button primary={primary}>
                                                                              {buttonLabel}
                                                                              </Button>
                                                                              </Link>
                                                                     </ServiceButton>
                                                             </ServiceWhole>
                        </TextWrapper>

                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                        <ServiceWhole>
                                                                     
                                                                     <ImgWrapper start={start}>
                                                                          <Img src={img1} alt={alt} />
                                                                     </ImgWrapper>
                                 
                                 
                                                             <ChooseSerTitle lightSerTiitle={lightSerTiitle}>{chooseSerle3}</ChooseSerTitle>
                                                             <Chooseser lightSer={lightSer}>{chooseSer3}</Chooseser>
                                                             <ServiceButton>
                                                                             <Link to='/App'>
                                                                                  <Button primary={primary}>
                                                                              {buttonLabel}
                                                                              </Button>
                                                                              </Link>
                                                                     </ServiceButton>
                                                             </ServiceWhole>
                        </TextWrapper>

                    </InfoCol>
                    </InfoRow> 
                    </Container>
                    </ServiceTypes>
        </>
    )
}

export default ServiceType

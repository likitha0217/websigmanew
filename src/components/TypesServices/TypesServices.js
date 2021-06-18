import React from 'react'
import { Container } from '../../GlobalStyle'
import {Link} from 'react-router-dom'
import { Button } from '../../GlobalStyle'
import { TypeServiceSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    ServiceOfferedImage,
    Img,
    ServiceOffered,
    SericeOfferedHeading,
    ServiceOfferedDesc,
    ServiceButton} from './TypeServiceElement'

const TypeServiceElement = ({lightBg, lightOfferedHead, lightOfferedDesc ,img , alt, serviceOffHeading, serOffDescription, serviceOffHeading2, serOffDescription2, serviceOffHeading3, serOffDescription3,img2, img3, primary,buttonLabel }) => {
    return (
        <>

        <TypeServiceSec lightBg={lightBg}>
            <Container>
            <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <ServiceOffered>
                                    <ServiceOfferedImage>
                                         <Img src={img} alt={alt} />  
                                    </ServiceOfferedImage>
                                    <SericeOfferedHeading lightOfferedHead={lightOfferedHead}>{serviceOffHeading}</SericeOfferedHeading>
                                    <ServiceOfferedDesc lightOfferedDesc={lightOfferedDesc}>{serOffDescription}</ServiceOfferedDesc>
                                    <ServiceButton>
                                            <Link to='/contact'>
                                                 <Button primary={primary}>
                                             {buttonLabel}
                                             </Button>
                                             </Link>
                                    </ServiceButton>
                                </ServiceOffered>

                                </TextWrapper>

                                </InfoColumn>
                                <InfoColumn>
                            <TextWrapper>
                                <ServiceOffered>
                                    <ServiceOfferedImage >
                                         <Img src={img2} alt={alt} />  
                                    </ServiceOfferedImage>
                                    <SericeOfferedHeading lightOfferedHead={lightOfferedHead}>{serviceOffHeading2}</SericeOfferedHeading>
                                    <ServiceOfferedDesc lightOfferedDesc={lightOfferedDesc}>{serOffDescription2}</ServiceOfferedDesc>
                                    <ServiceButton>
                                            <Link to='/contact'>
                                                 <Button primary={primary}>
                                             {buttonLabel}
                                             </Button>
                                             </Link>
                                    </ServiceButton>
                                </ServiceOffered>

                                </TextWrapper>

                                </InfoColumn>
                                
                                <InfoColumn>
                            <TextWrapper>
                                <ServiceOffered>
                                    <ServiceOfferedImage >
                                         <Img src={img3} alt={alt} />  
                                    </ServiceOfferedImage>
                                    <SericeOfferedHeading lightOfferedHead={lightOfferedHead}>{serviceOffHeading3}</SericeOfferedHeading>
                                    <ServiceOfferedDesc lightOfferedDesc={lightOfferedDesc}>{serOffDescription3}</ServiceOfferedDesc>
                                    <ServiceButton>
                                            <Link to='/contact'>
                                                 <Button primary={primary}>
                                             {buttonLabel}
                                             </Button>
                                             </Link>
                                    </ServiceButton>
                                </ServiceOffered>

                                </TextWrapper>

                                </InfoColumn>
                                
                                </InfoRow>

            </Container>

        </TypeServiceSec>
            
        </>
    )
}

export default TypeServiceElement

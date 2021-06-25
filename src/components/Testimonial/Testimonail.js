import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container } from '../../GlobalStyle'
import {
TestHeading,
TestimonialSec,
InfoRow,
InfoCol,
TextWrapper,
TestimonialHead,
TestimonialAuthor,
ImgWrapper,
 Img,
TestTop,
} from './TestimonialElement'

const Testimonail = ({lightBg,primary,buttonLabel,lightTop,testTop,lighttesthead,testHeading,lightTestimonialHead,testimonialHead,lightTestimonailAuthor,testimonialAuthor,img,alt,start }) => {
    return (
        <>
        <TestimonialSec lightBg={lightBg}>
            <Container>
                <InfoRow>
                    
                    
                    <InfoCol>
                        <TextWrapper>
                        <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>

                        </TextWrapper>
                    </InfoCol>
                    <InfoCol>
                        <TextWrapper>
                            <TestTop lightTop={lightTop}>{testTop}</TestTop>
                        <TestHeading lighttesthead={lighttesthead}>{testHeading}</TestHeading>
                          <TestimonialHead lightTestimonialHead={lightTestimonialHead}>{testimonialHead}</TestimonialHead>
                          <TestimonialAuthor lightTestimonailAuthor={lightTestimonailAuthor}>{testimonialAuthor}</TestimonialAuthor>
                          <Link to='/contact'>
                                   <Button big fontBig primary={primary}>
                                       {buttonLabel}
                                   </Button>
                               </Link>
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>
            </Container>
        </TestimonialSec>
            
        </>
    )
}

export default Testimonail

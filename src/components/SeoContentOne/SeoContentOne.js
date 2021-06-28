import React from 'react'
import { Container } from '../../GlobalStyle'
import '../SeoContentOne/Style.css'
import { SeoContentOneSec,
InfoRow,
InfoCol,
TextWrapper,
Img,
ImgWrapper } from './SeoContentOneElement'
import '../../components/SeoContentOne/Style.css'
const SeoContentOne = ({lightBg, img, start, alt}) => {
    return (
        <>
        <SeoContentOneSec lightBg={lightBg}>
            <Container>
            <InfoRow>
                    
                    <InfoCol>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoCol>

                        <InfoCol>
                        <TextWrapper>
                            <p className="top">Benefits of SEO</p>
                           <h2 className="heads">WHY YOU NEED SEO </h2>
                           <p className="desc">The main reasons why you need to do SEO for your website from Websigma point of view</p>
                           <ul className="content1">
                               <li>Increase traffic to your website</li>
                               <li>Rank your website when your target customers are looking for your service or product</li>
                               <li>Provides you the best ROI compared to any other marketing platform</li>
                               <li>Best way to overcome competitor challenge</li>
                               <li>Long term SEO helps you in reducing paid promotion budget</li>
                               <li>The customers trust over organically ranked website is more than paid promotion websites</li>
                               <li>The number of keywords that you can target is high</li>
                               <li>You can reach out to intent based customers</li>
                               <li>Conversion rate is best for SEO compared to any other platforms</li>
                               
                           </ul>
                            
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>

            </Container>
        </SeoContentOneSec>
            
        </>
    )
}

export default SeoContentOne


import React from 'react'
import { Container } from '../../GlobalStyle'
import '../SeoContentLast/Style.css'
import { SeoContentLast,
InfoRow,
InfoCol,
TextWrapper,
Img,
ImgWrapper } from './SeoContentLastElement'

const SeoContentElement = ({lightBg, img, start, alt}) => {
    return (
        <>
            <SeoContentLast lightBg={lightBg}>
            <Container>
            <InfoRow>
                    
                    <InfoCol>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoCol>

                        <InfoCol>
                        <TextWrapper>
                          
                           <h2 className="heads1">Our SEO process </h2>
                           
                           <ul>
                               <li>Our SEO process starts from requirement gathering from clients</li>
                               <li>Audit of your website and technical recommendations</li>
                               <li>Keywords research and recommendations followed by Competitor analysis</li>
                               <li>Implement SEO factors to your website, structure the website according to search engine guidelines – Onsite SEO</li>
                               <li>Improve website authority continuously, ensure website has healthy links, improve authority signals – Off site SEO</li>
                               <li>Relook onsite SEO.</li>
                               
                               
                           </ul>
                            
                        </TextWrapper>
                    </InfoCol>
                </InfoRow>

            </Container>
        </SeoContentLast>
        </>
    )
}

export default SeoContentElement

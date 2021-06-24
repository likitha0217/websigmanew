import React from 'react'
import { ServiceSec,
TextWrapper,
SerHeadTitle } from './ServiceBannerElement'
const ServiceBanner = ({lightSerHead, serviceHeadTitle}) => {
    return (
        <>
        <ServiceSec>
            <TextWrapper>
               <SerHeadTitle lightSerHead={lightSerHead}>{serviceHeadTitle}</SerHeadTitle>
            </TextWrapper>
            </ServiceSec>
            
        </>
    )
}

export default ServiceBanner

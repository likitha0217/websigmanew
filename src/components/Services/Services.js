import React from 'react'
import { Container } from '../../GlobalStyle'

import { ServiceSec,
SerInfoRow,
SerInfoCol,
SerTextWrapper,
SerTopLine,
SerHeading,
} from './ServicesElement'
const Services = ({lightBg, lightSerLine,lightSerHead,sertopLine,serHeading }) => {
    return (
        <>
        <ServiceSec lightBg={lightBg}>
            <Container>
                <SerInfoRow>
                    <SerInfoCol>
                        <SerTextWrapper>
                            <SerTopLine lightSerLine={lightSerLine}>{sertopLine}</SerTopLine>
                            <SerHeading lightSerHead={lightSerHead}>{serHeading}</SerHeading>
                        </SerTextWrapper>

                    </SerInfoCol>
                    </SerInfoRow>


                    

            </Container>
        </ServiceSec>
            
        </>
    )
}

export default Services

import React from 'react'
import { Container } from '../../GlobalStyle'
import { SuccessTextSec,Head } from './SuccessTextElement'

const SuccessText = ({lightBg}) => {
    return (
        <>
        <SuccessTextSec lightBg={lightBg}>
            <Container>
                <Head>Thank You for your submission, We will get back to you at the earliest!!</Head>
            </Container>
        </SuccessTextSec>
            
        </>
    )
}

export default SuccessText

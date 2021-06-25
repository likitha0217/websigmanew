import React from 'react'
import { ContactBanner, ContactInfo } from '../../components'
import { contactObj1, contactObj2 } from './Data'

const Contact = () => {
    return (
        <>

        <ContactBanner {...contactObj1} />
        <ContactInfo {...contactObj2} />
        </>
    )
}

export default Contact

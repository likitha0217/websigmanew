import React from 'react'
import { ServiceBanner, ServiceType } from '../../components'
import { serObj1, serObj2 } from './Data'

const Home = () => {
    return (
        <>
        <ServiceBanner {...serObj1} />
        <ServiceType {...serObj2} />
            
        </>
    )
}

export default Home

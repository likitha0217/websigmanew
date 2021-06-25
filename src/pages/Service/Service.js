import React from 'react'
import { ServiceBanner, ServiceType,ServiceText } from '../../components'
import { serObj1, serObj2, serObj3 } from './Data'

const Home = () => {
    return (
        <>
        <ServiceBanner {...serObj1} />
        <ServiceType {...serObj2} />
        <ServiceText {...serObj3} />
            
        </>
    )
}

export default Home

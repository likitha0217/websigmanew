import React from 'react'
import {CaseStudy, InfoSection, Services, Testimonial, TypesServices } from '../../components'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjService, homeObjOffer1, homeObjTest, homeObjcase} from './Data'

const Home = () => {
    return (
        <>

        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services {...homeObjService} />
        <TypesServices {...homeObjOffer1} />
        <InfoSection {...homeObjThree}/>
        <CaseStudy {...homeObjcase} />
        <Testimonial {...homeObjTest} />
       
            
        </>
    )
}

export default Home

import React from 'react'
import { CaseStudy, InfoSection, Services, TypesServices } from '../../components'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjService, homeObjOffer1, homeObjcase} from './Data'

const Home = () => {
    return (
        <>

        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services {...homeObjService} />
        <TypesServices {...homeObjOffer1} />
        <InfoSection {...homeObjThree}/>
        <CaseStudy {...homeObjcase} />
        <InfoSection {...homeObjFour}/>
            
        </>
    )
}

export default Home

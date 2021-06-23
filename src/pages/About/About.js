import React from 'react'

import { AboutChoose, AboutText, AboutWeb } from '../../components'

import { aboutObj1, aboutObj2, aboutObj3} from './Data'

const About = () => {
    return (
        <>
        
        <AboutWeb {...aboutObj1} />
        <AboutChoose {...aboutObj2} />
         <AboutText {...aboutObj3} />
        
        </>
    )
}

export default About

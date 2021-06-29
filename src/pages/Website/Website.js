import React from 'react'
import { WebBanner, WebServices } from '../../components'
import { webObj1, webObjFive, webObjFour, webObjThree, webObjTwo } from './Data'

const Website = () => {
    return (
        <>
        <WebBanner {...webObj1}/>
        <WebServices {...webObjTwo}/>
        <WebServices {...webObjThree}/>
        <WebServices {...webObjFour}/>
        <WebServices {...webObjFive} />
       
     
            
        </>
    )
}

export default Website

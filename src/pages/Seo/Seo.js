import React from 'react'
import { SeoContentBanner, SeoContent, SeoContentOne, SeoContentProcess,SeoContentLast } from '../../components'
import { SeoObj1, SeoObjFour, SeoObjTwo,SeoObjThree, seoObjFive, SeoObjSix } from './Data'

const Seo = () => {
    return (
        <>
        <SeoContentBanner {...SeoObj1} />
        <SeoContent {...SeoObjTwo}/>
        <SeoContentOne {...SeoObjThree}/>
        <SeoContent {...SeoObjFour}/>
        <SeoContentProcess {...seoObjFive}/>
        <SeoContentLast {...SeoObjSix} />
            
        </>
    )
}

export default Seo

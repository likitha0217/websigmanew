import React from 'react'
import { AppBanner, AppTextOne,AppBannerTwo, AppProcess } from '../../components'
import {MobbjFour, MobbjThree, MobbjTwo, mobObj1} from './Data'

const Mobile = () => {
    return (
        <>
        <AppBanner {...mobObj1}/>
        <AppTextOne {...MobbjTwo} />
        <AppBannerTwo {...MobbjThree} />
        <AppProcess {...MobbjFour} />
            
        </>
    )
}
 
export default Mobile

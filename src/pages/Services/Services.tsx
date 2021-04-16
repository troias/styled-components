import React from 'react'
import { Data4 } from './Data'
import { InfoSection, Footer, Pricing }  from '../../components'
export const Home = () => {


    return (
        <>
            <Pricing />
            <InfoSection {...Data4}></InfoSection>
            
        </>
    )
}

export default Home
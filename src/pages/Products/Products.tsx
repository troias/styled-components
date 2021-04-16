import React from 'react'
import {Data2, Data3, Data4 } from './Data'
import { InfoSection, Footer, Pricing }  from '../../components'
export const Home = () => {


    return (
        <>

            <InfoSection {...Data2}></InfoSection>
            <InfoSection {...Data3}></InfoSection>
            <Pricing />
            <InfoSection {...Data4}></InfoSection>
            
        </>
    )
}

export default Home
import React from 'react'
import image from '../../assets/images/svg-1.svg'
import image2 from '../../assets/images/svg-2.svg'
import image3 from '../../assets/images/svg-3.svg'
import image4 from '../../assets/images/profile.jpg'

interface Data {
    lightBg?: boolean
    imgStart?: boolean
    lightTopLine?: boolean
    lightText: boolean
    lightTextDesc: boolean
    primary: boolean
    topLine: string
    headline: string
    description: string
    buttonLabel: string
    img: string
    alt: string
    start: any
}

export const Data: Data =  {
    lightBg: false,
    imgStart: true,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true, 
    primary: true,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialists for online businesses',
    description:'We help business owners increase revenue. Our team of unique specialists can help you acheive your buinsess goals',
    buttonLabel: 'Get started', 
    img: image,
    alt: "Image",
    start: "",
}


export const Data2: Data =  {
    lightBg: true,
    imgStart:  false,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false, 
    primary: false,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialists for online businesses',
    description:'We help business owners increase revenue. Our team of unique specialists can help you acheive your buinsess goals',
    buttonLabel: 'Get started', 
    img: image2,
    alt: "Image",
    start: "",
}

export const Data3: Data =  {
    lightBg: false,
    imgStart:  false,
    lightTopLine: false,
    lightText: true,
    lightTextDesc: true, 
    primary: true,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialists for online businesses',
    description:'We help business owners increase revenue. Our team of unique specialists can help you acheive your buinsess goals',
    buttonLabel: 'Get started', 
    img: image3,
    alt: "Image",
    start: "",
}

export const Data4: Data =  {
    lightBg: false,
    imgStart:  true,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true, 
    primary: true,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialists for online businesses',
    description:'We help business owners increase revenue. Our team of unique specialists can help you acheive your buinsess goals',
    buttonLabel: 'Get started', 
    img: image4,
    alt: "Image",
    start: true,
}
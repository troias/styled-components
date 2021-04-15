import { useState } from 'react'

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle, 
    ImgWrapper, 
    Img, 
    

} from './InfoSection.elements'
import { Button, Container } from '../../globalStyle'
import { Link } from 'react-router-dom'

interface ISectionProps {
    lightBg?: boolean
    imgStart?: string
    lightTopLine?: string
    lightText: boolean
    lightTextDesc: string
    primary: string
    topLine: string
    headline: string
    description: string
    buttonLabel: string
    img: any
    alt: string
}


const infoSection = (props: ISectionProps | any) => {

    return (
        <>
            <InfoSec lightBg={props.lightBg}>
                <Container>
                    <InfoRow imgStart={props.imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine
                                    lightTopLine={props.lightTopLine}>
                                    {props.topLine}
                                </TopLine>
                                <Heading
                                    lightText={props.lightText}
                                >
                                    {props.headline}
                                </Heading>
                                <SubTitle
                                    lightTextDesc={props.lightTextDesc}
                                >
                                    {props.description}
                                </SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={props.primary}>
                                        {props.buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                                <ImgWrapper start={props.start}>
                                    <Img src={props.img} alt={props.alt} />
                                </ImgWrapper>
                            </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default infoSection

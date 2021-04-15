import styled from 'styled-components'

interface InfoSecProps{
    lightBg?: boolean
  }

  interface InfoRowProps{
    imgStart?: boolean
  }

export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${(props: InfoSecProps) => ( props.lightBg ? '#fff' : '#101522' )};

`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap; 
  align-items: center;
  flex-direction: ${(props: InfoRowProps) => (props.imgStart ? 'row-reverse' : 'row')};

`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
  flex: 1; 
  flex-basis: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;  
  }

`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width:768px) {
    padding-bottom: 65px
  }
`

interface TLProps{
  lightTopLine?: boolean
}

export const TopLine = styled.div`
color: ${(props: TLProps) => (props.lightTopLine ? '#a9b3c' : '#4b5957' )};
font-size: 18px;
line-height: 16px;
`

interface HeadingProps{
  lightText?: boolean
}
export const Heading = styled.h1`
  margin-top: 20px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: ${(props: HeadingProps) => (props.lightText ? "#f7f8fa" : "#1c2237")};
`

interface SubTitle{
  lightTextDesc?: string
}

export const SubTitle = styled.p`
max-width:  440px;
margin-bottom: 35px;
font-size:  18px;
line-height: 24px;
color: ${(props: SubTitle) => (props.lightTextDesc ? "#a9b3c1" : "#1c2237")};
`
interface ImgWrapper{
  start?: string
}

export const ImgWrapper = styled.div`
  max-width:  555px;
  display: flex;
  justify-content:${(props: ImgWrapper) => (props.start ? "flex-start" : "flex-end")};
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
  max-height: 500px;
`
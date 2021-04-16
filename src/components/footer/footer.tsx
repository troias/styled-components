import {
    FooterContainer,
    FooterSubText,
    FooterSubscription,
    FooterSubsHeading,
    FormInput,
    Form,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebSiteRights,
    SocialIcons,
    SocialIconLink,


} from './Footer.elements'

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Button from '../../globalStyle'

interface FooterProps {
}

const Footer = (props: FooterProps) => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubsHeading>
                    Join our exclusive membership to receive the latest news and trends
            </FooterSubsHeading>
                <FooterSubText>
                    You can usubscribe at any time
            </FooterSubText>
                <Form>
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="Your email"
                    />
                    <Button >
                        Subscribe
                </Button>


                </Form>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinksTitle>
                            About Us
                    </FooterLinksTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>
                            About Us
                    </FooterLinksTitle>
                        <FooterLink to="/Contact">Contact Us</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                            About Us
                    </FooterLinksTitle>
                        <FooterLink to="/sign-up">Social Media</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebSiteRights>
                        ULTRA 2021
                    </WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferer">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferer">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
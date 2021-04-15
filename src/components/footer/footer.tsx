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
    FooterLink
} from './Footer.elements'

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
                    You can ubsubscribe at any time
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
        </FooterContainer>
    )
}

export default Footer
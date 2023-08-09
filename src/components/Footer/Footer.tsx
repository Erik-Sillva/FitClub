import { FooterContainer, FooterElement, SocialLinks, LogoF, BlurFooter, BlurFooter2 } from './FooterStyled'
import Github from '../../assets/img/github.png'
import Instagram from '../../assets/img/instagram.png'
import LinkedIn from '../../assets/img/linkedin.png'
import Logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <FooterContainer>
            <hr />
            <FooterElement>
                <SocialLinks>
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </SocialLinks>

                <LogoF>
                <img src={Logo} alt="" />
            </LogoF>
            </FooterElement>

            <BlurFooter className='blur'></BlurFooter>
            <BlurFooter2 className='blur'></BlurFooter2>
        </FooterContainer>
    )
}

export default Footer
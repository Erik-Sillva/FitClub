import { styled } from "styled-components";

export const FooterContainer = styled.div`
    position: relative;

    hr {
        border: 1px solid var(--lightgray);
    }
`;

export const FooterElement = styled.footer`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    height: 20rem;
`;

export const SocialLinks = styled.footer`
    display: flex;
    gap: 4rem;

    img {
        height: 2rem;
        width: 2rem;
        cursor: pointer;
    }
`;

export const LogoF = styled.footer`
    img {
        width: 10rem;
    }
`;

export const BlurFooter = styled.div`
    width: 26rem;
    height: 12rem;
    right: 15%;
    bottom: 0;
    filter: blur(200px);
    background: red;
`;

export const BlurFooter2 = styled.div`
    width: 26rem;
    height: 12rem;
    left: 15%;
    bottom: 0;
    filter: blur(200px);
    background: orange;
`;
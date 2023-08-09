import { styled } from "styled-components";
import '../../App.css'

export const TestimonialsContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 2rem;
    height: 450px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: initial;
    }
`;

export const LeftT = styled.div`
    display: flex;
    flex: 1 1;
    gap: 2rem;
    flex-direction: column;
    text-transform: uppercase;
    color: #fff;

    &>:nth-child(1) {
        color: var(--orange);
        font-weight: bold;
    }

    &>:nth-child(2), &>:nth-child(3) {
        font-weight: bold;
        font-size: 3rem;

        @media screen and (max-width: 768px) {
        font-size: xx-large;
        }
    }

    &>:nth-child(4) {
        text-transform: none;
        text-align: justify;
        letter-spacing: 2px;
        line-height: 40px;
    }

    &>:nth-child(5)>:nth-child(1) {
        color: var(--orange);
    }
`;

export const RightT = styled.div`
    flex: 1;
    position: relative;

    &>:nth-child(1) {
        position: absolute;
        width: 17rem;
        height: 20rem;
        border: 2px solid orange;
        background: transparent;
        right: 9rem;
        top: .9rem;
    }

    &>:nth-child(2) {
        position: absolute;
        width: 17rem;
        height: 19rem;
        top: 4rem;
        right: 7rem;
        background: var(--planCard);
    }

    &>img {
        position: absolute;
        width: 17rem;
        height: 20rem;
        object-fit: cover;
        right: 8rem;
        top: 2rem;

        @media screen and (max-width: 768px) {
            position: relative;
            top: 0;
            right: 0;
            align-self: center;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
        &>div {
            position: relative;
            display: none;
        }

        &>:last-child {
            display: flex;
            bottom: 0;
            left: 0;
        }
    }
`;

export const Arrows = styled.div`
    display: flex;
    position: absolute;
    gap: 1rem;
    bottom: 5.7rem;
    left: 8rem;

    &>img {
        width: 1.5rem;
        cursor: pointer;
    }
`;
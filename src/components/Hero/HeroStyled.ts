import '../../App.css'
import { motion } from 'framer-motion';
import { styled } from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftH = styled.div`
    padding: 1.5rem 2rem 2rem 2rem;
    flex: 3;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;

export const Tba = styled.div`
    width: fit-content;
    padding: 20px 13px;
    margin-top: 4rem;
    border-radius: 4rem;
    background: #363d42;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div {
        position: absolute;
        background: var(--orange);
        width: 5.8rem;
        height: 80%;
        left: 8px;
        border-radius: 3rem;
        z-index: 1;
    }

    span {
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        margin-top: 0;
        font-size: small;
        align-self: center;
        transform: scale(.8);
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: bold;
    color: #fff;
    text-overflow: inherit;

    & > div:nth-of-type(3) {
        width: 80%;
        font-size: 1rem;
        font-weight: 300;
        text-transform: none;
        letter-spacing: 1px;

        @media screen and (max-width: 768px) {
            font-size: small;
            font-weight: 200;
            letter-spacing: 1px;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: xx-large;
        align-items: center;
        justify-content: center;
    }
`;

export const Figures = styled.div`
    display: flex;
    gap: 2rem;

    & > div {
        display: flex;
        flex-direction: column;

        & > span:nth-of-type(1) {
            color: #fff;
            font-size: 2rem;

            @media screen and (max-width: 768px) {
                font-size: large;
                text-align: center;
            }
        }

        & > span:nth-of-type(2) {
            color: var(--gray);
            text-transform: uppercase;

            @media screen and (max-width: 768px) {
                font-size: small;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 768px) {
        gap: 10px;
        justify-content: center;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    font-weight: normal;

    &>:nth-child(1) {
        width: 8rem;
        color: #fff;
        background: var(--orange);
    }

    &>:nth-child(2) {
        width: 8rem;
        color: #fff;
        background: transparent;
        border: 2px solid var(--orange);
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const RightH = styled.div`
    flex: 1;
    position: relative;
    background: var(--orange);

    &>.btn {
        position: absolute;
        right: 3rem;
        top: 2rem;
        color: #000;
    }

    .heart_rate {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: var(--darkGrey);
        width: fit-content;
        padding: 1rem;
        align-items: start;
        border-radius: 5px;
        position: absolute;
        right: 3rem;
        top: 5.5rem;

        img {
            width: 2rem;
        }

        &>:nth-child(2) {
            color: var(--gray);
        }

        &>:nth-child(3) {
            color: #fff;
            font-size: 1.5rem;
        }
    }

    .hero-img {
        position: absolute;
        top: 11rem;
        right: 8rem;
        width: 23rem;
    }

    .hero-img-back {
        position: absolute;
        width: 15rem;
        top: 4rem;
        right: 20rem;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
        position: relative;
        background: none;

        .heart_rate {
            left: 1rem;
            top: 2rem;
        }

        .hero-img {
            position: relative;
            width: 15rem;
            left: 7rem;
            top: 4rem;
            align-self: center;
        }

        .hero-img-back {
            width: 15rem;
            left: 2rem;
            top: 0rem;
        }
    }
`;

export const CaloriesContainer = styled(motion.div)`
    display: flex;
    gap: 1rem;
    background: var(--caloryCard);
    border-radius: 5px;
    width: 15.5rem;
    padding: 1rem;
    position: absolute;
    top: 32rem;
    right: 28rem;

    &>img {
        width: 3rem;
    }

    &>div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &>:nth-child(1) {
            color: var(--gray);
        }

        &>:nth-child(2) {
            color: #fff;
            font-size: 1.5rem;

            @media screen and (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        position: relative;
        top: 5rem;
        left: 2rem;

        img {
            width: 2rem;
        }
    }
`;

export const HeroBlur = styled.div`
    width: 22rem;
    height: 30rem;
    left: 0;

    @media screen and (max-width: 768px) {
        width: 14rem;
    }
`;
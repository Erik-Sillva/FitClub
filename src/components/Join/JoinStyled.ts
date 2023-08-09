import { styled } from "styled-components";

export const JoinContainer = styled.div`
    display: flex;
    padding: 0 2rem;
    gap: 10rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;

export const LeftJ = styled.div`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    hr {
        position: absolute;
        width: 10.5rem;
        border: 2px solid var(--orange);
        border-radius: 80%;
        margin-top: -10px;
    }

    &>div {
        display: flex;
        gap: 1rem;

        @media screen and (max-width: 768px) {
            text-align: center;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: x-large;
        flex-direction: column;

        hr {
            display: none;
        }
    }
`;

export const RightJ = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 2rem 0;
    }
`;

export const Form = styled.form`
    display: flex;
    gap: 2rem;
    background: gray;
    padding: 1rem 2rem;

    input {
        background: transparent;
        color: var(--lightgray);
        border: none;
        outline: none;

        &::placeholder {
            color: var(--lightgray);
        }
    }

    button {
        background: var(--orange);
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        gap: .4rem;
        padding: 1rem;
        align-self: center;
        justify-content: center;

        button {
            width: 7rem;
        }
    }
`;
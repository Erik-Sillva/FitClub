import '../../index.css'
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 10rem;
        height: 3rem;
    }

    ul {
        display: flex;
        gap: 2rem;
        color: #fff;

        li {
            cursor: pointer;
            
            &:hover {
                color: var(--orange);
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            background: var(--appColor);
            padding: 2rem;
        }
    }

        &>:nth-child(2) {
            @media screen and (max-width: 768px) {
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 99;
        }
    }
`;
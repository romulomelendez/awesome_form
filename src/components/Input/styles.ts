import styled from "styled-components"

export const UserInput = styled.input `

    padding: 0.75rem;
    width: ${ ({ type }) => type !== "number" ? "25rem" : "11.5rem" };
    border: 1px solid #440445;
    border-radius: 0.3rem;
    outline: none;
    color: #440445;
    font-size: large;
    font-weight: 500;

    @media (max-width: 825px) {
        width: ${ ({ type }) => type !== "number" ? "20rem" : "9rem" };
    }

`
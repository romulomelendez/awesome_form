import styled from "styled-components"

export const UserInput = styled.input `

    padding: 0.75rem;
    width: ${ ({ type }) => type !== "number" ? "100%" : "50%" };
    border: 1px solid #440445;
    border-radius: 0.3rem;
    outline: none;
    color: #440445;
    font-size: large;
    font-weight: 500;

`
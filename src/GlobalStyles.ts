import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: radial-gradient(circle, #6d00a6 10%, transparent 11%);
        background-size: 2em 2em;
        background-color: #440445;
        opacity: 1;
        font-family: 'Poppins', sans-serif;
    }
`
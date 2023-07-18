import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border-radius: 42px;
    height: 40rem;
    width: 25rem;
    margin: 0.313rem;
    padding: 5px;
    background: linear-gradient(135deg, #eaeaea80 50%, transparent 0),linear-gradient(-135deg, #eaeaea80 50%, transparent 0);
    background-size: 4em 4em;
    background-color: #f3f3f3;
    opacity: 1;

    // Using Mobile First Concept
    @media (min-width: 582px) {
        height: 42rem;
        width: 29rem;
    }

    @media (min-width: 832px) {
        height: 45rem;
        width: 33rem;
    }
`
export const FormTitle = styled.h1 `

    font-size: 25pt;
    
    @media (min-width: 582px) {
        font-size: 30pt;
    }

    @media (min-width: 832px) {
        font-size: 33pt;
    }
`

export const Form = styled.form `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 1.2rem;
    width: 95%;

`

export const PlaceContainer = styled.section `

    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 0.2rem;

`

export const CalendarContainer = styled.div `

    display: flex;
    width: 100%;
    column-gap: 2rem;

`

export const UserInformationContainer = styled(PlaceContainer)``

export const SubmitButton = styled.button `

    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 13rem;
    padding: 1.5rem;
    margin: 1.5rem;
    border: 3px solid #BA49FF;
    border-radius: 0.3rem;
    background-color: #440445;
    color: #fff;
    font-size: 14pt;
    font-weight: 700;

    @media (max-width: 832px) {
        width: 13rem;
        padding: 1.2rem;
        font-size: 12pt;
    }
`

export const Error = styled.span `

    color: rgba(181, 7, 7, 0.94);
    font-size: 8pt;
    font-weight: 500;

`

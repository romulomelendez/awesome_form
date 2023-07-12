import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    height: 40.625rem;
    width: 21.875rem;
    margin: 0.313rem;
    background: linear-gradient(135deg, #eaeaea80 50%, transparent 0),linear-gradient(-135deg, #eaeaea80 50%, transparent 0);
    background-size: 4em 4em;
    background-color: #f3f3f3;
    opacity: 1;

    // Using Mobile First Concept
    @media (min-width: 582px) {
        height: 43.75rem;
        width: 25rem;
    }

    @media (min-width: 832px) {
        height: 50rem;
        width: 35rem;
    }
`

export const Form = styled.form `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 1.2rem;

`

export const FormTitle = styled.h1 `

    font-size: 35pt;
    margin-bottom: 50px;

`

export const PlaceContainer = styled.section `

    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;

`

export const CalendarContainer = styled(PlaceContainer)``

export const UserInformationContainer = styled(PlaceContainer)``

export const SubmitButton = styled.button `

    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 13rem;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid #BA49FF;
    background-color: #440445;
    color: #fff;
    font-size: large;
    font-weight: 700;

`
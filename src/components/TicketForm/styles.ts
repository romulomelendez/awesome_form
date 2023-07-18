import styled from 'styled-components'

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
    margin: 0.5rem;
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

export const Error = styled.p `

    color: rgba(181, 7, 7, 0.94);
    font-size: 8pt;
    font-weight: 100;

`

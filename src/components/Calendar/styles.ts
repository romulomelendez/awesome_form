import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    justify-content: space-between;
    width: 100%;

`

export const InternalContainer = styled.div `

    display: flex;
    flex-direction: column;
    row-gap: 8px;

`

export const CalendarTitle = styled.div `

    font-size: 12pt;
    font-weight: 400;

`

export const InputCalendar = styled.input `

    background-color: #440445;
    padding: 10px;
    font-size: 11pt;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;

    &::-webkit-calendar-picker-indicator {
        background-color: white;
        border-radius: 3px;
        cursor: pointer;
    }
    
`

import styled from "styled-components"

export const Switcher =  styled.div `

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-end;
    height: 60px;
    width: 100%;
    padding: 10px;

`

export const Select = styled.section `

    position: fixed;
    display: flex;
    background-color: white;
    justify-content: space-around;
    align-items: center;
    gap: 3px;
    border-radius: 4px;
    padding: 10px;
    width: 130px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`

export const SelectLabel = styled.h6 `

    font-size: 8pt;
    font-weight: 300;

`
export const OptionContainer = styled.div `

    position: fixed;
    display: flex;
    flex-direction: column;
    width: 130px;
    row-gap: 5px;
    border-radius: 4px;
    background-color: white;
    top: 84px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    @media (min-width: 582px) {
        top: 65px;
    }

    @media (min-width: 832px) {
        top: 55px;
    }

`

export const Option = styled.button `

    display: flex;
    background-color: #f2f2f2;
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    gap: 5px;

`

export const LangName = styled.h6 `

    font-size: 9pt;
    font-weight: 300;

`

export const Flag = styled.img `

    height: 20px;
    width: 20px;
    border-radius: 40px;

`
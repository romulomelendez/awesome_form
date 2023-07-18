import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'
import { BiWorld } from 'react-icons/bi'

import brFlag from "../../assets/brazil-flag.png"
import ukFlag from "../../assets/united-kingdom-flag.png"

import { Switcher, Select, SelectLabel, OptionContainer, Option, LangName, Flag } from "./styles"

export const LanguageSwitcher: React.FC = () => {

  const { t, i18n: { changeLanguage } } = useTranslation()
  
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const handleChangeLang = ( newLang: string ): void => {
  
    void changeLanguage(newLang)
    setSelectIsOpen(!selectIsOpen)
  }

  return (
    <Switcher>
      <Select onClick={() => setSelectIsOpen(!selectIsOpen)}> 
        <BiWorld />
        <SelectLabel>{t("language")}</SelectLabel>
        <IoIosArrowDown />
      </Select>
      {
        selectIsOpen && (
          <OptionContainer>
            <Option type="button" onClick={ () => handleChangeLang("en") }>
              <Flag src={ukFlag} alt="UK Flag" />
              <LangName>{t("english")}</LangName>
            </Option>

            <Option type="button" onClick={() => handleChangeLang("ptBR")}>
              <Flag src={brFlag} alt="BR Flag" />
              <LangName>{t("portuguese")}</LangName>
            </Option>
          </OptionContainer>
        )
      }
    </Switcher>
  )
}

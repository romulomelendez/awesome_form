import { useTranslation } from 'react-i18next'

import { TicketForm } from '../../components/TicketForm'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

import { Container, FormTitle } from './styles'

export const Home: React.FC = () => {

    const { t } = useTranslation()
    
    return (
        <Container>
            <LanguageSwitcher />
            <FormTitle>{t("formTitle")}</FormTitle>
            <TicketForm />
        </Container>
    )
}

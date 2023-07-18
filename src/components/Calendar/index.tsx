import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Container, InternalContainer, CalendarTitle, InputCalendar } from './styles'

export const Calendar: React.FC = () => {

    const { register } = useFormContext()
    const { t } = useTranslation()

    return (

        <Container>
            <InternalContainer>
                <CalendarTitle>{t("oneWayTrip")}</CalendarTitle>
                <InputCalendar type="date" {...register("oneWayTrip")} />
            </InternalContainer>
            <InternalContainer>
                <CalendarTitle>{t("returnTrip")}</CalendarTitle>
                <InputCalendar type="date" {...register("returnTrip")} />
            </InternalContainer>
        </Container>

    )
}
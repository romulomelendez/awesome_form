import { useFormContext } from 'react-hook-form'

import { Container, InternalContainer, CalendarTitle, InputCalendar } from './styles'

export const Calendar: React.FC = () => {

    const { register } = useFormContext()

    return (

        <Container>
            <InternalContainer>
                <CalendarTitle>One-way Trip:</CalendarTitle>
                <InputCalendar type="date" {...register("oneWayTrip")} />
            </InternalContainer>
            <InternalContainer>
                <CalendarTitle>Return Trip:</CalendarTitle>
                <InputCalendar type="date" {...register("returnTrip")} />
            </InternalContainer>
        </Container>

    )
}
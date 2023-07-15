import { Container, InternalContainer, CalendarTitle, InputCalendar } from './styles'

export const Calendar: React.FC = () => (

    <Container>
        <InternalContainer>
            <CalendarTitle>One-way Trip:</CalendarTitle>
            <InputCalendar type="date" />
        </InternalContainer>
        <InternalContainer>
            <CalendarTitle>Return Trip:</CalendarTitle>
            <InputCalendar type="date" />
        </InternalContainer>
    </Container>

)
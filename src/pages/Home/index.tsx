import { TicketForm } from '../../components/TicketForm'

import { Container, FormTitle } from './styles'

export const Home: React.FC = () => (
    <Container>
        <FormTitle>Buy your Ticket</FormTitle>
        <TicketForm />
    </Container>
)

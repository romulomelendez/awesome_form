import { TicketContainer } from './styles'

type TicketProps = {
    origin: string;
    destination: string;
    oneWayTrip: Date;
    returnTrip: Date;
    name: string;
    email: string;
    totalPassengers: number;
}

type TicketDataProps = {
    data: TicketProps
}

export const Ticket: React.FC<TicketDataProps> = ({ data }: TicketDataProps) => (
    <TicketContainer>
        <p>{ data.origin }</p>
        <p>{ data.destination }</p>
        <p>{ JSON.stringify(data.oneWayTrip) }</p>
        <p>{ JSON.stringify(data.returnTrip) }</p>
        <p>{ data.name }</p>
        <p>{ data.email }</p>
        <p>{ data.totalPassengers }</p>
    </TicketContainer>
)

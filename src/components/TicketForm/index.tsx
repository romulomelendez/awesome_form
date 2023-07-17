/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../components/Input'
import { Calendar } from '../../components/Calendar'
import { Ticket } from '../../components/Ticket'

import { Form, PlaceContainer, CalendarContainer, UserInformationContainer, SubmitButton, Error } from './styles'

export const TicketForm: React.FC = () => {

    const createTicketSchema = z.object({
        origin: z.string().nonempty("Origin cannot be empty").min(2).max(15, "You have reached the maximum number of characters"),
        destination: z.string().nonempty("Destination cannot be empty").min(2).max(15, "You have reached the maximum number of characters"),
        oneWayTrip: z.coerce.date().refine(oneWayTripData => oneWayTripData > new Date(), { message: "Start date must be in the future" }),
        returnTrip: z.coerce.date(),
        name: z.string().nonempty("Name cannot be empty").min(2).max(30, "You have reached the maximum number of characters"),
        email: z.string().nonempty("E-mail cannot be empty").email("Invalid E-mail Format"),
        totalPassengers: z.coerce.number().min(1).max(5, "You have reached the maximum number of passengers")
    }).refine( data => data.returnTrip > data.oneWayTrip, {
        message: "Return Trip date cannot be earlier than start date"
    })

    type TicketFormProps = z.infer<typeof createTicketSchema>

    // State to keep ticket data
    const [ticketData, setTicketData] = useState<TicketFormProps[]>([])

    const methods = useForm<TicketFormProps>({
        resolver: zodResolver(createTicketSchema)
    })

    const createTicket: SubmitHandler<TicketFormProps> = formData => setTicketData([formData])

    return (
        <FormProvider {...methods}>
            <Form onSubmit={ methods.handleSubmit(createTicket) }>

                {/* Origin and Destination */}
                <PlaceContainer>
                    <Input inputType="text" placeholderText="Origin" name="origin" />
                    { methods.formState.errors.origin && <Error>{ methods.formState.errors.origin.message }</Error> }

                    <Input inputType="text" placeholderText="Destination" name="destination" />
                    { methods.formState.errors.destination && <Error>{ methods.formState.errors.destination.message }</Error> }
                </PlaceContainer>

                {/* Dates */}
                <CalendarContainer>
                    <Calendar />
                </CalendarContainer>

                {/* User Datas */}
                <UserInformationContainer>
                    <Input inputType="text" placeholderText="Name" name="name" />
                    { methods.formState.errors.name && <Error>{ methods.formState.errors.name.message }</Error> }

                    <Input inputType="email" placeholderText="E-mail" name="email" />
                    { methods.formState.errors.email && <Error>{ methods.formState.errors.email.message }</Error> }

                    <Input inputType="number" placeholderText="Total Passengers" name="totalPassengers" />
                    { methods.formState.errors.totalPassengers && <Error>{ methods.formState.errors.totalPassengers.message }</Error> }
                </UserInformationContainer>

                <SubmitButton type="submit">BUY NOW!</SubmitButton>
                
            </Form>
            
            {
                ticketData && ticketData.map((ticket: TicketFormProps, index) => <Ticket key={index} data={ticket} />)
            }
        </FormProvider>
    )
}
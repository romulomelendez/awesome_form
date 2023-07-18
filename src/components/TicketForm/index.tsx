/* eslint-disable @typescript-eslint/no-misused-promises */

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import toast, { Toaster } from 'react-hot-toast'

import { Input } from '../../components/Input'
import { Calendar } from '../../components/Calendar'

import { Form, PlaceContainer, CalendarContainer, UserInformationContainer, SubmitButton, Error } from './styles'

export const TicketForm: React.FC = () => {

    const { t } = useTranslation()

    const createTicketSchema = z.object({
        origin: z.string().nonempty(t("originEmptyError")).min(2).max(15, t("maxCharacterError")),
        destination: z.string().nonempty(t("DestinationEmptyError")).min(2).max(15, t("maxCharacterError")),
        oneWayTrip: z.coerce.date().refine(oneWayTripData => oneWayTripData > new Date(), { message: t("startDateError") }),
        returnTrip: z.coerce.date(),
        name: z.string().nonempty(t("nameEmptyError")).min(2).max(30, t("maxCharacterError")),
        email: z.string().nonempty(t("emailEmptyError")).email(t("emailInvalidError")),
        totalPassengers: z.coerce.number().min(1).max(5, t("maxPassengersError"))
    }).refine( data => data.returnTrip > data.oneWayTrip, {
        message: t("dateTripError")
    })

    type TicketFormProps = z.infer<typeof createTicketSchema>

    const methods = useForm<TicketFormProps>({
        resolver: zodResolver(createTicketSchema)
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const createTicket: SubmitHandler<TicketFormProps> = () => toast.success(t("dataSaved"))

    return (
        <FormProvider {...methods}>
            <Form onSubmit={ methods.handleSubmit(createTicket) }>

                {/* Origin and Destination */}
                <PlaceContainer>
                    <Input inputType="text" placeholderText={t("origin")} name="origin" />
                    { methods.formState.errors.origin && <Error>{ methods.formState.errors.origin.message }</Error> }

                    <Input inputType="text" placeholderText={t("destination")} name="destination" />
                    { methods.formState.errors.destination && <Error>{ methods.formState.errors.destination.message }</Error> }
                </PlaceContainer>

                {/* Dates */}
                <CalendarContainer>
                    <Calendar />
                </CalendarContainer>

                {/* User Datas */}
                <UserInformationContainer>
                    <Input inputType="text" placeholderText={t("name")} name="name" />
                    { methods.formState.errors.name && <Error>{ methods.formState.errors.name.message }</Error> }

                    <Input inputType="email" placeholderText={t("email")} name="email" />
                    { methods.formState.errors.email && <Error>{ methods.formState.errors.email.message }</Error> }

                    <Input inputType="number" placeholderText={t("totalPassengers")} name="totalPassengers" />
                    { methods.formState.errors.totalPassengers && <Error>{ methods.formState.errors.totalPassengers.message }</Error> }
                </UserInformationContainer>

                <SubmitButton type="submit">{t("buyNowBtn")}</SubmitButton>
                <Toaster position="top-right" reverseOrder={false} />
            </Form>
        </FormProvider>
    )
}
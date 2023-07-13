import { Input } from '../../components/Input'

import { Container, Form, PlaceContainer, CalendarContainer, UserInformationContainer, SubmitButton, FormTitle } from './styles'

export const Home: React.FC = () => {

    return (
        <Container>
            <FormTitle>Buy your Ticket</FormTitle>
            <Form>

                {/* Origin and Destination */}
                <PlaceContainer>
                    <Input inputType="text" placeholderText="Origin" />
                    <Input inputType="text" placeholderText="Destination" />
                </PlaceContainer>

                {/* Dates */}
                <CalendarContainer>
                    <Input inputType="date" />
                    <Input inputType="date" />
                </CalendarContainer>

                {/* User Datas */}
                <UserInformationContainer>
                    <Input inputType="text" placeholderText="Name" />
                    <Input inputType="email" placeholderText="E-mail" />
                    <Input inputType="number" placeholderText="Total Passengers" />
                </UserInformationContainer>

                <SubmitButton type="submit">BUY NOW!</SubmitButton>
            </Form>
        </Container>
    )

}
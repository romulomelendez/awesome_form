import { Container, Form } from './styles'

export const Home: React.FC = () => {

    return (
        <Container>
            <Form>
                {/* Origin and Destination */}
                <div>
                    <input type="text" name="origin" />
                    <input type="text" name="destination" />
                </div>

                {/* Dates */}
                <div>
                    <input type="date" name="date-origin" />
                    <input type="date" name="date-destination" />
                </div>

                {/* User Datas */}
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="number" placeholder="Passengers" />
                </div>
            </Form>
        </Container>
    )

}
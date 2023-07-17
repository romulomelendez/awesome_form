import { useFormContext } from 'react-hook-form'

import { UserInput } from './styles'

type UserInputProps = {
    inputType: string,
    placeholderText?: string,
    name: string,
}

export const Input: React.FC<UserInputProps> = ({ inputType, placeholderText, name }) => {

    const { register } = useFormContext()

    return <UserInput type={ inputType } placeholder={ placeholderText } {...register(name)} />
}

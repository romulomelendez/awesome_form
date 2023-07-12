import { UserInput } from './styles'

type UserInputProps = {
    inputType: string,
    placeholderText?: string
}

export const Input: React.FC<UserInputProps> = ({ inputType, placeholderText }: UserInputProps) => <UserInput type={ inputType } placeholder={ placeholderText } />
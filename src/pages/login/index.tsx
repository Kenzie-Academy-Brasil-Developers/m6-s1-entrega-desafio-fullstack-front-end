import LoginForm from "../../components/login-form"
import Logo from "../../components/logo"
import { StyledContainer } from "./style"

export default function Login (){

    return (
        <StyledContainer>
            <Logo/>
            <LoginForm />
        </StyledContainer>
    )
}
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import RegisterForm from "../../components/register-form";
import { StyledContainer } from "./style";

export default function Cadastro() {
	return (
		<StyledContainer>
			<div className="return-window">
				<Logo />
				<Link to={"/"} className={"btn-secondary"}>
					Voltar
				</Link>
			</div>
			<RegisterForm />
		</StyledContainer>
	);
}

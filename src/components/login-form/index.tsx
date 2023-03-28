import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { IUserLogin } from "../../entities/user.entities";

export default function LoginForm() {
	const navigate = useNavigate();
	const { login_onSubmitFunction } = useContext(AuthContext);

	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required("* Email obrigatório")
			.email("* Email inválido"),
		password: yup.string().required("* Senha obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserLogin>({
		resolver: yupResolver(formSchema),
	});

	return (
		<StyledForm onSubmit={handleSubmit(login_onSubmitFunction)}>
			<h3 className="form-title">Login</h3>
			<label>Email</label>
			{errors.email && (
				<span className="error-text">{errors.email.message}</span>
			)}
			<input {...register("email")} type="email" />
			<label>Senha</label>
			{errors.password && (
				<span className="error-text">{errors.password.message}</span>
			)}
			<input {...register("password")} type="password" />
			<button className="btn-primary" type="submit">
				Entrar
			</button>
			<div className="to-register-window">
				<p>Ainda não possui uma conta?</p>
				<button
					onClick={() => navigate("/cadastro")}
					className="btn-third">
					Cadastre-se
				</button>
			</div>
		</StyledForm>
	);
}

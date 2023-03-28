import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { IUserRegister } from "../../entities/user.entities";

export default function RegisterForm() {
	const { register_onSubmitFunction } = useContext(AuthContext);

	const formSchema = yup.object().shape({
		name: yup.string().required("* Nome obrigatório"),
		email: yup
			.string()
			.required("* Email obrigatório")
			.email("* Email inválido"),
		password: yup.string().required("* Senha obrigatória"),
		// .matches(/^(?=.*[$*&@#_])[0-9a-zA-Z$*&@#_]{5,}$/),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref("password"), null], "As senhas precisam ser iguais")
			.required("* Confirmação de senha obrigatória"),
		phone: yup
			.string()
			// .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
			.optional(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserRegister>({
		resolver: yupResolver(formSchema),
	});

	return (
		<StyledForm onSubmit={handleSubmit(register_onSubmitFunction)}>
			<h3 className="form-title">Crie sua conta</h3>
			<p>Rápido e grátis, vamos nessa</p>
			<label>Name</label>
			{errors.name && (
				<span className="error-text">{errors.name.message}</span>
			)}
			<input
				{...register("name")}
				placeholder="Digite aqui o seu nome"
				type="text"
			/>
			<label>Email</label>
			{errors.email && (
				<span className="error-text">{errors.email.message}</span>
			)}
			<input
				{...register("email")}
				placeholder="Digite aqui o seu Email"
				type="email"
			/>
			<label>Senha</label>
			{errors.password && (
				<span className="error-text">
					{errors.password &&
						"* A senha precisa ser composta por letras, números e ao menos um símbolo. Deve possuir no mínimo 5 caracteres."}
				</span>
			)}
			<input
				{...register("password")}
				placeholder="Digite aqui a sua senha"
				type="password"
			/>
			<label>Confirmar Senha</label>
			{errors.passwordConfirm && (
				<span className="error-text">
					{errors.passwordConfirm.message}
				</span>
			)}
			<input
				{...register("passwordConfirm")}
				placeholder="Digite novamente sua senha"
				type="password"
			/>
			{/* <label>Telefone</label>
			{errors.phone && (
				<span className="error-text">
					O número de telefone precisa estar no seguinte formato: (xx)
					xxxxx-xxxx
				</span>
			)}
			<input
				{...register("phone")}
				placeholder="Exemplo: (xx) xxxxx-xxxx"
				type="text"
			/> */}
			<button className="btn-primary" type="submit">
				Cadastrar
			</button>
		</StyledForm>
	);
}

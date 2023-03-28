import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContactContext } from "../../../contexts/contactContext";
import { IContactCreate } from "../../../entities/contact.entities";

export default function CreateContactForm({ setModalIsOpen }) {
	const { createContact_onSubmitFunction } = useContactContext();

	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required("* Email obrigatório")
			.email("* Email inválido"),
		name: yup.string(),
		phone: yup.string().optional(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactCreate>({
		resolver: yupResolver(formSchema),
	});

	return (
		<StyledForm
			onSubmit={handleSubmit((data: IContactCreate) => {
				createContact_onSubmitFunction(data);
				setModalIsOpen(false);
			})}>
			<h3 className="form-title">Adicionar contato</h3>
			<label>Email</label>
			{errors.email && (
				<span className="error-text">{errors.email.message}</span>
			)}
			<input {...register("email")} type="email" />
			<label>Name</label>
			{errors.name && (
				<span className="error-text">{errors.name.message}</span>
			)}
			<input {...register("name")} type="text" />
			<label>Phone</label>
			{errors.phone && (
				<span className="error-text">{errors.phone.message}</span>
			)}
			<input {...register("phone")} type="text" />
			<button className="btn-primary" type="submit">
				Adicionar
			</button>
		</StyledForm>
	);
}

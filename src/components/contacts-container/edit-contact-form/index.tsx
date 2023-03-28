import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContactContext } from "../../../contexts/contactContext";
import { IContact, IContactCreate } from "../../../entities/contact.entities";

interface IEditContactFormProps {
	contact: IContact;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditContactForm({
	setModalIsOpen,
	contact,
}: IEditContactFormProps) {
	const { editContact_onSubmitFunction } = useContactContext();

	const formSchema = yup.object().shape({
		email: yup.string().email("* Email inválido").optional(),
		name: yup.string().optional(),
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
				editContact_onSubmitFunction(data, contact);
				setModalIsOpen(false);
			})}>
			<h3 className="form-title">Editar contato</h3>
			<label>
				Email <i>(Opcional)</i>
			</label>
			{errors.email && (
				<span className="error-text">{errors.email.message}</span>
			)}
			<input {...register("email")} type="email" />
			<label>
				Name <i>(Opcional)</i>
			</label>
			{errors.name && (
				<span className="error-text">{errors.name.message}</span>
			)}
			<input {...register("name")} type="text" />
			<label>
				Phone <i>(Opcional)</i>
			</label>
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

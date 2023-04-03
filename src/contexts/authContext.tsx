import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUser, IUserLogin, IUserRegister } from "../entities/user.entities";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthProviderExports>(
	{} as IAuthProviderExports
);

interface IAuthProviderExports {
	login_onSubmitFunction: (data: IUserLogin) => void;
	register_onSubmitFunction: (data: IUser) => void;
	user: IUser;
	setUser: Dispatch<SetStateAction<IUser>>;
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

function AuthProvider({ children }) {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		loadUser();
		async function loadUser() {
			const token = localStorage.getItem("@clientsCrmToken");
			const userId = localStorage.getItem("@clientsCrmId");
			if (token && userId) {
				try {
					api.defaults.headers.authorization = `Bearer ${token}`;
					const { data } = await api.get<IUser>(`users/${userId}/`);
					setUser(data);
					navigate("/home");
				} catch (error) {
					console.error(error);
				}
			}
			setLoading(false);
		}
	}, [navigate]);

	async function login_onSubmitFunction(data: IUserLogin) {
		try {
			setLoading(true);
			const toNavigate = location.state?.from?.pathname || "home";
			const response = await api.post("login", {
				email: data.email,
				password: data.password,
			});
			api.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
			setLoading(false);
			localStorage.setItem(
				"@clientsCrmToken",
				response.data.access_token
			);
			localStorage.setItem("@clientsCrmId", response.data.user_id);

			const user = await api.get(`users/${response.data.user_id}/`);
			setUser(user.data);
			toast.success("Login confirmado", {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate(toNavigate);
		} catch (error) {
			toast.error("Erro de login: Informações incorretas", {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate("/");
			setLoading(false);
		}
	}
	function register_onSubmitFunction(data: IUserRegister) {
		api.post<IUser>("/users", {
			...data,
		})
			.then((response) => {
				navigate("/");
				toast.success("Cadastro bem sucedido", {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	}

	return (
		<AuthContext.Provider
			value={{
				login_onSubmitFunction,
				register_onSubmitFunction,
				user,
				setUser,
				loading,
				setLoading,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}

export default AuthProvider;

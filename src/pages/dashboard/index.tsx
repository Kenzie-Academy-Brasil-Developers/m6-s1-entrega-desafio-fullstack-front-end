import { StyledDashboard } from "./style";
import Logo from "../../components/logo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import ContactProvider from "../../contexts/contactContext";
import ContactsContainer from "../../components/contacts-container";

export default function Dashboard() {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	function logOut() {
		localStorage.removeItem("@clientsCrmToken");
		localStorage.removeItem("@clientsCrmId");
		navigate("/");
	}

	return (
		<StyledDashboard className="dashboard">
			<header>
				<div className="header-container">
					<Logo />
					<button onClick={() => logOut()} className="btn-secondary">
						Sair
					</button>
				</div>
			</header>
			<div className="intro-container">
				<section>
					<h2>Olá, {user?.name}</h2>
				</section>
			</div>
			<ContactProvider>
				<ContactsContainer />
			</ContactProvider>
		</StyledDashboard>
	);
}

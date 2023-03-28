import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "../components/loading-page";
import ProtectedRoutes from "../components/protected-routes";
import { AuthContext } from "../contexts/authContext";
import Cadastro from "../pages/cadastro";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import NotFoundPage from "../pages/not-found-page";

export default function RoutesComponent() {
	const { loading } = useContext(AuthContext);

	return loading ? (
		<LoadingPage />
	) : (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="cadastro" element={<Cadastro />} />
			<Route path="*" element={<NotFoundPage />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="home" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

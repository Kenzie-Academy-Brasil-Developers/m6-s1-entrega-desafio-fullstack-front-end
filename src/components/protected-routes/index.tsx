import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/authContext";
import LoadingPage from "../loading-page";

export default function ProtectedRoutes() {
	const token = localStorage.getItem("@clientsCrmToken");
	const userId = localStorage.getItem("@clientsCrmId");

	const { loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <LoadingPage />;
	}

	if (token && userId) {
		return <Outlet />;
	} else {
		toast.error("Sessão Expirada, faça o login novamente", {
			position: "top-right",
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		return <Navigate to={"/"} replace state={{ from: location }} />;
	}
}

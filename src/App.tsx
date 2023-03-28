import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/authContext";
import GlobalStyle from "./global-style";
import RoutesComponent from "./routes";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<AuthProvider>
				<RoutesComponent />
			</AuthProvider>
		</div>
	);
}

export default App;

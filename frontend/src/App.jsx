import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";
import "./App.css";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<div className="App">
					<Navbar />
					<main>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/create" element={<CreateNotePage />} />
							<Route path="/edit/:id" element={<EditNotePage />} />
						</Routes>
					</main>
					<Footer />
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
						theme="colored"
					/>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;

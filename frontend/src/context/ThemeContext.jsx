import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

/**
 * Custom hook to provide easy access to the theme context.
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * Provides theme state (light/dark) to the entire application.
 * - Manages the current theme.
 * - Applies the theme class to the body.
 * - Persists the user's choice in localStorage.
 */
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.body.className = "";
		document.body.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
import React from "react";
import MainApp from "./components/MainApp";
import { SessionProvider } from "./contexts/SessionContext";


function App() {
	return (
		<SessionProvider>
			<MainApp />
		</SessionProvider>
	);
}

export default App;

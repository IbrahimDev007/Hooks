import React from "react";
import ReactDOM from "react-dom";
import Useref from "./component/userefs";
import "./index.css";

// Componenet
import Usestate from "./component/usestate";
import Useffect from "./component/useeffect";
import Contex from "./component/usecontex";
import Reducerpro from "./component/usereducer";
import Crud from "./component/Crud";

function App() {
	return (
		<>
			<Usestate />
			<Useffect />
			<Contex />
			<Useref />
			<Reducerpro />
			<Crud />
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

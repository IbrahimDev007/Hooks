import React from "react";
import Component2 from "./Component2";
import { useState, createContext } from "react";
export const UseContext = createContext("molo");
function Contex() {
	function Component1() {
		const [user, setuser] = useState("ibrahim");

		return (
			<UseContext.Provider value={{ value1: "mess up", user: "nice" }}>
				component1 {user}
				<Component2 />
			</UseContext.Provider>
		);
	}

	return (
		<div>
			<Component1 />,
		</div>
	);
}

export default Contex;

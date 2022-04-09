import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Crud() {
	const [Dolon, setDolon] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => setDolon(response.data))
			.catch(function (error) {
				if (error.response) {
					// Request made and server responded
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log("Error", error.message);
				}
			});
		axios
			.post("https://jsonplaceholder.typicode.com/todos", {
				firstName: "Fred",
				lastName: "Flintstone",
			})
			.then((response) => console.log(response.data));
		axios
			.delete("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => console.log("response", response.data))
			.catch(function (error) {
				if (error.response) {
					// Request made and server responded
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log("Error", error.message);
				}
			});
	}, []);
	// useEffect(() => {
	// 	axios
	// 		.post("https://api.coindesk.com/v1/bpi/currentprice.json", {
	// 			firstName: "Fred",
	// 			lastName: "Flintstone",
	// 		})
	// 		.then((response) => console.log(response.data))
	// 		.catch((error) => console.error(error));
	// }, []);
	// useEffect(() => {
	// 	axios
	// 		.put("https://jsonplaceholder.typicode.com/posts", {
	// 			hello: "ibrahim",
	// 		})
	// 		.then((response) => console.log(response.data))
	// 		.catch(function (error) {
	// 			if (error.response) {
	// 				// Request made and server responded
	// 				console.log(error.response.data);
	// 				console.log(error.response.status);
	// 				console.log(error.response.headers);
	// 			} else if (error.request) {
	// 				// The request was made but no response was received
	// 				console.log(error.request);
	// 			} else {
	// 				// Something happened in setting up the request that triggered an Error
	// 				console.log("Error", error.message);
	// 			}
	// 		});
	// }, []);

	return (
		<div className="container-fluid">
			Ibrahim
			{Dolon.map((i) => (
				<h4 className="col-12 bg-success m-3 g-3" key={i.id}>
					{i.body}
				</h4>
			))}
		</div>
	);
}

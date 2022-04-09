import axios from "axios";
import React from "react";
import { useState } from "react";

const options = {
	method: "GET",
	url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
	params: { s: "Avengers Endgame", r: "json", page: "1" },
	headers: {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "5ede732988msh23857ab0a32885cp1bb839jsn7e5026472d77",
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
var go = [1, 2, 3];

function Usestate() {
	const [colur, setColur] = useState(["terki"]);
	const [car, settype] = useState({
		namme: "volvo",
		type: "car",
		colure: "Royal blue",
	});
	const onClickHandalers = () => {
		settype({ ...car, type: "honda" });
	};
	const onClickHandaler = () => setColur("black");

	return (
		<>
			<div className="col-2">Hooks colur change:"" {colur}"" </div>
			<h3>
				you can change "{car.namme}"" "{car.type}"
			</h3>
			<div className="col-12 d-flex m-2">
				{go.map((i) => (
					<div className="card m-2 " key={i} style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				))}
				<div></div>
			</div>
			<div onClick={onClickHandaler}>Hooked colur chang handaler</div>
			<div onClick={onClickHandalers}>Car Typ Change</div>
		</>
	);
}

export default Usestate;

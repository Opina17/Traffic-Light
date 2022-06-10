import React, { useState } from "react";
const Semaforo = () => {
	const [color, setColor] = useState("roja");
	return (
		<div className="semaforo rounded-pill">
			<div
				className={`luz roja ${color === "roja" && "encendido"}`}
				onClick={() => {
					setColor("roja");
				}}></div>
			<div
				className={`luz amarilla ${
					color === "amarilla" ? "encendido" : ""
				}`}
				onClick={() => {
					setColor("amarilla");
				}}></div>
			<div
				className={`luz verde ${color === "verde" ? "encendido" : ""}`}
				onClick={() => {
					setColor("verde");
				}}></div>
		</div>
	);
};
export default Semaforo;

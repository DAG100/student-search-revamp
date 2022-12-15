import React from "react";
import Card from "@mui/material/Card";
import "./SCard.css";


//props: data: object with student data

function SCard(props) {
	return(
	<Card
		style={ props.pointer 
			? {cursor:"pointer"}
			: {}}
	>
		<p>{props.data.n}</p>
		<p>{props.data.i}</p>
		<p>{props.data.g === "M" ? "Male" : "Female"}</p>
		<p>Dept.:{props.data.d}</p>
	</Card>);
}

export default SCard;
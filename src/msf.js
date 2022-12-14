import {InputLabel, Select, MenuItem, FormControl} from "@mui/material";
import React from "react";

export default function MultiSelectField(props) {
	return (
	<FormControl variant="filled">
		<InputLabel id={`${props.name}-label`}>{props.name[0].toUpperCase() + props.name.slice(1,props.name.length).toLowerCase()}</InputLabel>
		<Select
			labelId={`${props.name}-label`}
			className="field"
			value={props.query[props.name]}
			multiple
			onChange={(event) => {
				props.setQuery(Object.assign(props.query,{[props.name]:event.target.value}));
				props.sendQuery(Object.assign(props.query,{[props.name]:event.target.value}));
			}}
		>
			{props.options.map((el) => (
				<MenuItem value={el} key={el}>{el}</MenuItem>
			))}
		</Select>
	</FormControl>
	);
}
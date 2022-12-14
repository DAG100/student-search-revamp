import {InputLabel, TextField, Select, MenuItem, Paper, FormControl} from "@mui/material";
import React, {useState} from "react";

export default function MultiSelectField(props) {
	props.setQuery(Object.assign(props.query,{[props.name]:[]}));
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
				console.log({[props.name]:event.target.value});
				props.sendQuery(Object.assign(props.query,{[props.name]:event.target.value}));
			}}
		>
			{props.options.map((el) => (
				<MenuItem value={el}>{el}</MenuItem>
			))}
		</Select>
	</FormControl>
	);
}
import React, {useState} from "react";
import {InputLabel, TextField, Select, MenuItem, Paper, FormControl} from "@mui/material"
import MultiSelectField from "./msf.js";


/* options to include:
Year
Gender - simple option menu
Hall
Programme
Dept.
Blood grp.
Hometown - text
Name/username/rollno. - text
Non-text are checkbox option menus
*/

/*MUI:
checkbox option menus: checkmark select
simple option menus: select
rest: text field
*/

function Options(props) {
	const [batch, setBatch] = useState([]);
	const [gender, setGender] = useState("");
	const [text, setText] = useState("");
	const [query, setQuery] = useState({
		gender:"",
		text:"",
		batch:[]
	});
	

	return (
		<Paper className="options">

			<FormControl variant="filled">
				<InputLabel id="batch-label">Batch</InputLabel>
				<Select
					labelId="batch-label"
					className="field"
					value={query.batch}
					multiple
					onChange={(event) => {
						setQuery(Object.assign(query,{batch:event.target.value}));
						props.sendQuery({batch:event.target.value, gender, text});
					}}
				>
					<MenuItem value="20">Y20</MenuItem>
					<MenuItem value="21">Y21</MenuItem>
				</Select>
			</FormControl>
			
				
			<FormControl variant="filled">
				<InputLabel id="batch-label">Batch</InputLabel>
				<Select
					labelId="batch-label"
					className="field"
					value={batch}
					multiple
					onChange={(event) => {
						setBatch(event.target.value);
						props.sendQuery({batch:event.target.value, gender, text});
					}}
				>
					<MenuItem value="20">Y20</MenuItem>
					<MenuItem value="21">Y21</MenuItem>
				</Select>
			</FormControl>
			

			<FormControl variant="filled">
				<InputLabel id="gender-label">Gender</InputLabel>
				<Select
					className="field"
					labelId="gender-label"
					value={gender}
					onChange={(event) => {
						setGender(event.target.value);
						props.sendQuery({batch, gender:event.target.value, text});
					}}
				>
					<MenuItem value="">Any</MenuItem>
					<MenuItem value="F">Female</MenuItem>
					<MenuItem value="M">Male</MenuItem>
				</Select>
			</FormControl>

			
			<FormControl variant="filled">
				<TextField
					className="field main-text"
					label="Enter name, username or roll no."
					value={text}
					onChange={(event) => {
						setText(event.target.value);
						props.sendQuery({batch, gender, text:event.target.value});
					}}
				/>
			</FormControl>
		</Paper>);
}

export default Options;
import React, {useState} from "react";
import {InputLabel, TextField, Select, MenuItem} from "@mui/material"


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
	const [batch, setBatch] = useState("");
	const [gender, setGender] = useState("");
	const [text, setText] = useState("");
	
	function handleTextChange(event) {
		setText(event.target.value);
	}

	return (
		<div className="options">
			{//Year
			}
			<InputLabel>Batch</InputLabel>
			<Select
				variant="filled"
				className="field"
				value={batch}
				onChange={(event) => {
					setBatch(event.target.value);
					props.sendQuery({batch:event.target.value, gender, text});
				}}
			>
				<MenuItem value="20">Y20</MenuItem>
				<MenuItem value="21">Y21</MenuItem>
			</Select>
			{//Gender
			}
			<InputLabel>Gender</InputLabel>
			<Select
				variant="filled"
				displayEmpty
				className="field"
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
			{//Text input
			}
			<TextField
				className="field main-text"
				label="Enter name, username or roll no."
				variant="filled"
				value={text}
				onChange={(event) => {
					setText(event.target.value);
					props.sendQuery({batch, gender, text:event.target.value});
				}}
			/>
		</div>);
}

export default Options;
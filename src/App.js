import './App.css';
import Display from "./Display.js";
import Options from "./Options.js";
import STUDENTS from "./students copy.json"
import React, {useState} from "react";
import Button from "@mui/material/Button";


function App(props) {
	
	const [students, setStudents] = useState([]);
	
	function sendQuery(query) {
		setStudents(STUDENTS.filter((st) => {
			let ret = true;
			if (query.gender !== "") {
				ret = ret && (st.g === query.gender);
			}
			if (query.text.length > 2)
				ret = ret && (st.n.includes(query.text));
			else return false;
			
			return ret;
		}))
	}
	
	return (
  	<div>
    	<Options 
    		sendQuery={sendQuery}
    	/>
    	<Display 
    		toShow={students}
    	/>
    </div>
  );
}

export default App;

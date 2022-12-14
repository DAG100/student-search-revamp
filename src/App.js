import Display from "./Display.js";
import Options from "./Options.js";
import STUDENTS from "./studdata/merged1.json"
import React, {useState} from "react";


function App(props) {
	
	const [students, setStudents] = useState([]);
	
	function sendQuery(query) {
		setStudents(STUDENTS.filter((st) => {
			let ret = true;
			if (query.gender !== "") {
				ret = ret && (st.g === query.gender);
			}
			if (query.text.length > 0)
				ret = ret && (st.n.includes(query.text));
			
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

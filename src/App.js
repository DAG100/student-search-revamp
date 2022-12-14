import Display from "./Display.js";
import Options from "./Options.js";
import STUDENTS from "./studdata/merged1.json";
import {ThemeProvider,createTheme} from "@mui/material/styles";
import Fab from "@mui/material/Fab"
import React, {useState} from "react";
import {DarkModeSharp, LightModeRounded} from "@mui/icons-material";


function App(props) {
	
	const [students, setStudents] = useState([]);
	const [darkMode, setDark] = useState(true);
	
	function sendQuery(query) {
		console.log(query)
		setStudents(STUDENTS.filter((st) => {
			let ret = true;
			if (query.gender !== "") {
				ret = ret && (st.g === query.gender);
			}
			if (query.text.length > 0)
				ret = ret && (st.n.toLowerCase().includes(query.text.toLowerCase()));
			
			return ret;
		}))
	}
	
	
	return (
  	<div>
  		<ThemeProvider theme={darkMode ? 
			createTheme({
				palette:{
					mode: "dark",
				}
			})
			: createTheme({
				
			})
  		}>
  		<Fab
  			color="default"
  			style={{
  				margin:"10px",
  				position:"fixed"
  			}}
  			variant="contained"
  			onClick={()=>{
  				setDark(!darkMode);
  				document.body.style.backgroundColor= darkMode ?
  					"#efefef"
  					: "#000";	
  			}}
  		>{darkMode ? 
  			<LightModeRounded color="background"/>
  			: <DarkModeSharp color="background"/>}
  		</Fab>
    	<Options 
    		sendQuery={sendQuery}
    	/>
    	<Display 
    		toShow={students}
    	/>
    	</ThemeProvider>
    </div>
  );
}

export default App;

import Display from "./Display.js";
import Options from "./Options.js";
import STUDENTS from "./studdata/merged1.json";
import {ThemeProvider,createTheme} from "@mui/material/styles";
import Fab from "@mui/material/Fab"
import React, {useState} from "react";
import {DarkModeSharp, LightModeRounded} from "@mui/icons-material";
import {rollToYear} from "./parseData.js";
import Overlay from "./Overlay.js";
import SCard from "./SCard.js";

function App(props) {
	
	const [students, setStudents] = useState([]);
	const [darkMode, setDark] = useState(true);
	const [currDisp, setCurr] = useState();
	function sendQuery(query) {
		setStudents(STUDENTS.filter((st) => {
			let ret = true;
			for (const key in query) {
				if (query[key].length > 0) { //all the stuff inside the if statement will only narrow it down because && used so can just not do anything to ret if length is 0
					if (typeof(query[key]) === "string") { //gender, hometown or name
						ret = ret && (st[key[0]].toLowerCase().includes(query[key].toLowerCase()));
					} else if (key === "batch") {
						ret = ret && (query.batch.includes(rollToYear(st.i)));
					} else { //all the other stuff
						ret = ret && (query[key].includes(st[key[0]]));
					}
				}
			}
			return ret;
		}));
	}
	
	function displayCard(student) {
		setCurr(student);
	}
	
	function clearOverlay() {
		setCurr(undefined);
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
    	<br />
    	<Display 
    		toShow={students}
    		displayCard={displayCard}
    	/>
    	<Overlay
    		clearOverlay={clearOverlay}
    	>
    	{currDisp !== undefined
    		? <SCard data={currDisp} />
    		: ""}
    	</Overlay>
    	</ThemeProvider>
    </div>
  );
}

export default App;

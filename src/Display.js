import Card from "@mui/material/Card";

/*
name={el.n}
						dept={el.d}
						home={el.a}
						roll={el.i}
						key={el.i}
*/

function Display(props) {
	return (
		<div id="display">
			{props.toShow.length > 1000 ? 
				<Card>Too many results ({props.toShow.length} results). Please narrow down your search.</Card> 
				: props.toShow.map(el => {
				return (
					<Card key={el.i}>
					Name: {el.n}
					<br />
					Department: {el.d}
					</Card>
				);})}
		</div>);
}

export default Display;
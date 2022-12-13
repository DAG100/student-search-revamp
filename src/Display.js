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
			{props.toShow.map(el => {
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
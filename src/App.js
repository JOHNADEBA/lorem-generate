import data from "./MOCK_DATA.json";
import Para from "./components/Para";
import "./App.css";
import { useState } from "react";

const App = () => {
	const [index, setIndex] = useState(1);
	const [paraArr, setParaArr] = useState(data.slice(0, index));
	const generateParagraph = () => {
		if (index < 0) {
			return setParaArr(data.slice(0, 0));
		}
		if (index > data.length) {
			return setParaArr(data.slice(0, data.length));
		}
		setParaArr(data.slice(0, index));
	};
	console.log(paraArr);
	return (
		<div className="App">
			<header className="App-header">
				<h1>GENERATE PARAGRAPHS</h1>
			</header>
			<main>
				Paragraphs:{" "}
				<input
					type="number"
					value={index}
					onChange={(e) => setIndex(e.target.value)}
				/>
				<button onClick={generateParagraph}>Generate</button>
				<div className="para-cont">
					{paraArr.length < 1 && <h2>Select a valid number of Paragraphs</h2>}
					{paraArr.length > 0 &&
						paraArr.map((para) => {
							return <Para key={para.id} {...para} index={index} />;
						})}
				</div>
			</main>
		</div>
	);
};

export default App;

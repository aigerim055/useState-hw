import React, {useState} from "react";

function App() {
	const [value, setInput1] = useState(0)
	const [value2, setInput2] = useState(0)
	const [result, setSum] = useState(0)
	
	const handleIncrement = () => {
		return setSum(value + value2)
	}
	const handleDecrement = () => {
		return setSum(value - value2)
	}
	
	return (
		<div>
			<input type="number" onChange={(e) => setInput1(Number(e.target.value))}/>
			<input type="number" onChange={(e) => setInput2(Number(e.target.value))}/>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
			<h3>result: {result}</h3>
		</div>
	)
	
}

export default App;

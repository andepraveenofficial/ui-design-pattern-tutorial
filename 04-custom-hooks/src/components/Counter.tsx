import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter: React.FC = () => {
	/*
  	// Local state
	const [count, setCount] = useState(0);
	// functions
	const decrease = () => {
		console.log("Decreasing count");
		setCount((prevCount) => prevCount - 1);
	};
	const increase = () => {
		console.log("Increasing count");
		setCount((prevCount) => prevCount + 1);
	};
	const reset = () => {
		console.log("Reset count");
		setCount(0);
	};
  */

	const { count, decrease, increase, reset } = useCounter();

	return (
		<div>
			<div>count : {count}</div>
			<div>
				<button onClick={decrease}>decrease</button>
				<button onClick={increase}>increase</button>
				<button onClick={reset}>reset</button>
			</div>
		</div>
	);
};

export default Counter;

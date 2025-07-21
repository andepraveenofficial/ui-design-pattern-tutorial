import { useEffect, useState } from "react";

export const useCounter = () => {
	const [count, setCount] = useState(() => {
		const localStorageCount = localStorage.getItem("count");
		return localStorageCount ? Number(localStorageCount) : 0;
	});

	useEffect(() => {
		localStorage.setItem("count", String(count));
	}, [count]);

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

	return {
		count,
		decrease,
		increase,
		reset,
	};
};

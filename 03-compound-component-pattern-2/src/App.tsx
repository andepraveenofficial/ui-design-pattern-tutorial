import React from "react";
import BasicComponentPattern from "./components/BasicComponentPattern";
import CompoundComponentPattern from "./components/CompoundComponentPattern";

export type IUser = {
	name: string;
	age: number;
};

const user: IUser = {
	name: "Ande Praveen",
	age: 28,
};

const App: React.FC = () => {
	return (
		<div>
			{" "}
			<div>
				<BasicComponentPattern user={user} />
				<hr style={{ margin: "20px" }} />
				<CompoundComponentPattern user={user}>
					<CompoundComponentPattern.Title />
					<CompoundComponentPattern.Content />
					<CompoundComponentPattern.Footer />
				</CompoundComponentPattern>
			</div>
		</div>
	);
};

export default App;

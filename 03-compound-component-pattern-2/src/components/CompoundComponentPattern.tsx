import { createContext, useContext, type PropsWithChildren } from "react";

/* -----> Context <----- */

type User = {
	name: string;
	age: number;
};

type UserContext = {
	user: User;
};

const UserContext = createContext<UserContext | undefined>(undefined);

const useUserContext = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error(
			"useUserContext must be used within a ComponentCompoundPattern"
		);
	}

	return context;
};

/* -----> Component <----- */

type CompoundComponentPattern = PropsWithChildren & {
	user: User;
};

// Define the main component as a function component with children as props.
const CompoundComponentPattern = ({
	children,
	user,
}: CompoundComponentPattern) => (
	<UserContext.Provider value={{ user }}>
		<div
			style={{
				padding: "1rem",
				width: "50%",
				backgroundColor: "#f97316",
				borderRadius: "0.375rem",
			}}
		>
			{children}
		</div>
	</UserContext.Provider>
);
// Static child components as functions
const Title = () => {
	return (
		<div>
			<h1
				style={{
					fontSize: "1.5rem",
					fontWeight: "bold",
					color: "white",
				}}
			>
				Card Title
			</h1>
		</div>
	);
};

const Content = () => {
	const context = useUserContext();

	console.log(context);

	const { user } = context;

	return (
		<div>
			<p
				style={{
					color: "#22c55e",
					fontWeight: "bold",
				}}
			>
				Card Content
			</p>
			<div
				style={{
					border: "1px solid #d1d5db",
					padding: "0.5rem",
				}}
			>
				<p>UserName: {user.name}</p>
				<p>UserAge: {user.age}</p>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			<p
				style={{
					color: "#3b82f6",
					fontWeight: "bold",
				}}
			>
				Card Footer
			</p>
		</div>
	);
};

// Attach the child components as static properties to the main component
CompoundComponentPattern.Title = Title;
CompoundComponentPattern.Content = Content;
CompoundComponentPattern.Footer = Footer;

export default CompoundComponentPattern;

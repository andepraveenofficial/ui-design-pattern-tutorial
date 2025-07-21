import React from "react";
import type { IUser } from "../App";

const BasicComponentPattern: React.FC<{ user: IUser }> = ({ user }) => {
	return (
		<div
			style={{
				padding: "1rem",
				width: "50%",
				backgroundColor: "#f97316",
				borderRadius: "0.375rem",
			}}
		>
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
					<p>UserName : {user.name}</p>
					<p>UserAge : {user.age}</p>
				</div>
			</div>
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
		</div>
	);
};

export default BasicComponentPattern;

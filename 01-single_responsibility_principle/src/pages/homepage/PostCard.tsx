import React from "react";
import type { Post } from "./types";



// PostCard Responsibilities

/*
1. UI Component-> PostCard -> just styles applied
*/

type PostCardPropTypes = {
	post: Post;
};

const PostCard: React.FC<PostCardPropTypes> = ({ post }) => {
	return (
		<div
			style={{
				border: "2px solid black",
				boxShadow: "0 0 10px black",
				padding: "10px",
				margin: "10px",
				borderRadius: "10px",
				width: "400px",
			}}
		>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
};

export default PostCard;

import React, { useEffect, useState } from "react";

// HomePage Responsibilities

/*
1. UI Component-> PostCard
2. UI Rendering
3. Search Functionality
4. Data Fetch
*/

type Post = {
	id: number;
	title: string;
	body: string;
};

const data: Post[] = [
	{
		id: 1,
		title: "title 1",
		body: "This is my first post",
	},
	{
		id: 2,
		title: "title 2",
		body: "This is my second post",
	},
	{
		id: 3,
		title: "title 3",
		body: "This is my third post",
	},
	{
		id: 4,
		title: "title 4",
		body: "This is my fourth post",
	},
	{
		id: 5,
		title: "title 5",
		body: "This is my fifth post",
	},
];

const HomePage: React.FC = () => {
	const [posts, setPosts] = useState<null | Post[]>(null);
	const [searchText, setSearchText] = useState<string>("");
	const [filteredPosts, setFilteredPosts] = useState<null | Post[]>(null);

	const fetchPostsData = () => {
		const response = data;
		return response;
	};

	useEffect(() => {
		const fetchedPosts = fetchPostsData();
		setPosts(fetchedPosts);
	}, []);

	useEffect(() => {
		// safe check
		if (!posts) return;

		const updatedFilteredPosts = posts?.filter((post) =>
			post.title.includes(searchText)
		);
		setFilteredPosts(updatedFilteredPosts);
	}, [posts, searchText]);

	const handleSearchtext = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setSearchText(event.target.value);
	};

	return (
		<div>
			{/* -----> Search Functionality<----- */}
			<div style={{ margin: "10px", padding: "20px" }}>
				<input
					style={{ padding: "10px" }}
					type='text'
					placeholder='Seact Posts'
					onChange={handleSearchtext}
					value={searchText}
				/>
			</div>
			{/* -----> UI Rendering <----- */}
			{filteredPosts?.map((post) => {
				{
					/* -----> UI Component <----- */
				}
				return (
					<div
						key={post.id}
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
			})}
		</div>
	);
};

export default HomePage;

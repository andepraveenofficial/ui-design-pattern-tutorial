import { useEffect, useState } from "react"
import type { Post } from "./types";
import { data } from "./data";

// Fetch Responsibilities

/*
1. Data Fetch
*/

const useFetchPosts = () => {
  const [posts, setPosts] = useState<null | Post[]>(null);

  	const fetchPostsData = () => {
		const response = data;
		return response;
	};

   useEffect(() => {
    const fetchedPosts = fetchPostsData();
    setPosts(fetchedPosts);
   }, []);
  
  return posts;
}

export default useFetchPosts
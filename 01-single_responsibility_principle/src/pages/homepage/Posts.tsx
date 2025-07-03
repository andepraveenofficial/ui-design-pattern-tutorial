import React from 'react'
import type { Post } from './types'
import PostCard from './PostCard'


// Posts Responsibilities

/*
1. UI Rendering
*/

type PostsPropTypes = {
  filteredPosts: Post[] | null
}

const Posts:React.FC<PostsPropTypes> = ({filteredPosts}) => {
  return (
    <div>
      	{filteredPosts?.map((post) => {

        return (
          <PostCard key={post.id} post={post}/>
				);
      })}
    </div>
  )
}

export default Posts
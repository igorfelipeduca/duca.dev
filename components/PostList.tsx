"use client";

import Post, { Post as IPost } from "./Post";

interface PostListProps {
  posts: IPost[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-y-8 w-full">
        {posts.map((post, index) => (
          <Post
            key={index}
            cover_image={post.cover_image}
            title={post.title}
            user={post.user}
            url={post.url}
            description={post.description}
            posted_on={post.posted_on}
          />
        ))}
      </div>
    </div>
  );
}

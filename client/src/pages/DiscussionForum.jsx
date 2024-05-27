import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';

function DiscussionForum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts'); // Assuming this endpoint returns all posts
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
        } else {
          // Handle error
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {/* Render each post */}
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
      {/* Example of linking to individual post */}
      {/* <Link to="/post/post-slug-here">Read More</Link> */}
    </div>
  );
}

export default DiscussionForum;

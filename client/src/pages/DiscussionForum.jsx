import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { Button } from 'flowbite-react';
import { HiOutlineExclamationCircle, HiOutlinePencilAlt } from "react-icons/hi";
import Modal from 'react-modal';

function DiscussionForum() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector(state => state.user);

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

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      maxWidth: '300px', // Max width
      maxHeight: '250px', // Max height
      margin: 'auto',
      background: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  const handleCreatePostClick = () => {
    if (!currentUser?.isRegistered) {
      setIsModalOpen(true);
    } else {
      // Redirect the user to the create post page
      // Example: history.push('/create-post');
    }
  };
  

  return (
    <div className="container mx-auto p-8">
      <div className="text-center py-3">
        <h1 style={{ paddingBottom: "40px" }} className="text-3xl font-bold text-center">Discussion Forum</h1>
        <h2 style={{ paddingBottom: "40px" }} className="text-3xl font-bold text-center">Express and share your thoughts with others.</h2>
        
        {/* Conditionally render the "Create a Post" button */}
        {(currentUser?.isAdmin) ? (
          <Link to={'/create-post'}>
  <Button type='button' gradientDuoTone='purpleToPink' className="w-64 h-12 text-lg mx-auto flex items-center justify-center">
    <HiOutlinePencilAlt className="mr-2" /> Create a Post
  </Button>
</Link>
        ) : (
          <Button onClick={handleCreatePostClick} type='button' gradientDuoTone='purpleToPink' className="w-64 h-12 text-lg mx-auto"> Create a Post </Button>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center">
        {/* Render each post */}
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
        {/* Example of linking to individual post */}
        {/* <Link to="/post/post-slug-here">Read More</Link> */}
      </div>

       {/* Modal for unregistered users */}
       <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={modalStyle}>
        <div className="text-center">
          <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
          <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
            You need to be registered to create a post.
          </h3>
          <div className='flex justify-center gap-4'>
            <Button color='success'>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
            <Button color='gray' onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DiscussionForum;

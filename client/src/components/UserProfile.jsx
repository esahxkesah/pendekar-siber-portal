import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          console.error('Failed to fetch user');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error.message);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
      <div className="bg-yellow-100 shadow-md rounded-md p-8">
        <div className="flex items-center mb-4">
          <img
            src={user.profilePicture}
            alt={user.username}
            className="w-32 h-32 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-600">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Education</h3>
          <p className="text-gray-900">{user.education}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Accomplishments</h3>
          <p className="text-gray-900">{user.accomplishment}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Interests</h3>
          <p className="text-gray-900">{user.interest}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Quiz Scores</h3>
          <p className="text-gray-900">Quiz 1: {user.quiz1}</p>
          <p className="text-gray-900">Quiz 2: {user.quiz2}</p>
          <p  className="text-gray-900">Quiz 3: {user.quiz3}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Personality Type</h3>
          <p  className="text-gray-900" >{user.personalityType}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

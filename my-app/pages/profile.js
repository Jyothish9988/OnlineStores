// pages/profile.js

import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { gql } from 'graphql-tag';

const GET_PROFILE = gql`
  query getProfile($userId: Int!) {
    getUserProfile(userId: $userId) {
      avatar
      username
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation updateProfile($userId: Int!, $avatar: Upload!, $username: String!) {
    updateProfile(userId: $userId, avatar: $avatar, username: $username) {
      avatar
      username
    }
  }
`;

export default function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');

  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { userId: 1 }, // Replace with actual user ID from Django
  });

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleProfileUpdate = () => {
    updateProfile({
      variables: { userId: 1, avatar: avatar, username: username },
    });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <img src={data.getUserProfile.avatar || '/default-avatar.png'} alt="Profile" />
      <input
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
}

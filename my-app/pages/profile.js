import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import gql from 'graphql-tag';

// Define the GraphQL queries and mutations
const GET_PROFILE = gql`
  query getProfile($userId: Int!) {
    getUserProfile(userId: $userId) {
      avatar
      username
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation updateProfile($userId: Int!, $avatar: Upload, $username: String) {
    updateProfile(userId: $userId, avatar: $avatar, username: $username) {
      avatar
      username
    }
  }
`;

export default function Profile() {
  const [avatar, setAvatar] = useState(null); // Store avatar file
  const [username, setUsername] = useState(''); // Store username
  const [userId, setUserId] = useState(1); // User ID for fetching and updating profile

  // Query to get the profile data
  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { userId },
  });

  // Mutation to update profile data
  const [updateProfile, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_PROFILE, {
    onCompleted: (data) => {
      console.log('Profile updated successfully:', data);
    },
    onError: (err) => {
      console.error('Error updating profile:', err);
    },
  });

  // Loading state while fetching the profile
  if (loading) return <p>Loading...</p>;

  // Error handling for fetching profile data
  if (error) return <p>Error: {error.message}</p>;

  // Handle the profile update
  const handleProfileUpdate = async () => {
    if (!avatar && !username) {
      alert('Please select an avatar or change your username!');
      return;
    }

    try {
      // Call mutation to update profile with avatar and username
      await updateProfile({
        variables: {
          userId,
          avatar,
          username,
        },
      });
    } catch (err) {
      console.error('Error occurred during profile update:', err);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>

      {/* Displaying profile avatar */}
      <img
        src={data.getUserProfile.avatar || '/default-avatar.png'}
        alt="Profile Avatar"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />

      {/* Avatar upload input */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
      />

      {/* Username input */}
      <input
        type="text"
        value={username || data.getUserProfile.username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Update Username"
      />

      {/* Button to update profile */}
      <button onClick={handleProfileUpdate} disabled={updateLoading}>
        {updateLoading ? 'Updating...' : 'Update Profile'}
      </button>

      {/* Error handling for update mutation */}
      {updateError && <p style={{ color: 'red' }}>Error: {updateError.message}</p>}
    </div>
  );
}

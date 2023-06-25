import { useState } from 'react';
import { useUser } from '../lib/useUser';

const ProfilePage = () => {
  const { userDetails, insertOrUpdateUserProfile } = useUser();
  const [details, setDetails] = useState(userDetails?.additional_info || {});

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertOrUpdateUserProfile(details);
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Render your form fields here, for example: */}
        <label>
          Favorite Color:
          <input
            type="text"
            name="favoriteColor"
            value={details.favoriteColor || ''}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields as needed */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
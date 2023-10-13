import React from "react";
import UserImage from "../assets/User.jpg"

interface UserProfileProps {
  name: string;
  age: number;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, email }) => {
  return (
    <div className="user-container">
      <h2>User Profile</h2>
      <img src={UserImage} alt="User's Image" className="user-img" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
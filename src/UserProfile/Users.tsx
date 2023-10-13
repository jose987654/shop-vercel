import UserProfile from "./UserProfile";

const Users = () => {
  const person = {
    name: "John Doe",
    age: 30,
    email: "johndon@gmail.com",
  };

  return (
    <div>
      <UserProfile {...person} />
    </div>
  );
};

export default Users;
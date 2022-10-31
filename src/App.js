import "./App.css";
import users from "./Data/Users";
import UsersList from "./Components/UsersList";
import { useState } from "react";

function App() {
  const deleteUserHandler = (id) => {
    const filteredUsers = _users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  const [_users, setUsers] = useState(users);

  return (
    <div>
      <UsersList users={_users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;

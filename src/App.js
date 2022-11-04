import "./App.css";
import users from "./Data/Users";
import UserForm from "./Components/UserForm";
import UsersList from "./Components/UsersList";
import { useState } from "react";

function App() {
  const deleteUserHandler = (id) => {
    const filteredUsers = _users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const openOrCloseFormHandler = (isEditing) => {
    setIsEditing(isEditing);
  };

  const formSubmitHandler = (user) => {
    setUsers((prevUsersArray) => [user, ...prevUsersArray])
  }

  const [_users, setUsers] = useState(users);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <UserForm
        isEditing={isEditing}
        oncreateAndUpdateFormButtonClick= {openOrCloseFormHandler}
        onFormOpenOrClose={openOrCloseFormHandler}
        onFormSubmit={formSubmitHandler}
      />
      <UsersList users={_users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;

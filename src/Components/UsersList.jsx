import "../Styles/UsersList.css";
import User from "./User";

const UsersList = (props) => {
  return (
    <div className="list-container">
      {props.users.map((user) => (
        <User
          key={user.id.toString()}
          user={user}
          onDeleteUser={props.onDeleteUser}
        />
      ))}
    </div>
  );
};

export default UsersList;

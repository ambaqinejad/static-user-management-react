import "../Styles/UsersList.css";
import User from "./User";

const UsersList = (props) => {
  return (<div className="list-container">
    {props.users.map(user => <User key={user.id} user={user}/>)}
  </div>);
};

export default UsersList;

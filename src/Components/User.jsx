import "../Styles/User.css";

const User = (props) => {
  const deleteUserHandler = () => {
    if (window.confirm("Are you sure")) {
      props.onDeleteUser(props.user.id);
    }
  };

  return (
    <div>
      <div className="user-card">
        <img src={props.user.avatar} alt="user" />
        <div className="user-card__info">
          <p>
            <span>Firstname: </span>
            {props.user.first_name}
          </p>
          <p>
            <span>Lastname: </span>
            {props.user.last_name}
          </p>
          <p>
            <span>Email: </span>
            {props.user.email}
          </p>
        </div>
        <div className="user-card__controls">
          <button className="update-btn">Update</button>
          <button onClick={deleteUserHandler} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;

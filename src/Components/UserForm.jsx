import "../Styles/UserForm.css";
import CreateAndUpdateForm from "./CreateAndUpdateForm";

const UserForm = (props) => {
  const formCreateButtonHandler = () => {
    props.oncreateAndUpdateFormButtonClick(true);
  };

  return (
    <div className="user-form-container">
      {!props.isEditing && (
        <button
          onClick={formCreateButtonHandler}
          className="user-creation-button"
        >
          Create New User
        </button>
      )}
      {props.isEditing && (
        <CreateAndUpdateForm
          onFormOpenOrClose={props.onFormOpenOrClose}
          onFormSubmit={props.onFormSubmit}
        />
      )}
    </div>
  );
};

export default UserForm;

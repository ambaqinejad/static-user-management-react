import "../Styles/CreateAndUpdateForm.css";
import { useState } from "react";

const CreateAndUpdateForm = (props) => {
  const formCancelButtonHandler = () => {
    props.onFormOpenOrClose(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const avatarFileName = avatarValue.replace("C:\\fakepath\\", "");
    const user = {
      id: Math.random(),
      email: emailValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    };
    props.onFormSubmit(user);
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setAvatarValue("");
    props.onFormOpenOrClose(false)
  };

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [avatarValue, setAvatarValue] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstNameValue(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastNameValue(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const avatarChangeHandler = (event) => {
    console.log(event.target.value);
    setAvatarValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="user-form">
        <label htmlFor="firstName">Firstname:</label>
        <input
          value={firstNameValue}
          type="text"
          id="firstName"
          onChange={firstNameChangeHandler}
        />

        <label htmlFor="lastName">Lastname:</label>
        <input
          value={lastNameValue}
          type="text"
          id="lastName"
          onChange={lastNameChangeHandler}
        />

        <label htmlFor="email">Email:</label>
        <input
          value={emailValue}
          type="email"
          id="email"
          onChange={emailChangeHandler}
        />

        <label htmlFor="avatarFile">Avatar:</label>
        <input
          className="avatar-input"
          accept="image/png, image/jpeg"
          type="file"
          id="avatarFile"
          onChange={avatarChangeHandler}
        />

        <div className="user-form__buttons-container">
          <button
            type="button"
            className="cancel-btn"
            onClick={formCancelButtonHandler}
          >
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAndUpdateForm;

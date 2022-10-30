import React from "react";
import "./CreateAccountForm.css";

    //form to receive these inputs
const CreateAccountForm = ({
  setInputValue,
  inputValue,
  tableData,
  setTableData,
}) => {
  function handleChange(e) { //handles inputs change event
    const { name, value } = e.target;
    setInputValue((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleClick = () => {
    //condition to ensure to empty input field
    if (
      !inputValue.firstName ||
      !inputValue.lastName ||
      !inputValue.gender ||
      !inputValue.emailAddress ||
      !inputValue.mobileNumber ||
      !inputValue.nationality||
      inputValue.nationality==="Nationality"
    ) {
      alert("Ensure all inputs are filled");
      return
    }
    //Add New data to the Account List Table
    setTableData([
      ...tableData,
      {
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        gender: inputValue.gender,
        emailAddress: inputValue.emailAddress,
        mobileNumber: inputValue.mobileNumber,
        nationality: inputValue.nationality,
      },
    ]);
    //Remove all Values from the input onsubmit
    setInputValue({
      firstName: "",
      lastName: "",
      gender: inputValue.gender,
      emailAddress: "",
      mobileNumber: "",
      nationality: "",
    });
  };
  return (
    <div className="accountForm">
      <div className="form form-group">
        <div className="input">
          <input
            className="col-12 form-control inputItem"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={inputValue.firstName}
          /> 
          <input
            className="col-12 form-control inputItem"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={inputValue.lastName}
          /> 
          <div className="gender">
            <div className="genderInfo">
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={handleChange}
              />
              Male
            </div>
            <div className="genderInfo">
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={handleChange}
              />
              Female
            </div>
          </div>
          <input
            className="col-12 form-control inputItem"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            name="emailAddress"
            value={inputValue.emailAddress}
          />
          <input
            className="col-12 form-control inputItem"
            type="tel"
            placeholder="Mobile Number"
            onChange={handleChange}
            name="mobileNumber"
            value={inputValue.mobileNumber}
          />
          <select
            className="col-12 inputItem"
            name="nationality"
            value={inputValue.nationality}
            onChange={handleChange}
          >
            <option>Nationality</option>
            <option>Nigerian</option>
            <option>Ghanian</option>
            <option>British</option>
          </select>
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateAccountForm;

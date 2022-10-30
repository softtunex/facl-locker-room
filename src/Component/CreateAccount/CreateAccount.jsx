import React from "react";
import CreateAccountForm from "../CreateAccountForm/CreateAccountForm";
import "./CreateAccount.css";
//Create Account
const CreateAccount = ({
  setInputValue,
  inputValue,
  tableData,
  setTableData,
}) => {
  return (
    <div className="createAccount">
      <div>
        <p>Create Account</p>
      </div>
      <CreateAccountForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        tableData={tableData}
        setTableData={setTableData}
      />
    </div>
  );
};

export default CreateAccount;

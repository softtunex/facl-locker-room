import React from "react";
import "./AccountList.css";
import { Table } from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
//Account List
const AccountList = ({ accountLists }) => {
  return (
    <div className="accountList">
      <div className="table-content">
        <div>
          <p>List of Account</p>
        </div>
        <div className="accountListTable"> 
          <table className="table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Nationality</th>
              </tr>
            </thead>
            {/* Display the data on the table */}
            <tbody className="bg-light">{accountLists}</tbody> 
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountList;

import React from 'react'
import "./AccountList.css"

const AccountList = ({accountLists}) => {
  return (
    <div className='accountList'>
        <p>List of Account</p>
        <table>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Nationality</th>
          </tr>
          {accountLists}
        </table>
    </div>
  )
}

export default AccountList
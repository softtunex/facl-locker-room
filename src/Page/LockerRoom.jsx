import React from 'react'
import AccountList from '../Component/AccountList/AccountList'
import CreateAccount from '../Component/CreateAccount/CreateAccount'
import "./LockerRoom.css"

const LockerRoom = ({accountLists}) => {
  return (
    <div className='lockerRoom'>
        <div>
            <AccountList accountLists={accountLists}/>
        </div>
        <div>
            <CreateAccount/>
        </div>
    </div>
  )
}

export default LockerRoom
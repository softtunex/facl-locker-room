import React from 'react'
import AccountList from '../Component/AccountList/AccountList'
import CreateAccount from '../Component/CreateAccount/CreateAccount'
import "./LockerRoom.css"

const LockerRoom = ({accountLists,setInputValue,inputValue,tableData,setTableData}) => {
  return (
    <div className='lockerRoom'>
        <div>
            <AccountList accountLists={accountLists} inputValue={inputValue}/>
        </div>
        <div>
            <CreateAccount inputValue={inputValue} setInputValue={setInputValue} tableData={tableData} setTableData={setTableData}/>
        </div>
    </div>
  )
}

export default LockerRoom
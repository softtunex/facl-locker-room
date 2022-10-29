
import { useEffect, useState } from 'react';
import './App.css';
import LockerRoom from './Page/LockerRoom.jsx';

function App() {
  const [tableData, setTableData] = useState([])

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json")
      .then(res=>res.json())
      .then(data=>setTableData(data))
  },[])

  const accountLists = tableData.map((data,i)=>{
    return(
      <tr key={i}>
              <td>{data.firstName} {data.lastName}</td>
              <td>{data.gender==="M"?"Male":"Female"}</td>
              <td>{data.emailAddress}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.nationality}</td>
            </tr>
    )
  })
  return (
    <div className="App">
      <LockerRoom accountLists={accountLists}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import LockerRoom from "./Page/LockerRoom.jsx";

function App() {
  const [tableData, setTableData] = useState([]);
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    emailAddress: "",
    mobileNumber: "",
    nationality: "",
  });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data))
      .catch((err) =>
        alert("An error occured, Check your internet connection")
      );
  }, []);//consume API on pageload

  const accountLists = tableData.map((data, i) => {
    return (
      <tr key={i}>
        <td>
          {data.firstName} {data.lastName}
        </td>
        <td>{data.gender === "M" ? "Male" : "Female"}</td>
        <td>{data.emailAddress}</td>
        <td>{data.mobileNumber}</td>
        <td>{data.nationality}</td>
      </tr>
    );
  });
  //   <div className="form">
  //     <div className="input">
  //       <input
  //         className="col-12 form-control"
  //         type="text"
  //         placeholder="First Name"
  //         onChange={handleChange}
  //         name="firstName"
  //         value={inputValue.firstName}
  //       />
  //       <input
  //         className="col-12 form-control"
  //         type="text"
  //         placeholder="Last Name"
  //         onChange={handleChange}
  //         name="lastName"
  //         value={inputValue.lastName}
  //       />
  //       <input
  //         type="radio"
  //         name="gender"
  //         value="M"
  //         onChange={handleChange}
  //       />Male
  //       <input
  //         type="radio"
  //         name="gender"
  //         value="F"
  //         onChange={handleChange}
  //       />Female
  //     </div>
  //     <input
  //         className="col-12 form-control"
  //         type="email"
  //         placeholder="Email Address"
  //         onChange={handleChange}
  //         name="emailAddress"
  //         value={inputValue.emailAddress}
  //       />
  //     <input
  //         className="col-12 form-control"
  //         type="tel"
  //         placeholder="Mobile Number"
  //         onChange={handleChange}
  //         name="mobileNumber"
  //         value={inputValue.mobileNumber}
  //       />
  //     <select className="col-12 form-control" name="nationality" value={inputValue.nationality} onChange={handleChange}>
  //       <option>Nationality</option>
  //       <option>Nigerian</option>
  //       <option>Ghanian</option>
  //       <option>British</option>
  //     </select>
  //     <button type="submit" onClick={handleClick}>
  //       Save
  //     </button>
  //   </div>
  // );

  return (
    <div className="App">
      <LockerRoom
        accountLists={accountLists}
        inputValue={inputValue}
        setInputValue={setInputValue}
        tableData={tableData}
        setTableData={setTableData}
      />
    </div>
  );
}

export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmpList from './Components/EmployeeList/empList';
//import EmpList from './Components/EmployeeList/empList';
//import addEmp from './Components/EmpForm/addEmp';
import AddEmp from './Components/EmpForm/addEmp';

const App = () => {

  const UserData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ]

  // const initialFormState = { id: null, name: '', username: '' }

  // // Setting state
  // const [state, setState] = useState(UserData);

  // const addEmp = (emp) => {
  //   emp.id = emp.length + 1;
  //   setState([...state, emp]);
  // }
  return (
    <div className="container">
      <h4>CRUD App with Hooks</h4>
      <div className="row">
        <div className="col-md-6">
          <h2>Add user</h2>
          {/* <AddEmp addNewEmp={addEmp}/> */}
          <AddEmp />
        </div>
        <div className="col-md-6">
          <h2>View users</h2>
          <EmpList />
          {/* <EmpList employees={state}/> */}
        </div>
      </div>
    </div>
  );
};

export default App; 
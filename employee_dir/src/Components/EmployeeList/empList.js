import React from "react";
import { connect } from 'react-redux';

const EmpList = (props) => {
  console.log(props);
  return(
    <table className="table table-hover table-bordered table-responsive">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.posts.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phn}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td>{user.zip}</td>
            {/* <td>{user.name}</td> */}
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        )
      )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return{
    posts: state
  }
}

export default connect(mapStateToProps)(EmpList);

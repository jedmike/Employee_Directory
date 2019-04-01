import React, { Component } from "react";
import {connect} from 'react-redux';

class AddEmp extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (e)  {
        e.preventDefault();
        const email = this.getEmail.value;
        const name = this.getName.value;
        const phn = this.getNumber.value;
        const address = this.getAddress.value;
        const city = this.getCity.value;
        const state = this.getState.value;
        const zip = this.getZipCode.value;
        const data ={
            id: new Date(),
            email,
            name,
            phn,
            address,
            city,
            state,
            zip
        }
        this.props.dispatch ({
            type: 'ADD_NewEmp',
            data
        });
        this.getEmail.value = '';
        this.getName.value = '';
        this.getNumber.value = '';
        this.getAddress.value = '';
        this.getCity.value = '';
        this.getState.value = '';
        this.getZipCode.value = '';
        console.log(this.props);
    }
    render(){
        return(
            <form className="form-horizontal" onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label for="inputPassword3" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" 
                        ref={(input)=>this.getName = input} id="inputPassword3" placeholder="Name" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" name="email" id="inputEmail3" 
                    ref={(input)=>this.getEmail = input}  placeholder="Email" onChange={this.handleChange} />
                </div>
                </div>
                
                <div className="form-group">
                <label for="inputPhn" className="col-sm-2 control-label">Phone No</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" name="name" maxLength="10"
                    ref={(input)=>this.getNumber = input} id="inputPhn" placeholder="Phone number" onChange={this.handleChange} />
                </div>
                </div>
                <div className="form-group">
                <label  className="col-sm-2 control-label">Addess</label>
                <div className="col-sm-10">
                    <textarea required rows="5" ref={(input)=>this.getAddress = input}
                    placeholder="Enter Post" />
                </div>
                </div>
                <div className="form-group">
                <label for="inpuCity" className="col-sm-2 control-label">City</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" maxLength="30"
                    ref={(input)=>this.getCity = input} id="inpuCity" placeholder="City" onChange={this.handleChange} />
                </div>
                </div>
                <div className="form-group">
                <label for="inputstate" className="col-sm-2 control-label">State</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" 
                    ref={(input)=>this.getState = input} id="inputstate" placeholder="State" onChange={this.handleChange} />
                </div>
                </div>
                <div className="form-group">
                <label for="inputZip" className="col-sm-2 control-label">Zip Code</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" maxLength="10"
                    ref={(input)=>this.getZipCode = input} id="inputZip" placeholder="Zipcode" onChange={this.handleChange} />
                </div>
                </div>
                {/* <div className="form-group">
                    <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                        Male
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                        Female
                    </label>
                </div> */}
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">ADD New</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default connect()(AddEmp);

import "./Style.css";

import React from "react";
var data =[];
class TokenForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    if(fname!=="" && lname !=="")  data.push(fname, lname);
   else alert("Please enter a First Name or Last Name")
    console.log(data);
    const { history } = this.props;
    if (fname==="" ) console.log("Please enter a name");
    else if (lname==="" )  console.log("Please enter a name");
    else return history.push("/home");
    return fname;
  }

 
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Welcome to
          <br></br>
          <span style={{color:"gold"}}><h5> Crypto World</h5></span>
          
        </h1>
        <br></br>
        <br></br>

        <input
          className="name"
          type="text"
          placeholder="First Name"
          name="fname"
          value={this.state.fname}
          onChange={this.handleInputChange}
        />
        <br></br>
        <br></br>
        <input
          className="name"
          type="text"
          placeholder="Last Name"
          name="lname"
          value={this.state.lname}
          onChange={this.handleInputChange}
        />
        <br></br>
        <br></br>

        <button className="submit" type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

const logger={
  TokenForm,
  data
}
export default logger ;

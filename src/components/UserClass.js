import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     userInfo : {
        name: "dummy name",
        location : "default",
     }
    };
  }
 async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaypandey2003");
    const json = await data.json(); 
    console.log(json);
    this.setState({
        userInfo: json,
    });
  }
  render() {
  
    const {name,location,avatar_url} = this.state.userInfo;
    return (
    <div className="user-card"> 
      <h2> Name : {name}</h2>
      <h3> Location : {location}</h3>
      <img src={avatar_url}/>
      <h4> contact : rakshaypandey@gmail.com</h4>
    </div>)
  }
}
export default UserClass;

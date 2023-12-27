import React from "react";

// Class based Component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    // console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Constructor Did Mount");
    const data = await fetch("https://api.github.com/users/porwalarchit");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    // Called after componentDidMount(), when we are updating the component.
    // console.log("Component did Update");
  }

  componentWillUnmount(){
    // Called when we are UNMOUNTING the component.
    // console.log("Component will unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");
    // const { name, location } = this.props;

    // const { count, count2 } = this.state;

    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-box">
        {/* <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: architporwal@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/** 
 * MOUNTING LIFECYCLE
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML dummy>
 * ComponentDidMount
 *      <API Call>
 *      <this.setState> -> State Variable is updated
 * 
 * UPDATE LIFECYCLE
 * 
 * Render (API data)
 *      <HTML API data>
 * ComponentDidUpdate
 * 
 */

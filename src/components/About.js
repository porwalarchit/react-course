import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  // API Call
  async componentDidMount() {
    // console.log("Parent Constructor Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <div className="font-bold">
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is the description of About Us Page.</h2>
        <UserClass name={"First (class) "} location={"Gandhinagar (class)"} />
        {/* <UserClass name={"Second (class) "} location={"Gandhinagar (class)"} /> */}

        {/* <User name={"Archit Porwal (functional)"} /> */}
      </div>
    );
  }
}

export default About;

/* 
 - Parent Constructor
 - Parent Render

  - First Child Constructor
  - First Child Render

  - Second Child Constructor
  - Second Child Render

  < DOM UPDATED - IN A SINGLE BATCH >
 
  - First Child ConstructorDidMount
  - Second Child ConstructorDidMount

 - Parent ConstructorDidMount
*/

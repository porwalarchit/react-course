import { useState } from "react";

const User = ({name}) => {
  const [count] = useState(0);
  return(
    <div className="user-box">
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Gandhinagar</h3>
      <h4>Contact: architporwal@gmail.com</h4>
    </div>
  )
}

export default User;
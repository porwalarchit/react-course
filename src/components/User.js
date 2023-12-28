import { useEffect, useState } from "react";

const User = ({name}) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("User Component");
    }, 1000);

    // The below return will be called on Component Unmounting,
    // works similar to componentWillUnmount().
    return () => {
      console.log("Component Unmounted");
      clearInterval(timer);
    }
  }, []);

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
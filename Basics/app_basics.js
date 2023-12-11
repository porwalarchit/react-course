

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste Everyone!"
);

// JSX (Java Script XML) => React.createElement => Object => HTML(DOM)
// Babel understand JSX, and converts it into React.createElement()
const heading1 = (
  <h1 id="title" key="h2">
    Namaste React using JSX
  </h1>
);

const Title = () => {
    return <h1>React Course</h1>
}

const HeaderComponent = () => {
  return (
    <div>
        {heading1} // Use '{ }' for using component in Functional Component
        <Title/> // Use '<name/>' for using functional component in a Functional Component
        {Title()} // Use '{ }' for using functional component as a function in a Functional Component
        <h1>Namaste React from Functional Component</h1>
        <h2>This is a h2 tag</h2>
    </div>
  );
};

const HeaderComponent2 = () => {
  <div>
    <h1>Namaste React from Functional Component</h1>
    <h2>This is a h2 tag</h2>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Use '< />' to render functional components   
root.render(<HeaderComponent/>);

/*
 * PARCEL?
 * HMR - Hot Module Reload - Used by Parcel to reload the page, on any change in the code.
 * Parcel used File Watcher Algorithm (written in C++).
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Builds
 * Super fast Build Algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browsers.
 * HTTPS on Dev
 * Port Number
 * Consistent Hashing Algorithm
 * Zero Config
 */

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

// React Component
// 1- Class based Component (Old Way)

// 2- Functional Component (Latest Way)
// Name of component starts with Capital Letter (ALWAYS)
// Composing Components
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

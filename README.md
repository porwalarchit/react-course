## PARCEL?
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

### JSX (Java Script XML) => React.createElement => Object => HTML(DOM)
### Babel understand JSX, and converts it into React.createElement()

### React.createElement => Object => HTML(DOM)

## React Component
  ### 1- Class based Component (Old Way)

  ### 2- Functional Component (Latest Way)
- Name of component starts with Capital Letter (ALWAYS)
- Composing Components

### root.render(heading);
### Use '< />' to render functional components   
 
## Two Types of Export/Import
 
### Default Export/Import

- export default Component
- import Component from "path";

### Named Export/Import
 
- export Component
- import {Component} from "path";

## React Hooks (Normal JS Utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

## Higher Order Component
- It is a function that takes a component and returns a component. 
- Higher Order Component are Pure Functions.  

## Controlled and Uncontrolled Component
## Lifting the State Up
## Props Drilling is Problem
## Context is the Solution.
- Lect 11
- createContext
- useContext -> For Functional Component
- Context.Consumer -> For Class Based Component
- Context.Provider

## Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app.
- Slice (cartSlice)
- Dispatch (action)
- Selector
# Working with React in ES6

This project outlines how to work wit React.js using es6

Setting up and getting started with a new project

> npm init

> npm install react react-dom --save

> npm install babel webpack webpack-dev-server -g

Make sure the following dependencies are installed on your system

> npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

## Running the project

> npm start

## Overview of concepts implemented

- Basic components
- Rendering JSX (HTML transpiled into JavaScript)
- Class properties
- State Basics
- Owner / Ownee Relationship (When a component renders another component, the parent component can be called a composite component) In this case the app component is the composite.
- Using refs to access components https://facebook.github.io/react/docs/more-about-refs.html
- Accessing child properties
- Component Lifecycle (Mounting, updating) https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
- Higher order components
- Composable components
- Dynamically Generated Components
- JSX Live Compiler
- Precompile JSX
- Developer tools

Note: I use Intellij IDEA and it conflicts with earlier JavaScript version syntax

You can update it by going to..

Preferences->Project Settings->JavaScript (Update to ECMAScript 6)

Useful links

https://facebook.github.io/react/docs/why-react.html
https://facebook.github.io/react/docs/videos.html
https://facebook.github.io/react/docs/thinking-in-react.html
https://egghead.io/lessons/react-composable-components

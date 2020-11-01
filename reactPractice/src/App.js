import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Dalton",
      animal: "Dog",
      breed: "Shih-Tzu",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Jack Bauer",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

// created app but it won't do anything until you render or "Create" it

// will stamp App or string to create markup that will output to the DOM

render(React.createElement(App), document.getElementById("root"));

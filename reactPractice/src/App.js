import React, { useState } from 'react';
import { render } from 'react-dom';
// commenting import Pet out after building out Search Params component
// import Pet from './Pet';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {

  const themeHook = useState('darkblue');
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Dalton",
  //     animal: "Dog",
  //     breed: "Shih-Tzu",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Jack Bauer",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);

  return (
    // comment this section out after adding SearchParams component

    // <div>
    //   <h1 id='something-important'>~ Adopt Me !!! ~</h1>
    //   <Pet name='Luna' animal='Dog' breed='Havanese'/>
    //   <Pet name='Dalton' animal='Dog' breed='Shih-Tzu'/>
    //   <Pet name='Jack Bauer' animal='Cat' breed='Mixed'/>
    // </div>
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to='/'>~ Adopt Me!!!~</Link>
        </header>
        <Router>
          <SearchParams path='/'/>
          <Details path='/details/:id'/>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// created app but it won't do anything until you render or "Create" it

// will stamp App or string to create markup that will output to the DOM

// the render statement prior to JSX:
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById('root'));

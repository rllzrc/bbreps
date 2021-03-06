import React, { useEffect, useState, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext'

// new component, like a search box 
// form + label = good for accessibility 

const SearchParams = () => {

  // establishing hooks
  const [location, setLocation ] = useState('Seattle, WA');
  // no longer need separate hooks for animal + breed drop down menu after creating useDropdown custom hook
  // const [animal, setAnimal] = useState('dog');
  // const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // * guarantees to return a promise
  // super power = await, wait for this to finish then give me this data
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })
    // beauty of await -- you know you will get the above data by the time you reach the line below
    setPets(animals || []);
  }

  // adding effects - takes the place of life cycle methods like compDidMount, compWillUnmount, compDidUpdate
  // returns a promise obj
  // helpful for debugging
  // useEffect(() => {
  //   pet.breeds('dog')
  //   .then(console.log, console.error);
  // });
  // this will not run upon the first render

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal)
    .then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error)
  }, [animal, setBreed, setBreeds]);

  return (
    <div className='search-params'>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor='location'>
          Location
          <input 
          id='location' 
          value={location} placeholder='location'
          onChange={e => setLocation(e.target.value)} />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor='theme'>
          Theme
          <select 
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value='peru'>Peru</option>
            <option value='darkblue'>Dark Blue</option>
            <option value='mediumorchid'>Medium Orchid</option>
            <option value='chartreuse'>Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;



// * remove these labels after adding custom udeDropdown component hook -- aka shared generic class that is reusable
// * just need these two dropdown menus after adding custom hook -- <AnimalDropdown /> <BreedDropdown />
{/* <label htmlFor='animal'>
          Animal
          <select 
            id='animal'
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>{animal}</option>))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select 
            id='breed'
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={!breeds.length}
            >
              <option>All</option>
              {breeds.map(breedString => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option> 
            ))}
            </select>
          </label> */}
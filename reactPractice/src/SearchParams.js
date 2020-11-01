import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

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
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input 
          id='location' 
          value={location} placeholder='location'
          onChange={e => setLocation(e.target.value)} />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
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
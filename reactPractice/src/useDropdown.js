import React, { useState } from 'react';

// to make a generic dropdown component
const useDropdown = (label, defaultState, options) => {
  // custom hooks
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  
  // now we can use this like a hook!
  // gives us state, dropdown will handle any changes to it -- takes animal and breed dropdown into one generic hook ~
  return [state, Dropdown, setState];
};

export default useDropdown;
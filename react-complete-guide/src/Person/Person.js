import React from 'react';
import './Person.css';

const person = (gorgonzola) => {
  return (
    <div className='Person'>
      <p onClick={gorgonzola.click}>I'm {gorgonzola.name}. I am {gorgonzola.age}</p>
      <p>{gorgonzola.children}</p>
      <input 
        type='text' 
        onChange={gorgonzola.changed}
        value={gorgonzola.name}/>
    </div>
  )
}

export default person;
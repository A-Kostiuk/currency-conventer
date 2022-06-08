import React from 'react';
import { Field, StyledInput } from './styles';

function Input({ text, name, ...props }) {
  return (
    <StyledInput>
      <label htmlFor={name}>{text}</label>
      <Field id={name} name={name} type='number' min='0' {...props}/>
    </StyledInput>
  );
}

export default Input;

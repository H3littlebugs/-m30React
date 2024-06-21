// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? 'darkblue' : 'darkgray'};
  }
`;

export default Button;

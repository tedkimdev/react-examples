/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import THEME from '../../style/theme';

const StyledInput = styled.input`
  font-size: 20px;
  line-height: 20px;

  width: calc(100% - 20px);

  border: none;
  border-bottom: 1px solid ${THEME.gray || 'black'};
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 0.5rem;

  outline: none;

  ::placeholder {
    color: ${THEME.fontColor};
  }

  :focus {
    border-bottom: 1px solid ${THEME.darkGray};
  }
`;

const Input = ({ value, placeholder, handleChange }) => (
  <StyledInput placeholder={placeholder} value={value} onChange={handleChange} />
);

export default Input;

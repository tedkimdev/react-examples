/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import THEME from '../style/theme';

const Container = styled.div`
  margin: 0 0 0 1.25rem;
  display: flex;
`;

const TagItem = styled.div`
  color: ${THEME.fontColor};
  background-color: ${THEME.tagBackgroundColor};
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  margin: 0 0.3rem;
`;

const TagList = ({ tags }) => (
  <Container>
    {tags.map((tag, i) => (
      <TagItem key={`${i}_${tag}`}>{tag}</TagItem>
    ))}
  </Container>
);

export default TagList;

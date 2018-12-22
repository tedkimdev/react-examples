/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-style-type: none;
  color: #9a9a9a;
`;

const GradeItem = styled.li`
  span + span {
    margin-left: 2rem;
  }
`;

const GradeList = ({ grades }) => (
  <Container>
    {grades.map((grade, i) => (
      <GradeItem key={`${i}_${grade}`} grade={grade}>
        <span>{`Test ${i + 1}:`}</span>
        <span>{`${grade}%`}</span>
      </GradeItem>
    ))}
  </Container>
);

export default GradeList;

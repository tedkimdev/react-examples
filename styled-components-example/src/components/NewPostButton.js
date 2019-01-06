import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus as PlusIcon } from 'react-icons/fa/';

// TODO: use withComponent to inherit Button component styles
const NewPostLink = styled(Link)`
  position: fixed;
  bottom: 12px;
  right: 12px;
`;

export default function NewPostButton() {
  return (
    <NewPostLink to="/new">
      <PlusIcon size={16} />
      New post
    </NewPostLink>
  );
}

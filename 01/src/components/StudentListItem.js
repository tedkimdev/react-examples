/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

import THEME from '../style/theme';
import TagList from './TagList';
import GradeList from './GradeList';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 1px ${THEME.gray};

  h2 {
    font-size: 32px;
    margin: 10px 0px 10px 0px;
    text-transform: uppercase;
  }

  ul {
    margin-left: -20px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  color: ${THEME.fontColor};
`;

const Li = styled.li`
  & + & {
    margin-top: 0.3rem;
  }
`;

const ToggleButton = styled.button`
  color: darkGray;
  outline: none;
  border: none;

  height: 30px;
  width: 30px;
  margin-top: 0.5rem;
  margin-right: 1rem;
  margin-left: auto;
`;

const Image = styled.img`
  flex: 0 0 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 1px ${THEME.gray};
  margin: 1.5rem;
`;

const TagInput = styled.input`
  margin: 1rem 1rem;
  padding: 0.5rem;

  outline: none;
  border: none;
  border-bottom: solid 1px ${THEME.gray};

  & + & {
    margin-left: 1.5rem;
  }

  ::placeholder {
    color: ${THEME.fontColor};
  }

  :focus {
    border-bottom: solid 1px ${THEME.darkGray};
  }
`;

class StudentListItem extends Component {
  state = {
    toggled: false,
    input: '',
  };

  handleToggle = () => {
    const { toggled } = this.state;
    this.setState({
      toggled: !toggled,
    });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    const { input } = this.state;
    const { student, handleAddTag } = this.props;
    if (e.key === 'Enter' && input.length > 0) {
      handleAddTag(input, student);
      this.setState({
        input: '',
      });
    }
  };

  render() {
    const { student } = this.props;
    const { toggled, input } = this.state;
    const { handleToggle, handleChange, handleKeyPress } = this;

    return (
      <Container>
        <Image src={student.pic} alt={student.pic} />
        <div>
          <h2>{`${student.firstName} ${student.lastName}`}</h2>
          <div>
            <Ul>
              <Li>{`Email: ${student.email}`}</Li>
              <Li>{`Company: ${student.company}`}</Li>
              <Li>{`Skill: ${student.skill}`}</Li>
              <Li>
                {`Average: ${student.grades.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))
                  / student.grades.length}%`}
              </Li>
            </Ul>
          </div>
          {toggled ? (
            <div>
              <GradeList grades={student.grades} />
              {student.tags && <TagList tags={student.tags} />}
              <TagInput
                placeholder="Add a tag"
                value={input}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          ) : null}
        </div>
        {toggled ? (
          <ToggleButton type="button" onClick={handleToggle}>
            <FaMinus size={30} />
          </ToggleButton>
        ) : (
          <ToggleButton type="button" onClick={handleToggle}>
            <FaPlus size={30} />
          </ToggleButton>
        )}
      </Container>
    );
  }
}

export default StudentListItem;

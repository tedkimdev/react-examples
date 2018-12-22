/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Input from '../components/styles/Input';
import StudentListItem from '../components/StudentListItem';

const Container = styled.div`
  font-family: sans-serif;
  box-sizing: border-box;
`;

class App extends Component {
  state = {
    nameSearchInput: '',
    tagSearchInput: '',
    students: [],
    filteredStudents: [],
  };

  componentDidMount() {
    axios.get('https://www.hatchways.io/api/assessment/students').then((response) => {
      const { students } = response.data;
      this.setState({ students });
    });
  }

  handleSearchNameChange = (e) => {
    const value = e.target.value.toLowerCase();
    const { students } = this.state;

    const filteredStudents = students.filter(
      student => student.firstName.toLowerCase().includes(value)
        || student.lastName.toLowerCase().includes(value),
    );

    this.setState({
      nameSearchInput: e.target.value,
      filteredStudents,
    });
  };

  handleSearchTagChange = (e) => {
    const value = e.target.value.toLowerCase();
    const { students } = this.state;

    const filteredStudents = students
      .filter(student => student.tags)
      .filter(student => student.tags.filter(tag => tag.toLowerCase().includes(value)).length > 0);

    this.setState({
      tagSearchInput: e.target.value,
      filteredStudents,
    });
  };

  handleAddTag = (tag, student) => {
    const { students } = this.state;
    const index = students.indexOf(student);

    if (student.tags) {
      if (student.tags.includes(tag)) return;
      student.tags.push(tag);
    } else {
      student.tags = [tag];
    }

    this.setState({
      students: [
        ...students.slice(0, index),
        student,
        ...students.slice(index + 1, students.length),
      ],
    });
  };

  renderStudents = students => students.map(student => (
    <StudentListItem
      key={`${student.id}_${student.firstName}_${student.lastName}`}
      student={student}
      handleAddTag={this.handleAddTag}
    />
  ));

  render() {
    const { handleSearchNameChange, handleSearchTagChange, renderStudents } = this;
    const {
      tagSearchInput, nameSearchInput, filteredStudents, students,
    } = this.state;
    return (
      <Container>
        <Input
          value={nameSearchInput}
          placeholder="Search by name"
          handleChange={handleSearchNameChange}
        />
        <Input
          value={tagSearchInput}
          placeholder="Search by tag"
          handleChange={handleSearchTagChange}
        />
        {nameSearchInput.length > 0 || tagSearchInput.length > 0
          ? renderStudents(filteredStudents)
          : renderStudents(students)}
      </Container>
    );
  }
}

export default App;

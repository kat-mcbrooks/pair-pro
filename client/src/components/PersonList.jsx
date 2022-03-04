import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  return (
    <ul>
      {persons.map((person) => (
        <>
          <li key={person.name}>Name: {person.name}</li>
          <li key={person.languages}>Languages: {person.languages}</li>
          <li key={person.bio}>Bio: {person.bio}</li>
          <br></br>
        </>
      ))}
    </ul>
  );
};

export default PersonList;
